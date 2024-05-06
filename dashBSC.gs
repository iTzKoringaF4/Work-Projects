<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <link rel="stylesheet" href="style.css">
</head>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Montserrat';
}
.container{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.content{
    width: 800px;
    height: 500px;
    border: 1px solid #000;
    margin-right: 25px;
    border-radius: 5px;
}
.box-content{
    width: auto;
    height: auto;
    display: flex;
    justify-content: space-between;
}
.subtitle{
    color: #4285F4;
}
.box-lider-title{
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #000;
    border-right: 1px solid #000;
}
.box-multiplica-title{
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #000;
    border-left: 1px solid #000;
}
.collum-content{
    width: 100%;
    height: 94%;
    display: flex;
}
.collum-content-lider{
    width: 50%;
    border-right: #000 1px solid;
    padding: 5px;
}
.collum-content-multiplica{
    width: 50%;
    border-left: #000 1px solid;
    padding: 5px;
    overflow: scroll;
}
.month-title{
    margin-bottom: 5px;
}

/* CSS button */
.button-17 {
  align-items: center;
  appearance: none;
  background-color: #fff;
  border-radius: 24px;
  border-style: none;
  box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px,rgba(0, 0, 0, .14) 0 6px 10px 0,rgba(0, 0, 0, .12) 0 1px 18px 0;
  box-sizing: border-box;
  color: #3c4043;
  cursor: pointer;
  display: inline-flex;
  fill: currentcolor;
  font-family: "Google Sans",Roboto,Arial,sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 48px;
  justify-content: center;
  letter-spacing: .25px;
  line-height: normal;
  max-width: 100%;
  overflow: visible;
  padding: 2px 24px;
  position: relative;
  text-align: center;
  text-transform: none;
  transition: box-shadow 280ms cubic-bezier(.4, 0, .2, 1),opacity 15ms linear 30ms,transform 270ms cubic-bezier(0, 0, .2, 1) 0ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: auto;
  will-change: transform,opacity;
  z-index: 0;
}

.button-17:hover {
  background: #F6F9FE;
  color: #174ea6;
}

.button-17:active {
  box-shadow: 0 4px 4px 0 rgb(60 64 67 / 30%), 0 8px 12px 6px rgb(60 64 67 / 15%);
  outline: none;
}

.button-17:focus {
  outline: none;
  border: 2px solid #4285f4;
}

.button-17:not(:disabled) {
  box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
}

.button-17:not(:disabled):hover {
  box-shadow: rgba(60, 64, 67, .3) 0 2px 3px 0, rgba(60, 64, 67, .15) 0 6px 10px 4px;
}

.button-17:not(:disabled):focus {
  box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
}

.button-17:not(:disabled):active {
  box-shadow: rgba(60, 64, 67, .3) 0 4px 4px 0, rgba(60, 64, 67, .15) 0 8px 12px 6px;
}

.button-17:disabled {
  box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
}
</style>
<body>
  <h3>Faça um checklist abaixo para consultar os dados dos "Planejados" e "Realizados"
    de Líderes e Multiplicadores dos cursos escolhidos, referente a cada base Loggi.</h3>
    <div class="container">
        <div class="content">
            <div class="box-content">
                <div class="box-lider-title">
                    <h3 class="subtitle">Lider</h3>
                </div>
                <div class="box-multiplica-title">
                    <h3 class="subtitle">Multiplicador</h3>
                </div>
            </div>
            <div class="collum-content">
                <div class="collum-content-lider">
                    <div class="menu-list-lider"> 
                        <form id="dataFormDate" onsubmit="event.preventDefault();">
                            <b><p class="month-title">JANEIRO</p></b>
                            <input type="checkbox" id="option1" name="option1" value="1">
                            <label for="option1">16/01/2024 - Devolução para Embarcadores</label><br>
                            <input type="checkbox" id="option2" name="option2" value="2">
                            <label for="option2">24/01/2024 - Radar - Novo Tracking de Pacotes</label><br>
                            <input type="checkbox" id="option3" name="option3" value="3">
                            <label for="option3">31/01/2024 - Fiel Depositário - Receita Federal</label><br><br>
                            <hr><br>
                            <b><p class="month-title">FEVEREIRO</p></b>
                            <input type="checkbox" id="option4" name="option4" value="4">
                            <label for="option4">03/02/2024 - Loggi Ponto - Agências</label><br>
                            <input type="checkbox" id="option5" name="option5" value="5">
                            <label for="option5">19/02/2024 - Fluxo de abertura de chamados no Jira</label><br>
                            <input type="checkbox" id="option6" name="option6" value="6">
                            <label for="option6">20/02/2024 - Gestão de Ativos</label><br><br>
                        </form>            
                    </div>
                </div>
                <div class="collum-content-multiplica">
                    <form id="dataFormDate2" onsubmit="event.preventDefault();">
                        <b><p class="month-title">JANEIRO</p></b>
                        <p>*Não há cursos*</p><br>
                        <hr><br>
                        <b><p class="month-title">FEVEREIRO</p></b>
                        <input type="checkbox" id="option7" name="option7" value="9">
                        <label for="option7">19/02/2024	- Introdução ao Programa: 5s no setor em todas operações Loggi	</label><br>
                        <input type="checkbox" id="option8" name="option8" value="11">
                        <label for="option8">26/02/2024 - Inclusão de pacotes na esteira em XDs Automatizados</label><br><br>
                        <hr><br>
                        <b><p class="month-title">MARÇO</p></b>
                        <input type="checkbox" id="option9" name="option9" value="13">
                        <label for="option9">04/03/2024 - Devolução de Insumos em todas as operações Loggi</label><br>
                        <input type="checkbox" id="option10" name="option10" value="15">
                        <label for="option10">11/03/2024 - Boas práticas de Manuseio em todas operações Loggi</label><br>
                        <input type="checkbox" id="option11" name="option11" value="17">
                        <label for="option11">25/03/2024 - Como movimentar pacotes e sacas de forma correta, em todas operações Loggi</label><br><br>
                        <hr><br>
                        <b><p class="month-title">ABRIL</p></b>
                        <input type="checkbox" id="option12" name="option12" value="19">
                        <label for="option12">01/04/2024 - Validação de Entregadores em Agências e HUB's</label><br>
                        <input type="checkbox" id="option13" name="option13" value="21">
                        <label for="option13">08/04/2024 - Conferência de pacotes em Postos Avançados</label><br>
                        <input type="checkbox" id="option14" name="option14" value="23">
                        <label for="option14">15/04/2024 - Recebimento em todos os XDs - Parte I</label><br>
                        <input type="checkbox" id="option15" name="option15" value="25">
                        <label for="option15">22/04/2024 - Loggi Fácil</label><br>
                        <input type="checkbox" id="option16" name="option16" value="27">
                        <label for="option16">29/04/2024 - Triagem - Reversa XD Regional	</label><br><br>
                        <hr><br>
                        <b><p class="month-title">MAIO</p></b>
                        <input type="checkbox" id="option17" name="option17" value="29">
                        <label for="option17">06/05/2024 - Recebimento em todas Agências e HUBs - Parte I</label><br>
                        <input type="checkbox" id="option18" name="option18" value="31">
                        <label for="option18">13/05/2024 - Inclusão de pacotes em sacas</label><br>
                        <input type="checkbox" id="option19" name="option19" value="33">
                        <label for="option19">20/05/2024 - Amarração de pallets e gaylords com stretch</label><br>
                        <input type="checkbox" id="option20" name="option20" value="35">
                        <label for="option20">27/05/2024 - Amarração de carga no veículo 2.0</label><br>
                        <hr><br>
                        <b><p class="month-title">JUNHO</p></b>
                        <input type="checkbox" id="option20" name="option21" value="37">
                        <label for="option20">03/06/2024 - Recuperação de pacotes</label><br>
                    </form> 
                </div>
            </div>
        </div>
        <input class="button-17" type="button" value="Gerar Planilha" onclick="enviarDatas()">
    </div>
    <script>
        function enviarDatas() {
          var checkboxes2 = document.querySelectorAll('#dataFormDate2 input[type="checkbox"]:checked');
          var checkboxes1 = document.querySelectorAll('#dataFormDate input[type="checkbox"]:checked');
          var collumNumberBsc = [];
          var selectedOptions = [];
          
          checkboxes1.forEach(function(checkbox) {
            selectedOptions.push(checkbox.value);
          });

          checkboxes2.forEach(function(checkbox) {
            collumNumberBsc.push(checkbox.value);
          });
          
          // Unindo os elementos do array em uma string separada por vírgula
          var collumNumbers = (collumNumberBsc.join(','));
          var options = (selectedOptions.join(','));

          var collumNumbersString = JSON.stringify(collumNumbers);
          var optionsString = JSON.stringify(options);

          console.log("Multiplicadores: " + collumNumbersString);
          console.log("Lideres: " + optionsString);
          google.script.run.calculoDeBSC(collumNumbersString, optionsString);
      }
    </script>
    
</body>
</html>
