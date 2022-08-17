function modal_ligar() {
  // Pegar os Elementos
  nome_form = document.getElementById('nome').value
  email_form = document.getElementById('email').value
  assunto_form = document.getElementById('assunto').value
  texto_form = document.getElementById('texto').value

  if ((nome_form)&&(email_form)&&(texto_form)) {
    const modal_form = document.getElementById('modal')
    modal_form.classList.remove("modal-off");
    modal_form.classList.add("modal-on")

    
  }else{
    alert("Preencha os Campos Corretamente")
  }

}

function remove() {
    const modal_form = document.getElementById('modal')
    modal_form.classList.remove("modal-on");
    modal_form.classList.add("modal-off")

}