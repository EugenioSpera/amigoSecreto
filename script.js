//participantes

// quando colocamos um . pegamos uma classe. Quando usamos a # pega ID isso no queryselector
const txtAmigo = document.querySelector('.participantes');
const btnAdicionar = document.querySelector('#btn-adicionar');
const Adicionados = document.querySelector('.sorteio');
const erroArea = document.querySelector('.erro_area');



btnAdicionar.addEventListener('click', ()=>{
  
  if (txtAmigo.value==''){
    setErrorFor(txtAmigo,"Insira um nome válido.");
  }
  else
  

  if (Adicionados.innerHTML=="") {
    Adicionados.innerHTML=txtAmigo.value;
  } else {
    Adicionados.innerHTML=Adicionados.innerHTML + "," +txtAmigo.value;
    erroArea.textContent='';
  }
  //Comando para deletar o input onde foi colocado o nome, apos ele jogar o nome para o sorteio
  txtAmigo.value='';
  
  

})


function setErrorFor(input, message) {
  //retorna a div que é o pai do input
  const participantes = input.parentElement;
  //querySelector = retorna apenas o primeiro elemento especificado dentro do elemento pai
  const small = participantes.querySelector("small");

  //Adiciona a mensagem de erro
  small.innerText = message;

  //Adiciona a classe de erro
  participantes.className = "participantes error";
}

//txtAmigo.value;







// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//   }
  
//   function sortearAmigoSecreto() {
//     const participantesInput = document.getElementById("participants").value;
//     const participantes = participantesInput.split(",").map(participant => participante.trim());
  
//     if (participantes.length < 2) {
//       alert("Por favor, insira pelo menos dois participantes.");
//       return;
//     }
  
//     shuffleArray(participantes);
  
//     const amigoSecreto = {};
  
//     for (let i = 0; i < participantes.length; i++) {
//       const amigoIndex = (i + 1) % participantes.length;
//       amigoSecreto[participantes[i]] = participantes[amigoIndex];
//     }
  
//     const resultDiv = document.getElementById("result");
//     resultDiv.innerHTML = "";
  
//     for (const participante in amigoSecreto) {
//       const amigo = amigoSecreto[participante];
//       const p = document.createElement("p");
//       p.textContent = `${participante} tirou ${amigo} como amigo secreto.`;
//       resultDiv.appendChild(p);
//     }
//   }

  