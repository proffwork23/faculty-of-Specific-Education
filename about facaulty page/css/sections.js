// select buttons switch section info

let AllBtn = document.querySelectorAll(".buttons-detalls button")
let allCards = document.querySelectorAll(".cardes-info .card")
console.log(allCards);

AllBtn.forEach((el, indx)=>{
    el.onclick = ()=>{
        AllBtn.forEach((bt)=>{
            bt.classList.remove("activ")
        })
        el.classList.add("activ")

        allCards.forEach((el)=>{
            el.classList.remove("activ")
        })
        allCards[indx].classList.add("activ")
    }
    
})
