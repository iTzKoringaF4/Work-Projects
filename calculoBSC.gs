function calculoDeBSC(collumNumbersString, optionsString) {
    var collumNumberBscArray = collumNumbersString; // Convertendo string para array de números
    var selectedOptions = optionsString; // Convertendo string para array de números
    var monthName = "Presença para Líderes e Multiplicadores";
    
    var sheet = SpreadsheetApp.getActiveSpreadsheet();
    
    // Busca dados da primeira planilha
    var tabSheet1 = sheet.getSheetByName('Cópia de Matriz 1');
    var range1 = tabSheet1.getRange('H6:AV' + tabSheet1.getLastRow());
    var values1 = range1.getValues();
    
    // Objeto para armazenar bases e contadores de ocorrências de 1s (Um no plural)
    var totalMultiplica = {};
    var onesCount = {};
    
    // Iterar sobre as linhas a partir da linha 6 na primeira planilha
    for (var i = 0; i < values1.length; i++) {
        var base = values1[i][0]; // Base na coluna H (índice 0)
        
        if (values1[i][40] !== "Sim") { // Coluna "AV" é o índice 40
            // Inicializar contadores para a base atual
            var totalCount = 0;
            var onesCounter = 0;
            
            // Iterar sobre todas as colunas
            for (var j = 0; j < values1[i].length; j++) {
                var value = values1[i][j];
                if (collumNumberBscArray.includes(j) && (value === 0 || value === 1)) {
                    totalCount++;
                    if (value === 1) {
                        onesCounter++;
                    }
                }
            }
            
            // Armazenar contagem de 1s para a base atual
            onesCount[base] = (onesCount[base] || 0) + onesCounter;
            
            // Se a base já foi contabilizada, adicionar ao total existente
            if (totalMultiplica[base]) {
                totalMultiplica[base] += totalCount;
            } else {
                totalMultiplica[base] = totalCount;
            }
        }
    }

    // Busca dados da segunda planilha
    var tabSheet2 = sheet.getSheetByName('LIDERA OPS');
    var range2 = tabSheet2.getRange('E2:K' + tabSheet2.getLastRow());
    var values2 = range2.getValues();

    // Objeto para armazenar bases e contadores de ocorrências de 1s
    var liderMultiplica = {};
    var liderOnesCount = {};

    // Iterar sobre as linhas na segunda planilha
    for (var k = 0; k < values2.length; k++) {
        var liderBase = values2[k][0]; // Base na coluna E (índice 0)
        var liderTotalCount = 0;
        var liderOnesCounter = 0;

        // Iterar sobre todas as colunas
        for (var l = 0; l < values2[k].length; l++) {
            var value = values2[k][l];
            if (selectedOptions.includes(l) && (value === 0 || value === 1)) {
                liderTotalCount++;
                if (value === 1) {
                    liderOnesCounter++;
                }
            }
        }

        // Armazenar contagem de 1s para a base atual
        liderOnesCount[liderBase] = (liderOnesCount[liderBase] || 0) + liderOnesCounter;

        // Se a base já foi contabilizada, adicionar ao total existente
        if (liderMultiplica[liderBase]) {
            liderMultiplica[liderBase] += liderTotalCount;
        } else {
            liderMultiplica[liderBase] = liderTotalCount;
        }
    }

    // Formatar dados para exibição
    var filteredData = [];
    filteredData.push(["Bases", "Planejado Publico alvo (Multiplicadores)", "Planejado Publico alvo (Lideres)", 
        "Realizado Publico alvo (Multiplicador)", "Realizado Publico alvo (Lideres)"
    ]);

    // Adicionar dados da primeira planilha
    for (var base in totalMultiplica) {
        filteredData.push([base, totalMultiplica[base], liderMultiplica[base] || 0, onesCount[base], liderOnesCount[base] || 0]);
    }

    // Crie a aba 'BSC' ou limpe seu conteúdo se já existir
    var newSheet = sheet.getSheetByName('Aderência aos Treinamentos');
    if (newSheet) {
        newSheet.clear();
    } else {
        newSheet = sheet.insertSheet('Aderência aos Treinamentos');
    }

    // Mesclar células para adicionar o nome do mês
    var cellB1 = newSheet.getRange('B1');
    cellB1.setValue(monthName)
        .setBackground('#4a86e8')
        .setFontWeight('bold')
        .setFontColor('#ffffff')
        .setFontSize(14)
        .setHorizontalAlignment("center")
        .setVerticalAlignment("middle");
    newSheet.getRange('B1:F1').merge(); // Mesclar células B1 e F1

    // Mesclar células para adicionar o header do conteúdo
    var cellB2 = newSheet.getRange('B2');
    cellB2.setValue('Planejado')
        .setBackground('#f3f3f3')
        .setFontSize(12)
        .setFontWeight('bold')
        .setFontColor('#0000ff')
        .setHorizontalAlignment("center")
        .setVerticalAlignment("middle");
    newSheet.getRange('B2:C2').merge(); // Mesclar células B2 e C2
    
    // Adicionar o cabeçalho para a nova coluna
    var cellD2 = newSheet.getRange('D2');
    cellD2.setValue('Realizado')
        .setBackground('#f3f3f3')
        .setFontWeight('bold')
        .setFontColor('#0000ff')
        .setFontSize(12)
        .setHorizontalAlignment("center")
        .setVerticalAlignment("middle");
    newSheet.getRange('D2:E2').merge(); // Mesclar células D2 e E2

    var cellFunction = newSheet.getRange('F3');
    cellFunction.setValue('Total')
        .setFontWeight('bold')
        .setFontSize(12)
        .setHorizontalAlignment("center")
        .setVerticalAlignment("middle");

    var cellFunction = newSheet.getRange('F4:F' + filteredData.length);
    cellFunction.setFormula('=IFERROR((D4+E4)/(B4+C4)*100%;"Falta dados")')
        .setHorizontalAlignment("center")
        .setVerticalAlignment("middle");

    var rowFormat = newSheet.getRange('A3:E3');
    rowFormat.setFontWeight('bold').setFontSize(11);
    
    // Adicionar dados filtrados à nova aba
    newSheet.getRange(3, 1, filteredData.length, filteredData[0].length).setValues(filteredData);
}
