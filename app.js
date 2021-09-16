let deckId 

function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            deckId = data.deck_id
        })
}

document.getElementById("new-deck").addEventListener("click", handleClick)

document.getElementById("draw-cards").addEventListener("click", () => {
    fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=2
    `)
        .then(res => res.json())
        .then(data => {
            console.log(data.cards)
            document.getElementById("cards").children[0].innerHTML = `
                <img src=${data.cards[0].image} class="card" />
            `
            document.getElementById("cards").children[1].innerHTML = `
                <img src=${data.cards[1].image} class="card" />
            `
        })
})
