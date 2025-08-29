
//class contato

class contato {
    constructor(nome,email, telefone, tipo, mensagem,aceitouNewsletter, aceitouTermos){

        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.tipo = tipo;
        this.mensagem = mensagem;
        this.aceitouNewsletter = aceitouNewsletter;
        this.aceitouTermos = aceitouTermos;

    }

}

function validarEnvio(){
    const TermosCheckbox = document.getElementById("termosCheckbox");
    const enviarBtn = document.getElementById("enviarBtn");

    enviarBtn.disabled = !TermosCheckbox.checked;
}

function Post(form) {

    const TermosCheckbox = document.getElementById("termosCheckbox");
    const newsletterCheckbox = document.getElementById("newsletter");

    if(!TermosCheckbox.checked){
        alert("Por favor aceite os termos e condições para enviar o formulário");
        return false;
    }

  let data = new contato (
      form.elements.namedItem("nome").value,
      form.elements.namedItem("email").value, 
      form.elements.namedItem("telefone").value, 
      form.elements.namedItem("tipo").value,
      form.elements.namedItem("mensagem").value);
      TermosCheckbox.checked,
      newsletterCheckbox.checked
    

      console.log("dados do formulário:", data);

      alert(`Obrigado, ${data.nome}! Sua mensagem de ${data.tipo} foi enviada com sucesso.`);

      TermosCheckboxermosCheckbox.checked = false;
      newsletterCheckbox = false;

      validarEnvio();

      form.reset();
}


document.addEventListener("DOMContentLoaded", function(){
    validarEnvio();
})