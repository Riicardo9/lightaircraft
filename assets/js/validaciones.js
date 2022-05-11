const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const $formulario = document.querySelector('form');
const $inputs = document.querySelectorAll('input');

const $usuarioError = document.querySelector('#errorUsuario')
const $emailError = document.querySelector('#errorEmail')
const $pswError = document.querySelector('#errorPsw')

const estatusInf = {
    nombre: false,
    email: false,
    password: false,
}

$inputs.forEach((campo)=>{
    campo.addEventListener('keyup', (e) => {
                
        switch(e.target.name) {

            case 'inputNombre':

                if (expresiones.nombre.test(e.target.value)) {
                    estatusInf.nombre = true;
                    $usuarioError.textContent = ''
                } else {
                    estatusInf.nombre = false;
                    $usuarioError.textContent = 'Error'
                    }
            break

            case 'inputEmail':

                if (expresiones.email.test(e.target.value)){
                    estatusInf.email = true;
                    $emailError.textContent = '';
                } else {
                    estatusInf.email = false;
                    $emailError.textContent = 'Error'
                    }
            break
            
            case 'inputPassword1':

                if (expresiones.password.test(e.target.value)) {
                    estatusInf.password = true;
                    $pswError.textContent = '';
                } else {
                    estatusInf.password = false;
                    $pswError.textContent = 'Error';
                    }
            break
        
            case 'inputPassword2':

                if (expresiones.password.test(e.target.value)) {
                    estatusInf.password = true;
                    $pswError.textContent = '';
                } else {
                    estatusInf.password = false;
                    $pswError.textContent = 'Error';
                    }
            break
        
        }
    })
})


$formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const check = document.querySelector('#terminos').checked
    const psw1 = document.querySelector('#inputPassword1').value
    const psw2 = document.querySelector('#inputPassword2').value

    if (psw1 === psw2) {
        
        console.log('las contraseñas son correctas')

        if (!Object.values(estatusInf).includes(false) && check == true){
    
            document.querySelector('.alert-danger').style.display = 'none';
            const datos = Object.fromEntries(
               new FormData(e.target)
                  )
            console.log(datos)
            
            alert ('Se agregaron los datos')
            $formulario.reset()
        
        } else {
            console.log('no enviado')
            document.querySelector('.alert-danger').style.display = 'block'
        }

    } else {
        document.querySelector('.alert-danger').textContent = 'Las contraseñas no coinciden'
        document.querySelector('.alert-danger').style.display = 'block';
    }
    
    
})

