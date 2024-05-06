function onOpen() {
  SpreadsheetApp.getUi()
  .createMenu("Menu de Funções")
  .addItem("Capturar por Aderência", "showGrip")
  .addItem("Dados - BSC", "showBsc")
  .addToUi();
}

function showGrip() {
  var html = 
    HtmlService.createHtmlOutputFromFile('catchGrip')
    .setWidth(1000) // Defina a largura da janela para 800 pixels
    .setHeight(600); // Defina a altura da janela para 600 pixels
  SpreadsheetApp.getUi().showModalDialog(html, 'Capturar por aderência');
}

function showBsc() {
  var html = 
    HtmlService.createHtmlOutputFromFile('bsc')
    .setWidth(1100) // Defina a largura da janela para 800 pixels
    .setHeight(600); // Defina a altura da janela para 600 pixels
  SpreadsheetApp.getUi().showModalDialog(html, 'Dados | BSC');  
}
