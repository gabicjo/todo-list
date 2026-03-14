const submit_button = document.getElementById("button")
const conteiner = document.getElementById("task-list")

function criarNovaTarefa() {
    const task_name = document.getElementById("new-task-name")

    if (task_name.value == "") {
        return
    }

    const li = document.createElement("li")
    li.textContent = task_name.value
    li.classList.add("new-task-li")

    conteiner.insertBefore(li, conteiner.firstChild)
    task_name.value = ''
}

conteiner.addEventListener('click', (event) => {
    if (event.target.classList.contains('new-task-li')) {
        event.target.classList.toggle("done")
    }
    if (event.target.classList.contains("done")) {
        conteiner.appendChild(event.target);
    } else {
        conteiner.insertBefore(event.target, conteiner.firstChild)
    }
})

const input = document.getElementById('new-task-name')

document.addEventListener("keydown", function(tecla) {
    if (tecla.key === "Delete" || (tecla.key === "Backspace" && tecla.ctrlKey)) {
        const itens = conteiner.querySelectorAll("li");

        for (let i = itens.length - 1; i >= 0; i--) {
          const li = itens[i];
          if (li.classList.contains("done")) {
            conteiner.removeChild(li);
          }
        }
    }
    if (tecla.key === "Enter") {
        input.focus()
    }
})

input.addEventListener("keydown", function(teclaInput) {
    if (teclaInput.key === "Enter") {
        criarNovaTarefa()
    }
})

const btnKeyblinds = document.getElementById("btnSupport")
const keyblindsPopup = document.getElementById("divKeyblinds")

btnKeyblinds.addEventListener("click", function() {
    keyblindsPopup.style.display = keyblindsPopup.style.display === "block" ? "none" : "block"
})
