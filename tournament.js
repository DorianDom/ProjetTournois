document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form")
    form.addEventListener("keyup", (e) => {
        e.preventDefault()
        const textSaisie = document.getElementById("recopie")
        textSaisie.textContent=form.querySelector("input").value
    })
})