submit.addEventListener('click', e => {
    let inp = document.getElementsByClassName('input')

    if (input.value) {
        wishName.textContent = input.value + " " + input2.value
    } else {
        wishName.textContent = "Boburbek Khabibullaevning qadrli insoni"
    }
    

    quest.classList.toggle("dNone")
    thisWish.classList.toggle("dBlock")

}) 