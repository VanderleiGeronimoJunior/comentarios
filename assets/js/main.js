import placeholder from "./config.js"

const inputName = document.getElementById("inputName")
const inputcoment = document.getElementById("inputText")

const form = document.getElementById("formulario")
const BoxCommentPost = document.getElementById("commentPost")


inputName.setAttribute('placeholder', placeholder.nome)
inputcoment.setAttribute('placeholder', placeholder.coment)

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let p = document.createElement('p')
    p.classList = 'p-2 d-flex text-wrap flex-wrap'
    p.innerHTML = `
    <strong>${inputName.value}:  </strong> &nbsp

    ${inputcoment.value}
    `
    BoxCommentPost.appendChild(p) // Código de espaço: &nbsp ou &#160;

    inputName.value = ""
    inputcoment.value = ""
    inputName.focus()
})

