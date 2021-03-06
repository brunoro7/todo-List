const botaoCriaTarefa = document.getElementById("criar-tarefa");
const textoInput = document.getElementById("texto-tarefa");
const listaTarefas = document.getElementById("lista-tarefas");
const botaoResetLista = document.getElementById("apaga-tudo");
const botaoRemoveCompletas = document.getElementById("remover-finalizados");
const botaoRemoveSelecionada = document.getElementById("remover-selecionado");
const botaoSalvaLista = document.getElementById("salvar-tarefas");

/** ======= Botão que cria e adiciona tarefa, uma a uma ======= */
function criaTarefa (){
  
  const cadaTarefa = document.createElement("li");
  cadaTarefa.className = "";
  cadaTarefa.innerText = textoInput.value;
  listaTarefas.appendChild(cadaTarefa);
  textoInput.value = "";
  textoInput.focus();
}
botaoCriaTarefa.addEventListener("click", criaTarefa);

/** ======= No clicar no item, o background.color = rgb(128, 128, 128) ======= */

function coloreTarefa (event) {
  
  let listaTarefaColorida = document.querySelectorAll(".colorida");

    if(listaTarefaColorida.length === 0){
      event.target.classList.add("colorida");
    }
    else if(listaTarefaColorida.length > 0){
      let tarefaColorida = document.querySelector(".colorida");
      tarefaColorida.classList.remove("colorida");
      event.target.classList.add("colorida");
    }
}
listaTarefas.addEventListener("click", coloreTarefa)

/** ======= Essa função comentada abaixo, é a forma como foi criada na primeira versão, ela é funcional, até entrar um "double click", que acaba recebendo por 'reflexo' o primeiro clique, que limpava tudo. Deixei para manter o lembrete. ======= */

// function coloreTarefa (event){
  
//   const coloreCadaTarefa = document.getElementsByTagName("li");
  
//   for( let tarefa of coloreCadaTarefa){
    
//     tarefa.className = "";
//     event.target.className = "colorida";  
//   }
// }
// listaTarefas.addEventListener("click", coloreTarefa);

/** ======= No 'double click' no item, risca o elemento ======= */

function definiTarefaConcluida(event){
  
  event.target.classList.toggle("completed");
 
}
listaTarefas.addEventListener("dblclick", definiTarefaConcluida);

/** ======= Botão que reseta lista ======= */

function resetListaTarefa (){
  
  const removeTodasTarefas = document.getElementById("lista-tarefas");
    removeTodasTarefas.innerHTML = "";
}
botaoResetLista.addEventListener("click", resetListaTarefa);


/** ======= Botão que apaga os riscados ======= */

function apagaTarefasCompletas() {
   
  let filhosLista = document.querySelectorAll(".completed");
  for (let i of filhosLista){
    listaTarefas.removeChild(i);
  }
}
botaoRemoveCompletas.addEventListener("click", apagaTarefasCompletas);

/** ======= Botão que que apaga os selecionados ======= */

function apagaTarefaSelecionada() {
   
  let filhoSelected = document.querySelectorAll(".colorida");
  for (let i of filhoSelected){
    listaTarefas.removeChild(i);
  }
}
botaoRemoveSelecionada.addEventListener("click", apagaTarefaSelecionada);

/** ======= Botão que salva tudo na lista ======= */

//Essa parte serve para salvar a lista no clique
function salvaLista (){

  let listaAtual = listaTarefas.innerHTML;
  localStorage.setItem("listaUltimaSessao", listaAtual);

}
botaoSalvaLista.addEventListener("click", salvaLista);

let listaSalva = localStorage.getItem("listaUltimaSessao");

//Essa parte serve para o windown.onload já carregar a lista salva;
function carregarLista (){
  listaTarefas.innerHTML = listaSalva;
}
window.onload = carregarLista(); //chama a função, invés de click, ao abrir pagina.
