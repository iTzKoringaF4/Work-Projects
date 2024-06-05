function capturarPorTaxaDeAderencia(collumNumbersGripString) {
    var collumNumbersArray = collumNumbersGripString.split(',');
    /*if(collumNumbersArray === "15" && collumNumbersArray === "17"){
    monthName = "FEVEREIRO"
  }*/

  var monthName = "MAIO";

    var sheet = SpreadsheetApp.getActiveSpreadsheet();
    var tabSheet = sheet.getSheetByName('Matriz 27/05');
    var range = tabSheet.getRange('A1:BT' + tabSheet.getLastRow());
    var values = range.getValues();
    var filteredData = [];
    
    var headerRow = ['Nome Completo', 'Nome do Gestor', 'Email do Gestor', 'Local de Trabalho'];
    for (var k = 0; k < collumNumbersArray.length; k++) {
        headerRow.push('Taxa de Aderência ' + collumNumbersArray[k]);
    }
    
    filteredData.push(headerRow);

    for (var i = 0; i < values.length; i++) {
        var rowData = [values[i][0], values[i][5], values[i][71], values[i][7]];
        var aderenciaEncontrada = false; // Flag para indicar se a aderência foi encontrada para a linha atual
        for (var j = 0; j < collumNumbersArray.length; j++) {
            var value = values[i][collumNumbersArray[j]];
            if (value !== "" && value !== "#N/A" && value < 0.8) {
                rowData.push((value * 100).toFixed(1) + "%");
                aderenciaEncontrada = true;
            } else {
                rowData.push("");
            }
        }
        if (aderenciaEncontrada) {
            filteredData.push(rowData);
        }
    }
    
    var newSpreadsheet = SpreadsheetApp.create("RECICLAGEM TREINAMENTOS - " + monthName);
    var newSheet = newSpreadsheet.getActiveSheet();

    var row1 = newSheet.getRange('A1:D1');
    row1.setBackground('#ffff00')
        .setFontWeight('bold')
        .setFontSize(12);

    var grip = newSheet.getRange('E2:G');
    grip.setHorizontalAlignment("center")
        .setVerticalAlignment("middle")
    
    newSheet.getRange(1, 1, filteredData.length, filteredData[0].length).setValues(filteredData);
}
