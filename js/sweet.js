//datosDeUsuario = localStorage.getItem("usuarios");


function nuevoIngresoSweetAlert()
{   
    const btn = document.getElementById("btnSweet");
    btn.addEventListener("click", ()=>{

    Swal.fire({
        
        title:'Ingrese sus datos para registrarse',
        html:
        `<div id="registrarse" >
        
        <form action="#" method="post" class="formRegistro">
          <div class="contenedor-input">
            <label> Nombre <span class="req">*</span></label>
            <input id="inputNombre" class="imputFormRegistro" type="text" required >
          </div>
      
          <div class="contenedor-input">
            <label> Apellido <span class="req">*</span></label>
            <input id="inputApellido" class="imputFormRegistro" type="text" required>
          </div>
          
          <div class="contenedor-input">
            <label> Email <span class="req">*</span></label>
            <input id="inputEmail" class="imputFormRegistro" type="email" required> 
          </div>
          <div class="contenedor-input">
            <label> Contraseña <span class="req">*</span></label>
            <input id="inputPass" class="imputFormRegistro" type="password" required>
          </div>
          <div class="contenedor-input">
            <label> Repetir Contraseña <span class="req">*</span></label>
            <input id="inputPassConfirm"  class="imputFormRegistro" type="password" required>
          </div>
          <input  type="submit" class="button button-block botonEnviarRegistro" value="Registrarse">
        </form>
      </div>`, 
      focusConfirm: false,
      preConfirm: () => {
        console.log(document.getElementById("inputNombre".value))
        return [
          nombre = document.getElementById('inputNombre').value,
          apellido = document.getElementById('inputApellido').value,
          email= document.getElementById(`inputEmail`).value,
          pass= document.getElementById(`inputPass`).value,
          confirmPass= document.getElementById(`inputPassConfirm`).value,
        ]
      },   
    })  
    })   
}



/*
const { value: formValues } = await Swal.fire({
    title: 'Multiple inputs',
    html:
      '<input id="swal-input1" class="swal2-input">' +
      '<input id="swal-input2" class="swal2-input">',
    focusConfirm: false,
    preConfirm: () => {
      return [
        document.getElementById('swal-input1').value,
        document.getElementById('swal-input2').value
      ]
    }
  }) 
  if (formValues) {
    Swal.fire(JSON.stringify(formValues))
  }

  title2: 'Input email address',
        input: ['email', 'Password'],
        inputLabel: 'Your email address',
        inputPlaceholder: 'Enter your email address',
        title3: 'Enter your password',
        input: 'password',
        inputLabel: 'Password',
        inputPlaceholder: 'Enter your password',
        inputAttributes: {
            maxlength: 10,
            autocapitalize: 'off',
            autocorrect: 'off'},*/

            