funcion()

function funcion(){

  var g=document.querySelector(".wrapper");
  //g.addEventListener('mouseover', e => colorear(e.target));
  g.addEventListener('mouseover', function(e){
    var clase=e.target.classList.value;
    const p=new color(clase);
    p.colorear();
      //console.log(clase);
      /*if(e.target.classList.contains('one')){
        console.log("one");
        e.target.style.background="green";
        e.target.addEventListener('mouseout', function(){
          e.target.style.background="white";

        })
      }

      else{
        e.target.style.background="blue";
        console.log("noone");
      }*/
  })

}



class color{

  constructor(clase){
      this.clase=clase;
      this.array={
        'one':'red',
        'two':'blue',
        'three':'yellow',
        'four':'green',
        'five':'gray',
        'six':'orange',
      }

  }

  colorear(){

   let objeto=document.querySelector("."+ this.clase);
   for (var variable in this.array) {
     /*if (this.array.hasOwnProperty(variable)) {
       console.log(variable + '=>'+ this.array[variable] );
     }*/
     if(this.clase== variable){
       objeto.style.background=this.array[variable];
        objeto.style.color='white';
        objeto.style.fontSize='50px';
        objeto.style.borderRadius='10px';
     }
   }
   objeto.addEventListener('mouseout',function(){
      objeto.style.background="white";
      objeto.style.color='black';
      objeto.style.fontSize='18px';
      objeto.style.borderRadius='0px';

    })

  }
}
