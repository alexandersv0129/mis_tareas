// Cargar las tareas guardadas INMEDIATAMENTE
renderizarTareas();

function obtenerTareas() {
    let guardadas = localStorage.getItem("tareas");
    return guardadas ? JSON.parse(guardadas) : [];
}

function agregarTarea() {
    let input = document.getElementById("nuevaTarea");
    let texto = input.value.trim();
    if (texto === "") return;

    let tareas = obtenerTareas();
    tareas.push(texto);
    localStorage.setItem("tareas", JSON.stringify(tareas));

    input.value = "";
    renderizarTareas();
}

function eliminarTarea(index) {
    let tareas = obtenerTareas();
    tareas.splice(index, 1);
    localStorage.setItem("tareas", JSON.stringify(tareas));
    renderizarTareas();
}

function renderizarTareas() {
    let lista = document.getElementById("listaTareas");
    lista.innerHTML = "";
    let tareas = obtenerTareas();

    tareas.forEach((tarea, index) => {
        let li = document.createElement("li");
        li.innerHTML = `
            <span>${tarea}</span>
            <button class="btn-borrar" onclick="eliminarTarea(${index})">X</button>
        `;
        lista.appendChild(li);
    });
}
