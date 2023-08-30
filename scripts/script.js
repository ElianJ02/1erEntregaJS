//variable de tipo constante llamada "nota"
const notas = [];
//variable de tipo constante para asignar las notas a una lista
const notasList = document.getElementById('notas-list');
//variable de tipo constante para mostrar el resultado de la operación en pantalla
const promedioSpan = document.getElementById('promedio');

//función para agregarle un valor a la variable nota
function agregarNota() {
  const notaInput = document.getElementById('nota');
  const nota = parseFloat(notaInput.value);
//condicional de tipo "si..." para crear un limite de entre 0 & 100 de maximo
  if (!isNaN(nota) && nota >= 0 && nota <= 100) {
    notas.push(nota);
    notaInput.value = '';
    actualizarListaNotas();
    calcularPromedio();
  }
  //condicional de tipo "si no..." para mostrar un mensaje de error si la variable no se encuentra entre los valores establecidos
  else {
    alert('Ingrese una nota válida entre 0 y 100.');
  }
}
//función para actualizar la lista de notas para promediar
function actualizarListaNotas() {
  notasList.innerHTML = '';
  for (const nota of notas) {
    const li = document.createElement('li');
    li.textContent = nota;
    notasList.appendChild(li);
  }
}
//función para calcular el promedio de las notas introducidas
function calcularPromedio() {
  const totalNotas = notas.reduce((sum, nota) => sum + nota, 0);
  const promedio = totalNotas / notas.length;
  promedioSpan.textContent = promedio.toFixed(2);
}
