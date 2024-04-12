const form = document.getElementById('form-numero');
const numeroA = document.getElementById('campo-A');
const numeroB = document.getElementById('campo-B');

const containerInvalido = document.querySelector('.error-message');
const Invalido = `Formulário Inválido - digite outro número B.`;


let formEValido = false;



function validaNumero(numeroA, numeroB) {



    if (isNaN(numeroA) || isNaN(numeroB)) {
  
      return false;
  
    }
  
  
  
    const numA = parseFloat(numeroA);
  
    const numB = parseFloat(numeroB);
  
     
  
    return numB > numA;
  
  }


form.addEventListener("submit", function (e) {
   
    e.preventDefault();

    const MensagemValida = `Formulário Valido - número B: <b>${numeroB.value}</b> é maior que o número A: <b>${numeroA.value}</b>`;
    
   
    formEValido = validaNumero(numeroA.value, numeroB.value);
   
    console.log(formEValido);

    if (formEValido) {
        const containerValido = document.querySelector('.sucess-message');
        containerValido.innerHTML = MensagemValida;
        containerValido.style.display = 'block';

         } else {
            containerInvalido.innerHTML = Invalido;
                numeroB.style.border = '1px solid red';
                document.querySelector('.error-message').style.display = 'block';
                document.querySelector('.sucess-message').style.display = 'none';
                numeroB.classList.remove('error');
                
                
               
                
            }
});


numeroB.addEventListener('change', function (e) {
   console.log(e.target.value);
  

    formEValido = validaNumero(numeroA.value, e.target.value);
  
    if (!formEValido) {
        numeroB.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
        
        } else {
            numeroB.classList.remove('error');
            document.querySelector('.error-message').style.display = 'none';
            numeroB.style.border = '1px solid black';
        }    
});



