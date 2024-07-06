const form = document.getElementById('calculo');
const numeroA = document.getElementById('numero-a');
const numeroB = document.getElementById('numero-b');
const mensagemDeSucesso = document.querySelector('.sucess-message');
const mensagemDeErro = document.querySelector('.error-message');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const valorNumeroA = Number(numeroA.value); 
    const valorNumeroB = Number(numeroB.value);  
    
    const mensagemDeSucessoTexto = ` ${valorNumeroB} é  maior do que ${valorNumeroA}`;
    const mensagemDeErroTexto = ` ${valorNumeroB} não é  maior do que ${valorNumeroA}`; 

    if (valorNumeroA >= valorNumeroB) {
        mensagemDeErro.innerHTML = mensagemDeErroTexto;
        mensagemDeErro.style.display = 'block';
        mensagemDeSucesso.style.display = 'none';

    } else {
        mensagemDeSucesso.innerHTML = mensagemDeSucessoTexto;
        mensagemDeSucesso.style.display = 'block';
        mensagemDeErro.style.display = 'none';

    }        

});

    valorNumeroA.addEventListener('focus', function() {
        valorNumeroA.value = '';
        mensagemDeSucesso.style.display = 'none';
        mensagemDeErro.style.display = 'none';
    });

    valorNumeroB.addEventListener('focus', function(){
        valorNumeroB.value = '';
        mensagemDeSucesso.style.display = 'none';
        mensagemDeErro.style.display = 'none';
    });



