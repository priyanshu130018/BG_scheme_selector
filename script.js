const changeBg= document.querySelectorAll(".box")

changeBg.forEach(box => {
    box.addEventListener("click", (e) => {
        //console.log(e.target)
        let indexColor=e.target.innerText.toLowerCase().trim();
        document.body.style.backgroundColor=indexColor;

        box.style.border=`3px solid ${indexColor}`;
    })
})
