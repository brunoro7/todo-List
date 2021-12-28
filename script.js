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

/** ======= ======= */


console.log(botaoCriaTarefa);

