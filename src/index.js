import cipher from './cipher.js';


  //Selección de solo un checkbox dentro de un grupo pregunta1

    window.onload = function check1() {

      
        var tblPreguntas = document.getElementById("pregunta1");
        var chks = tblPreguntas.getElementsByTagName("INPUT");


        for (var i = 0; i < chks.length; i++) {
            chks[i].onclick = function () {
                for (var i = 0; i < chks.length; i++) {
                    if (chks[i] != this && this.checked) {
                        chks[i].checked = false;
                    }
                }
            };
        }
      //incorporacion-llamado de funciones en la primera funcion con el evento window.onload
      check2();
      check3();
      check4();
      check5(); 
      check6();    
      inicio();
  
      }
  

  //funcion de checkbox para segunda pregunta

  function check2() {
    var tblPreguntas2 = document.getElementById("pregunta2");
    var chks2 = tblPreguntas2.getElementsByTagName("INPUT");


    for (var i = 0; i < chks2.length; i++) {
        chks2[i].onclick = function () {
            for (var i = 0; i < chks2.length; i++) {
                if (chks2[i] != this && this.checked) {
                    chks2[i].checked = false;
                }
            }
        };
    } 
  }

 //funcion de checkbox para tercera pregunta

  function check3() {
    var tblPreguntas3 = document.getElementById("pregunta3");
    var chks3 = tblPreguntas3.getElementsByTagName("INPUT");


    for (var i = 0; i < chks3.length; i++) {
        chks3[i].onclick = function () {
            for (var i = 0; i < chks3.length; i++) {
                if (chks3[i] != this && this.checked) {
                    chks3[i].checked = false;
                }
            }
        };
    }
  }

 //funcion de checkbox para cuarta pregunta

  function check4() {
    var tblPreguntas4 = document.getElementById("pregunta4");
    var chks4 = tblPreguntas4.getElementsByTagName("INPUT");


    for (var i = 0; i < chks4.length; i++) {
        chks4[i].onclick = function () {
            for (var i = 0; i < chks4.length; i++) {
                if (chks4[i] != this && this.checked) {
                    chks4[i].checked = false;
                }
            }
        };
    }
  }

 //funcion de checkbox para quinta pregunta

  function check5() {
    var tblPreguntas5 = document.getElementById("pregunta5");
    var chks5 = tblPreguntas5.getElementsByTagName("INPUT");


    for (var i = 0; i < chks5.length; i++) {
        chks5[i].onclick = function () {
            for (var i = 0; i < chks5.length; i++) {
                if (chks5[i] != this && this.checked) {
                    chks5[i].checked = false;
                }
            }
        };
    }
  }

 //funcion de checkbox para sexta pregunta

 function check6() {
  var tblPreguntas6 = document.getElementById("pregunta6");
  var chks6 = tblPreguntas6.getElementsByTagName("INPUT");


  for (var i = 0; i < chks6.length; i++) {
      chks6[i].onclick = function () {
          for (var i = 0; i < chks6.length; i++) {
              if (chks6[i] != this && this.checked) {
                  chks6[i].checked = false;
              }
          }
      };
  }
}



//tomar value de cada checkbox y reflejarlo en casilla de respuesta pregunta 1

    function uncheck(){
      //inicio de la funcion de reconocimiento de check buttons
      //declaracin de variabes
      var checkedValue = null; 
      var inputElements = document.getElementsByClassName('opcion');
      //ciclo de verificaion de datos seleccionados desde 0 hasta cuantos lea
      for(var i=0; inputElements[i]; ++i){
        if(inputElements[i].checked){
          checkedValue = inputElements[i].value;
          break;
        }
      }
      document.getElementById("cajaNumero1").value=checkedValue;
    }

      document.getElementById('opcion1').addEventListener('click', uncheck)
      document.getElementById('opcion2').addEventListener('click', uncheck)
      document.getElementById('opcion3').addEventListener('click', uncheck)
      document.getElementById('opcion4').addEventListener('click', uncheck)
      

//tomar value de cada checkbox y reflejarlo en casilla de respuesta pregunta 2
    function uncheck2(){

      var checkedValue2 = null; 
      var inputElements2 = document.getElementsByClassName('opcion2');
      //ciclo de verificaion de datos seleccionados desde 0 hasta cuantos lea
      for(var i=0; inputElements2[i]; ++i){
        if(inputElements2[i].checked){
          checkedValue2 = inputElements2[i].value;
          break;
        }
      }
      document.getElementById("cajaNumero2").value=checkedValue2;
    }

    document.getElementById('opcion5').addEventListener('click', uncheck2)
    document.getElementById('opcion6').addEventListener('click', uncheck2)
    document.getElementById('opcion7').addEventListener('click', uncheck2)
    document.getElementById('opcion8').addEventListener('click', uncheck2)

//tomar value de cada checkbox y reflejarlo en casilla de respuesta pregunta 3
    function uncheck3(){

      var checkedValue3 = null; 
      var inputElements3 = document.getElementsByClassName('opcion3');
      //ciclo de verificacion de datos seleccionados desde 0 hasta cuantos lea
      for(var i=0; inputElements3[i]; ++i){
        if(inputElements3[i].checked){
          checkedValue3 = inputElements3[i].value;
          break;
        }
      }
      document.getElementById("cajaNumero3").value=checkedValue3;
    }

    document.getElementById('opcion9').addEventListener('click', uncheck3)
    document.getElementById('opcion10').addEventListener('click', uncheck3)
    document.getElementById('opcion11').addEventListener('click', uncheck3)
    document.getElementById('opcion12').addEventListener('click', uncheck3)


    //tomar value de cada checkbox y reflejarlo en casilla de respuesta pregunta 4
    function uncheck4(){

      var checkedValue4 = null; 
      var inputElements4 = document.getElementsByClassName('opcion4');
      //ciclo de verificacion de datos seleccionados desde 0 hasta cuantos lea
      for(var i=0; inputElements4[i]; ++i){
        if(inputElements4[i].checked){
          checkedValue4 = inputElements4[i].value;
          break;
        }
      }
      document.getElementById("cajaNumero4").value=checkedValue4;
    }

    document.getElementById('opcion13').addEventListener('click', uncheck4)
    document.getElementById('opcion14').addEventListener('click', uncheck4)
    document.getElementById('opcion15').addEventListener('click', uncheck4)
    document.getElementById('opcion16').addEventListener('click', uncheck4)


    //tomar value de cada checkbox y reflejarlo en casilla de respuesta pregunta 5
    function uncheck5(){

      var checkedValue5 = null; 
      var inputElements5 = document.getElementsByClassName('opcion5');
      //ciclo de verificacion de datos seleccionados desde 0 hasta cuantos lea
      for(var i=0; inputElements5[i]; ++i){
        if(inputElements5[i].checked){
          checkedValue5 = inputElements5[i].value;
          break;
        }
      }
      document.getElementById("cajaNumero5").value=checkedValue5;
    }

    document.getElementById('opcion17').addEventListener('click', uncheck5)
    document.getElementById('opcion18').addEventListener('click', uncheck5)
    document.getElementById('opcion19').addEventListener('click', uncheck5)
    document.getElementById('opcion20').addEventListener('click', uncheck5)


     //tomar value de cada checkbox y reflejarlo en casilla de respuesta pregunta 6
     function uncheck6(){

      var checkedValue6 = null; 
      var inputElements6 = document.getElementsByClassName('opcion6');
      //ciclo de verificacion de datos seleccionados desde 0 hasta cuantos lea
      for(var i=0; inputElements6[i]; ++i){
        if(inputElements6[i].checked){
          checkedValue6 = inputElements6[i].value;
          break;
        }
      }
      document.getElementById("cajaNumero6").value=checkedValue6;
    }

    document.getElementById('opcion21').addEventListener('click', uncheck6)
    document.getElementById('opcion22').addEventListener('click', uncheck6)
    document.getElementById('opcion23').addEventListener('click', uncheck6)
    document.getElementById('opcion24').addEventListener('click', uncheck6)
  


//funcion de suma de inputs

window.sumInputs = function() {
  var inputs = document.getElementsByName('cajaNumero'),
      result = document.getElementById('spTotal'),
      sum = 0;        
      
  for(var i=0; i<inputs.length; i++) {
      var ip = inputs[i];

      if (ip.name && ip.name.indexOf("spTotal") < 0) {
          sum += parseInt(ip.value) || 0;
      }
  }
  result.value = sum;
  
}



function inicio () {

  //convertir en mayusculas
    document.getElementById("mensaje2"). addEventListener("keyup", function (){
        this.value = this.value.toUpperCase ();
    },true);

    //unir enconde al boton descifrar
   document.getElementById("cifrar").addEventListener("click", function(){ 

        //console.log('cif',document.getElementById('spTotal').value ); 

        let value = document.getElementById('spTotal').value 

        if (value !== null && value !== '' && value !== undefined) {
          let texto = document.getElementById("mensaje").value;
          let desplazamiento = document.getElementById("spTotal").value;
          document.getElementById("mensaje2").value = cipher.encode(desplazamiento,texto);
          
          console.log('primer if');
        }

    },true)
  
//unir decode al boton  descifrar
    document.getElementById("descifrar").addEventListener("click", function(){
    
     // console.log('decif',document.getElementById('spTotal').value ); 

     let value2 = document.getElementById('spTotal').value 

     if (value2 !== null && value2 !== '' && value2 !== undefined) {
        let texto = document.getElementById("mensaje").value;
        let desplazamiento = document.getElementById("spTotal").value;
        document.getElementById("mensaje2").value = cipher.decode(desplazamiento,texto); 

        console.log('segundo if');
      }
    
      },true)
} 

