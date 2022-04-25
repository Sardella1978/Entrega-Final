 debugger
const focoEnCampos = ()=> {     
    const campos = document.querySelectorAll("input")    
    for (let campo of campos) {         
        if (campo.type != "submit") {             
            campo.addEventListener("focus", ()=> campo.className = "fondo-inputs")            
            campo.addEventListener("blur", ()=> campo.className = "")        
         }     
    } 
} 
 
btnSubmit.addEventListener ('click', () => {

    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Formulario enviado con éxito. En breve nos pondremos en contacto',
        showConfirmButton: false,
        timer: 3000
})
})




inputNombre.addEventListener("keyup", (event)=> {     
    datosDeInput = event.target.value     
    console.log(datosDeInput) 
}) 
 
inputNombre.addEventListener("keypress", (event)=> {     
    if (event.keyCode == 13) { 
        inputTelefono.focus()     
    } 
}) 
 
focoEnCampos() 
 