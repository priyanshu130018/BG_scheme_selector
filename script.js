const changeBg = document.querySelectorAll(".box")

changeBg.forEach(i => {
    i.addEventListener("click", (e) => {
        //console.log(e.target)
        let indexColor=e.target.innerText.toLowerCase().trim()
        document.body.style.backgroundColor=indexColor
    })
})
