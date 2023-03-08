

window.onload = function() {   

    
    const nomeTxt = document.getElementById('nomeTxt');
    const emailTxt = document.getElementById('emailTxt');
    const whatsappTxt = document.getElementById('whatsappTxt');
    const assuntoTxt = document.getElementById('assuntoTxt');
    const descTxt = document.getElementById('descTxt');
    const botao = document.getElementById('btn');  
	const contatoForm = document.getElementById('contato');
       

    botao.onclick = function(e) { 
		e.preventDefault();
        
		let isValid = contatoForm.reportValidity();
		
		if(isValid) {
			const conteudoNome = nomeTxt.value;
			const conteudoEmail = emailTxt.value;
			const conteudoWhatsapp = whatsappTxt.value;
			const conteudoAssunto = assuntoTxt.value;
			const conteudoDesc = descTxt.value;        
              
			alert(`Nome: ${conteudoNome} email: ${conteudoEmail} whatsapp: ${conteudoWhatsapp} 
			assunto: ${conteudoAssunto} descrição: ${conteudoDesc}`);   
			function myFunction(e){
				if (document.meuform.obrigatorio.value==""){
					document.getElementById('btn').style.display="inline";
				}
				else {
					document.getElementById('btn').style.display="none";
					alert('Todos Os Campos Foram Preenchidos')
                }
			} 
		}         
      }
 
        
    nomeTxt.onblur = validaNome;
    emailTxt.onblur = validaEmail;
    whatsappTxt.onblur = validaWhatsapp;
    
    
    function validaNome(e) {
        
        const conteudoNome = nomeTxt.value.trim();
        const nomeCompleto = conteudoNome.split(' ');
        const ajudaNome = document.getElementById('ajudaNome');
        console.log(ajudaNome)
       
        if(conteudoNome.length < 5) {
            ajudaNome.innerHTML = "Nome muito curto...";
            ajudaNome.style.color = "#F00";
            nomeTxt.style.borderColor = '#f00';
            nomeTxt.style.borderWidth = '3px';
            nomeTxt.style.borderStyle = 'solid';
        
        } else if(nomeCompleto.length < 2) {
            ajudaNome.innerHTML = "Digite o sobrenome";
            ajudaNome.style.color = "#f00";
            nomeTxt.style.borderColor = '#f00';
            nomeTxt.style.borderWidth = '3px';
            nomeTxt.style.borderStyle = 'solid';
            
        }
        else {
            ajudaNome.innerHTML = "Nome correto";
            ajudaNome.style.color = "#0F0";
            nomeTxt.style.borderColor = '#0f0';
            nomeTxt.style.borderWidth = '3px';
            nomeTxt.style.borderStyle = 'solid';
        }
        
    
    }

    function validaEmail(e) {
        const conteudoEmail = emailTxt.value.trim();

        if (conteudoEmail.length === 0) {
            alert('Email não pode estar vazio');
        }
        else if(conteudoEmail.indexOf('@') < 0) {
            alert('Email inválido! Não possui arroba.');
        }
        else if (conteudoEmail.indexOf('.') < 0) {
            alert('Email inválido! Não possui ponto.');
        }
        else if (conteudoEmail.length > 60) {
            alert('Email inválido! Muito grande.');
        }
    }
    
    function validaWhatsapp(e) {
        const reg = /[A-z]/;
        const ajudaWhatsapp = document.getElementById('ajudaWhatsapp');
        const valido = reg.test(whatsappTxt.value);
        if (valido === true) {
            ajudaWhatsapp.innerHTML = "Whatsapp OK";
        } else {
            ajudaWhatsapp.innerHTML = "Whatsapp errado";
        }
    }
     
    
     
    

    

    
    


    
}





