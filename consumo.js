$(document).ready(function(){
  obtenerproductos();
})

  function mandar(){

      let nombre=document.querySelector('#producto_nombre').value;
      let precio=document.querySelector('#producto_precio').value;
      let boton=document.querySelector('#mandarpost').value;
      if(boton=='Modificar'){
         var url= 'urlapi.php?id=' + document.querySelector('#codigo').value
         var method='PUT';
      }
      else{
         var url= 'urlapi.php'
         var method='POST';
      }
       //var url= 'urlapi.php'
       let data=JSON.stringify({nombre:nombre, precio: precio})
       var http= new XMLHttpRequest();

       http.open(method,url,true);
       http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

       //var data = new FormData();
       //data.append('producto',producto);
      // data.append();
       http.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
            var resultado = this.response
            obtenerproductos();
            //var Fa = document.getElementById("div_table").innerHTML=resultado
            console.log(data);

        }
     }
     http.addEventListener('error', function(e) {
        console.log('Un error ocurrió', e);
      });
     http.send(data)
  }

  function obtenerproductos(){
    var url= 'urlapi.php'
    var http= new XMLHttpRequest()

    http.open('GET',url,true)
    //var data = new FormData();
    //data.append('consulta', consulta);
    http.onreadystatechange = function(){

       if(this.readyState == 4 && this.status == 200){
           var resultado = this.response
           llenartabla(resultado);
       }
    }
    http.addEventListener('error', function(e) {
       console.log('Un error ocurrió', e);
     });
    http.send()
  }

  function llenartabla(datos){
     document.querySelector(".classtable tbody").innerHTML='';
   resultado= JSON.parse(datos)
   //console.log(typeof datos);
    for (var i = 0; i < resultado.length; i++) {

       let table =  `<tr><td>${resultado[i].nombre}</td><td>${resultado[i].precio}
      </td><td><input class="buttonjs" type="button" value="Modificar" onclick="modificar(${i})">
      </td><td><input  class="buttoneliminar" type="button" value="Eliminar" onclick="eliminar(${i})"</td></tr>`
      document.querySelector(".classtable tbody").innerHTML+=table;


    }
  }
  function modificar(i){
    //console.log(i);
    var url= 'urlapi.php?id='+ i
    var http= new XMLHttpRequest()

    http.open('GET',url,true)
    //var data = new FormData();
    //data.append('consulta', consulta);
    http.onreadystatechange = function(){

       if(this.readyState == 4 && this.status == 200){
           var resultado = this.response
           resultado= JSON.parse(resultado)
             document.querySelector('#producto_nombre').value=resultado.nombre;
             document.querySelector('#producto_precio').value=resultado.precio;
             document.querySelector('#codigo').value=1;
             //console.log(document.querySelector('#codigo').value);
             document.querySelector('#mandarpost').value='Modificar';
       }
    }
    http.addEventListener('error', function(e) {
       console.log('Un error ocurrió', e);
     });
    http.send();
  }

  function eliminar(resultado){
    $.ajax({
        url: 'urlapi.php?id=' + resultado,
        type: 'DELETE',
        dataType: 'html',
        //data:{consulta: consulta},
        })
        .done(function(respuesta){
        //  $("#div_table").html(respuesta);
            console.log(respuesta);
            obtenerproductos();

        })
        .fail(function(){
          console.log(error);
        })
  }

  /*
  const button = document.querySelector('#dataSender');
button.addEventListener('click', function(event) {
  console.log('button clicked');
});
  */
