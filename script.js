let amigos = [];


//participantes

// quando colocamos um . pegamos uma classe. Quando usamos a # pega ID isso no queryselector
const txtAmigo = document.querySelector('.participantes'); //caixa de texto
const btnAdicionar = document.querySelector('#btn-adicionar');
const btnReiniciar = document.querySelector('#btn-reiniciar');
const btnSortear = document.querySelector('#btn-sortear');
const adicionados = document.querySelector('.sorteio');
const erroArea = document.querySelector('.erro_area');
const listaSorteio = document.querySelector('.lista-sorteio');



//----------------------------Adicionar--------------------------------------

btnAdicionar.addEventListener('click', () => {

  if (txtAmigo.value === '') {
    setErrorFor(txtAmigo, "Erro!! Insira um nome válido.");
  } else


  if (adicionados.innerHTML == "") {
    adicionados.innerHTML = txtAmigo.value;
  } else {
    adicionados.innerHTML = adicionados.innerHTML + ", " + txtAmigo.value;
    amigos.push(txtAmigo.value);
    console.log
    erroArea.textContent = '';
  }
  //Comando para deletar o input onde foi colocado o nome, apos ele jogar o nome para o sorteio
  txtAmigo.value = '';



})


function setErrorFor(input, message) {
  //retorna a div que é o pai do input
  const participantes = input.parentElement;
  //querySelector = retorna apenas o primeiro elemento especificado dentro do elemento pai
  const span = participantes.querySelector("span");

  //Adiciona a mensagem de erro
  span.innerText = message;

  //Adiciona a classe de erro
  participantes.className = "participantes error";

}


//---------------------Sorteio------------------------------------------------
//txtAmigo.value;


btnSortear.addEventListener('click', () => {

  

function embaralhar(array) {
  for (let i = array.length; i; i--) {
           const indiceAleatorio = Math.floor(Math.random() * (i)); 
           [array[i-1], array[indiceAleatorio]] = [array[indiceAleatorio], array[i-1]];
  }
}

function sortear() {
  if (amigos.length < 4) {
      mostrarMsgErro('Adicione ao menos 4 amigos!');
      return;
  }

  embaralhar(amigos);

  let sorteio = document.querySelector('.sorteio');
  for (let i = 0; i < amigos.length; i++) {
      if (i == amigos.length - 1) {
          sorteio.innerHTML = sorteio.innerHTML + '<li>' + amigos[i] + ' --> ' + amigos[0] + '</li>';
      } else {
          sorteio.innerHTML = sorteio.innerHTML + '<li>' + amigos[i] + ' --> ' + amigos[i + 1] + '</li>';
      }
  }
}
})


  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  for (const participante in amigoSecreto) {
           const amigo = amigoSecreto[participante];
    const li = document.createElement("li");
    p.textContent = `${participante} tirou ${amigo} como amigo secreto.`;
    resultDiv.appendChild(li);
  }



//----------------------Reiniciar------------------------------------------


btnReiniciar.addEventListener('click', () => {

  txtAmigo.value = '';

  adicionados.textContent = '';

  listaSorteio.innerHTML = '';

  amigos = [];




})