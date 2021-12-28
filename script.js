const botaoCriaTarefa = document.getElementById("criar-tarefa");
const textoInput = document.getElementById("texto-tarefa");
const listaTarefas = document.getElementById("lista-tarefas");

/** ======= Botão que cria e adiciona tarefa, uma a uma ======= */
function criaTarefa (){
  
  const cadaTarefa = document.createElement("li");
  cadaTarefa.innerText = textoInput.value;
  listaTarefas.appendChild(cadaTarefa);
  textoInput.value = "";
  textoInput.focus();
}
botaoCriaTarefa.addEventListener("click", criaTarefa);

/** ======= No clicar no item, o background.color = rgb(128, 128, 128) ======= */

function coloreTarefa (event){
  
  const coloreCadaTarefa = document.getElementsByTagName("li");
  
  for( let tarefa of coloreCadaTarefa){
    
    tarefa.className = "";
    event.target.className = "colorida";  
  }
}
listaTarefas.addEventListener("click", coloreTarefa);

/** ======= No 'double click' no item, risca o elemento ======= */

function definiTarefaConcluida (event){
  
  const cadaTarefaConcluida = document.getElementsByTagName("li");
  
  for( let confereTarefa of cadaTarefaConcluida){

    confereTarefa.className = "";
    event.target.className = "completed";

  }
}
listaTarefas.addEventListener("dblclick", definiTarefaConcluida);

/** ======= Botão que reseta lista ======= */

const botaoResetLista = document.getElementById("apaga-tudo");


function resetListaTarefa (){
  
  const removeTodasTarefas = document.getElementsByTagName("li");
      
}
botaoResetLista.addEventListener("click", criaTarefa);


