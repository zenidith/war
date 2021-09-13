let deckId 

function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => console.log(data))
}

document.getElementById("new-deck").addEventListener("click", handleClick)

document.getElementById("draw-cards").addEventListener("click", () => {
    fetch(`https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2
    `) 
        .then(res => res.json())
        .then(data => console.log(data))
})