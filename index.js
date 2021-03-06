
document.addEventListener('DOMContentLoaded',function(){
  iniciarApp();

})


   //Eliminar
   const eliminar = document.querySelectorAll('#delet')
   const eliminandoa = document.querySelector('.eli') 

   eliminar.forEach(el2 => {
    el2.addEventListener('click',function(){
     this.parentElement.parentElement.parentElement.remove();
    })
  });



   //editar
   const editar = document.querySelectorAll('#edit1')
   const preguntando = document.querySelector('.peunta')

   const editar2 = document.querySelectorAll('#edit2')
   const preguntando2 = document.querySelector('.peunta2')
 
   const editar3 = document.querySelectorAll('#edit3')
   const preguntando3 = document.querySelector('.peunta3')
   

   const editar4 = document.querySelectorAll('#edit4')
   const preguntando4 = document.querySelector('.peunta4')


   const editar5 = document.querySelectorAll('#edit5')
   const preguntando5 = document.querySelector('.peunta5')

   const editar6 = document.querySelectorAll('#edit6')
   const preguntando6 = document.querySelector('.peunta6')

   const editar7 = document.querySelectorAll('#edit7')
   const preguntando7 = document.querySelector('.peunta7')

   const editar8 = document.querySelectorAll('#edit8')
   const preguntando8 = document.querySelector('.peunta8')

   editar.forEach(ed => {
    ed.addEventListener('click',editarEl)
  });
  editar2.forEach(ed2 => {
    ed2.addEventListener('click',editarEl2)
  });
  editar3.forEach(ed3 => {
    ed3.addEventListener('click',editarEl3)
  });
  editar4.forEach(ed4 => {
    ed4.addEventListener('click',editarEl4)
  });
  editar5.forEach(ed5 => {
    ed5.addEventListener('click',editarEl5)
  });
  editar6.forEach(ed6 => {
    ed6.addEventListener('click',editarEl6)
  });
  editar7.forEach(ed7 => {
    ed7.addEventListener('click',editarEl7)
  });
  editar8.forEach(ed8 => {
    ed8.addEventListener('click',editarEl8)
  });
 


  function editarEl8(){
    preguntando8.classList.toggle('active8')
    
    const editarnombre8 =document.querySelector('#edit_no8')
    const editartelefono8 = document.querySelector('#edit_tel8') 
    const editandocorreo8 = document.querySelector('#edit-corre8')
    const editandopais8= document.querySelector('#edit_pais8')
    nombre_8.textContent = editarnombre8.value
    telefono_8.textContent = editartelefono8.value
    correo_8.textContent = editandocorreo8.value
    pais_8.textContent = editandopais8.value
   }


  function editarEl7(){
    preguntando7.classList.toggle('active7')
    
    const editarnombre7 =document.querySelector('#edit_no7')
    const editartelefono7 = document.querySelector('#edit_tel7') 
    const editandocorreo7 = document.querySelector('#edit-corre7')
    const editandopais7= document.querySelector('#edit_pais7')
    nombre_7.textContent = editarnombre7.value
    telefono_7.textContent = editartelefono7.value
    correo_7.textContent = editandocorreo7.value
    pais_7.textContent = editandopais7.value
   }


  function editarEl6(){
    preguntando6.classList.toggle('active6')
    
    const editarnombre6 =document.querySelector('#edit_no6')
    const editartelefono6 = document.querySelector('#edit_tel6') 
    const editandocorreo6 = document.querySelector('#edit-corre6')
    const editandopais6= document.querySelector('#edit_pais6')
    nombre_6.textContent = editarnombre6.value
    telefono_6.textContent = editartelefono6.value
    correo_6.textContent = editandocorreo6.value
    pais_6.textContent = editandopais6.value
   }


  function editarEl5(){
    preguntando5.classList.toggle('active5')
    
    const editarnombre5 =document.querySelector('#edit_no5')
    const editartelefono5 = document.querySelector('#edit_tel5') 
    const editandocorreo5 = document.querySelector('#edit-corre5')
    const editandopais5= document.querySelector('#edit_pais5')
    nombre_5.textContent = editarnombre5.value
    telefono_5.textContent = editartelefono5.value
    correo_5.textContent = editandocorreo5.value
    pais_5.textContent = editandopais5.value
   }
 

  function editarEl4(){
    preguntando4.classList.toggle('active4')
    
    const editarnombre4 =document.querySelector('#edit_no4')
    const editartelefono4 = document.querySelector('#edit_tel4') 
    const editandocorreo4 = document.querySelector('#edit-corre4')
    const editandopais4= document.querySelector('#edit_pais4')
    nombre_4.textContent = editarnombre4.value
    telefono_4.textContent = editartelefono4.value
    correo_4.textContent = editandocorreo4.value
    pais_4.textContent = editandopais4.value
   }
 


  function editarEl3(){
    preguntando3.classList.toggle('active3')
    
    const editarnombre3 =document.querySelector('#edit_no3')
    const editartelefono3 = document.querySelector('#edit_tel3') 
    const editandocorreo3 = document.querySelector('#edit-corre3')
    const editandopais3 = document.querySelector('#edit_pais3')
    nombre_3.textContent = editarnombre3.value
    telefono_3.textContent = editartelefono3.value
    correo_3.textContent = editandocorreo3.value
    pais_3.textContent = editandopais3.value
   }
 
  function editarEl2(){
   preguntando2.classList.toggle('active2')
   
   const editarnombre2 =document.querySelector('#edit_no2')
   const editartelefono2 = document.querySelector('#edit_tel2') 
   const editandocorreo2 = document.querySelector('#edit-corre2')
   const editandopais2 = document.querySelector('#edit_pais2')
   nombre_2.textContent = editarnombre2.value
   telefono_2.textContent = editartelefono2.value
   correo_2.textContent = editandocorreo2.value
   pais_2.textContent = editandopais2.value
  }
 
 function editarEl(){
   preguntando.classList.toggle('active')
   const editarnombre =document.querySelector('#edit_no')
   const editartelefono = document.querySelector('#edit_tel') 
   const editandocorreo = document.querySelector('#edit-corre')
   const editandopais = document.querySelector('#edit_pais')
   nombre_1.textContent = editarnombre.value
   telefono_1.textContent = editartelefono.value
   correo_1.textContent = editandocorreo.value
   pais_1.textContent = editandopais.value
   
 }
 
   




  //mascota1
  const nombre_1 = document.querySelector('#name1')
  const telefono_1 = document.querySelector('#tel1')
  const pais_1 = document.querySelector('#pais1')
  const correo_1= document.querySelector('#correo1')

  //mascota2
  const nombre_2 = document.querySelector('#name2')
  const telefono_2 = document.querySelector('#tel2')
  const pais_2 = document.querySelector('#pais2')
  const correo_2= document.querySelector('#correo2')

  //mascota 3
  const nombre_3 = document.querySelector('#name3')
  const telefono_3 = document.querySelector('#tel3')
  const pais_3 = document.querySelector('#pais3')
  const correo_3= document.querySelector('#correo3')

  //mascota 4
  const nombre_4 = document.querySelector('#name4')
  const telefono_4 = document.querySelector('#tel4')
  const pais_4 = document.querySelector('#pais4')
  const correo_4= document.querySelector('#correo4')

  //mascota 5
  const nombre_5 = document.querySelector('#name5')
  const telefono_5 = document.querySelector('#tel5')
  const pais_5 = document.querySelector('#pais5')
  const correo_5= document.querySelector('#correo5')

   //mascota 6
   const nombre_6 = document.querySelector('#name6')
   const telefono_6 = document.querySelector('#tel6')
   const pais_6 = document.querySelector('#pais6')
   const correo_6= document.querySelector('#correo6')

   //mascota 7
   const nombre_7 = document.querySelector('#name7')
   const telefono_7 = document.querySelector('#tel7')
   const pais_7 = document.querySelector('#pais7')
   const correo_7= document.querySelector('#correo7')
   //mascota 8
   const nombre_8 = document.querySelector('#name8')
   const telefono_8 = document.querySelector('#tel8')
   const pais_8 = document.querySelector('#pais8')
   const correo_8= document.querySelector('#correo8')
 
 




   

 



async function iniciarApp (){
     try {
       const resultado = await fetch('mascota.json')
       const db = await resultado.json();
      
      db.forEach(elemto=>{

        ////mascota 1
       //nombre
       const {name1,telefono1,pais1,email1,
        name2,telefono2,pais2,email2,
        name3,telefono3,pais3,email3,
        name4,telefono4,pais4,email4,
        name5,telefono5,pais5,email5,
        name6,telefono6,pais6,email6,
        name7,telefono7,pais7,email7,
        name8,telefono8,pais8,email8}= elemto

       const names1 = document.createElement('p')
       names1.textContent = name1;
       nombre_1.appendChild(names1)
           
       //mascota 1
       //telefono
       const telefonos1 = document.createElement('p')
       telefonos1.textContent = telefono1
       telefono_1.appendChild(telefonos1)

       //pais 
       const paises1 = document.createElement('p')
       paises1.textContent = pais1
       pais_1.appendChild(paises1)

       //correo
       const correos1 = document.createElement('p')
       correos1.textContent = email1;
       correo_1.appendChild(correos1)

       //mascota 2
       // nombre2
       const names2 = document.createElement('p')
       names2.textContent = name2;
       nombre_2.appendChild(names2)

       //telefono2
       const telefonos2 = document.createElement('p')
       telefonos2.textContent = telefono2
       telefono_2.appendChild(telefonos2)

       //pais 2
       const paises2 = document.createElement('p')
       paises2.textContent = pais2
       pais_2.appendChild(paises2)
       //correo2
       const correos2 = document.createElement('p')
       correos2.textContent = email2;
       correo_2.appendChild(correos2)

       //mascota 3
       // nombre3
       const names3 = document.createElement('p')
       names3.textContent = name3;
       nombre_3.appendChild(names3)

       //telefono3
       const telefonos3 = document.createElement('p')
       telefonos3.textContent = telefono3
       telefono_3.appendChild(telefonos3)

       //pais 2
       const paises3 = document.createElement('p')
       paises3.textContent = pais3
       pais_3.appendChild(paises3)
       //correo2
       const correos3 = document.createElement('p')
       correos3.textContent = email3;
       correo_3.appendChild(correos3)

       //mascota 4
       // nombre4
       const names4 = document.createElement('p')
       names4.textContent = name4;
       nombre_4.appendChild(names4)

       //telefono3
       const telefonos4 = document.createElement('p')
       telefonos4.textContent = telefono4
       telefono_4.appendChild(telefonos4)

       //pais 2
       const paises4 = document.createElement('p')
       paises4.textContent = pais4
       pais_4.appendChild(paises4)
       //correo2
       const correos4 = document.createElement('p')
       correos4.textContent = email4;
       correo_4.appendChild(correos4)

       //mascota 5
       // nombre5
       const names5 = document.createElement('p')
       names5.textContent = name5;
       nombre_5.appendChild(names5)

       //telefono5
       const telefonos5 = document.createElement('p')
       telefonos5.textContent = telefono5
       telefono_5.appendChild(telefonos5)

       //pais 5
       const paises5 = document.createElement('p')
       paises5.textContent = pais5
       pais_5.appendChild(paises5)
       //correo5
       const correos5 = document.createElement('p')
       correos5.textContent = email5;
       correo_5.appendChild(correos5)

       //mascota 6
       // nombre6
       const names6 = document.createElement('p')
       names6.textContent = name6;
       nombre_6.appendChild(names6)

       //telefono6
       const telefonos6 = document.createElement('p')
       telefonos6.textContent = telefono6
       telefono_6.appendChild(telefonos6)

       //pais 6
       const paises6 = document.createElement('p')
       paises6.textContent = pais6
       pais_6.appendChild(paises6)
       //correo6
       const correos6 = document.createElement('p')
       correos6.textContent = email6;
       correo_6.appendChild(correos6)


       //mascota 7
       // nombre7
       const names7 = document.createElement('p')
       names7.textContent = name7;
       nombre_7.appendChild(names7)

       //telefono7
       const telefonos7 = document.createElement('p')
       telefonos7.textContent = telefono7
       telefono_7.appendChild(telefonos7)

       //pais 7
       const paises7 = document.createElement('p')
       paises7.textContent = pais7
       pais_7.appendChild(paises7)
       //correo7
       const correos7 = document.createElement('p')
       correos7.textContent = email7;
       correo_7.appendChild(correos7)



       //mascota 8
       // nombre8
       const names8 = document.createElement('p')
       names8.textContent = name8;
       nombre_8.appendChild(names8)

       //telefono8
       const telefonos8 = document.createElement('p')
       telefonos8.textContent = telefono8
       telefono_8.appendChild(telefonos8)

       //pais 8
       const paises8 = document.createElement('p')
       paises8.textContent = pais8
       pais_8.appendChild(paises8)
       //correo8
       const correos8 = document.createElement('p')
       correos8.textContent = email8;
       correo_8.appendChild(correos8)

      })
     } catch (error) {
       console.log('error')
     }
}




















