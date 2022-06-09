
function saludarConSweetAlert()
{   
    const btn = document.getElementById("btnSweet");
    btn.addEventListener("click", ()=>{
        
    Swal.fire({
        
        title:'Inicio Sesion',
        text:'Bienvenido',
        icon: 'success',
        confirmButtonText: 'ESTÁ BIEN',
        title2: 'Input email address',
        input: ['email', 'Password'],
        inputLabel: 'Your email address',
        inputPlaceholder: 'Enter your email address',
        title3: 'Enter your password',
        input2: 'password',
        inputLabel2: 'Password',
        inputPlaceholder2: 'Enter your password',
        inputAttributes: {
            maxlength: 10,
            autocapitalize: 'off',
            autocorrect: 'off'},
    })  
    })   
}
saludarConSweetAlert()
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
  }*/