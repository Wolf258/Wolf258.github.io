   //crear variable para que ambos no esten puestos a la vez
   almacen = document.getElementById("Almacen")
   domicilio = document.getElementById("Domicilio")
   
   almacen.addEventListener("click" ,function(){


    if (almacen.checked) {

           total+= parseInt(almacen.value)    
           console.log(almacen.checked)
           total_output.innerHTML = total;


          if (domicilio.checked) {
           domicilio.checked = false
           total -= parseInt(domicilio.value)
           total_output.innerHTML = total;
           console.log(total)
           
          } 

       } else {

       total -= parseInt(almacen.value)
       console.log(total)

   
       }

   })

   domicilio.addEventListener("click" , function(){


   if (domicilio.checked) {

       total+= parseInt(domicilio.value)  
       console.log(domicilio.checked)  
       total_output.innerHTML = total;

       if (almacen.checked) {
           
       almacen.checked = false
       total -= parseInt(almacen.value)
       
       }


    }else{                           

    total-= parseInt(domicilio.value)
    console.log(domicilio.checked)  
    total_output.innerHTML = total;




}
   })

   document.querySelector('.formulario').addEventListener('submit', function(event) {
    const almacen = document.getElementById('Almacen');
    const domicilio = document.getElementById('Domicilio');

    // Verifica si al menos uno está marcado
    if (!(almacen.checked || domicilio.checked)) {
        alert('Por favor, seleccione al menos una opción de recogida.');
        event.preventDefault(); // Evita el envío del formulario
    }
});
