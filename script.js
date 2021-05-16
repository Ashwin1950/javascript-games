document.addEventListener('DOMContentLoaded',() =>{
    const cardsArray=[
        {
            name: 'pandya',
            img: 'img/pandya.jpg'
        },
        {
            name: 'pandya',
            img: 'img/pandya.jpg'
        },
        {
            name: 'dhoni',
            img: 'img/dhoni.jpg'
        },
        {
            name: 'dhoni',
            img: 'img/dhoni.jpg'
        },
        {
            name: 'bumrah',
            img: 'img/bumrah.jpg'
        },
        {
            name: 'bumrah',
            img: 'img/bumrah.jpg'
        },
        {
            name: 'rahul',
            img: 'img/rahul.jpg'
        },
        {
            name: 'rahul',
            img: 'img/rahul.jpg'
        },
        {
            name: 'rohit',
            img: 'img/rohit.jpg'
        },
        {
            name: 'rohit',
            img: 'img/rohit.jpg'
        },
        {
            name: 'raina',
            img: 'img/raina.png'
        },
        {
            name: 'raina',
            img: 'img/raina.png'
        },
        {
            name: 'jadeja',
            img: 'img/jadeja.jpg'
        },
        {
            name: 'jadeja',
            img: 'img/jadeja.jpg'
        },
        {
            name: 'kohli',
            img: 'img/kohli.jpg'
        },
        {
            name: 'kohli',
            img: 'img/kohli.jpg'
        }
    ]

    cardsArray.sort(()=> Math.random()-0.5);

    const grid = document.querySelector('.grid');
    var cardsChosen=[];
    var cardsChosenId=[];
    var cardsWon=[];
    var flag=0;
    const displayResult = document.querySelector('#result');
    const displayMoves = document.querySelector('#remaining-moves');
    var moves = 15;

    function createBoard(){
        for (let i = 0; i < cardsArray.length; i++) {
            const card = document.createElement('img');
            card.setAttribute('src','img/blank.png');
            card.setAttribute('data-id',i);
            card.setAttribute('width','25%');
            card.setAttribute('height','25%');
            grid.appendChild(card);
            card.addEventListener('click',flipCard);
        }
    }

    function flipCard(){
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardsArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src',cardsArray[cardId].img);
        if(cardsChosenId[0] === cardsChosenId[1]){
            cardsChosenId.splice(1,1);
            cardsChosen.splice(1,1);
        }
        if(cardsChosenId.length === 2){
            setTimeout(checkMatch,500);
        }
    }

    function checkMatch(){
        var cards = document.querySelectorAll('img');
        if (cardsChosen[0]===cardsChosen[1]) {
            alert("That's a match!!!");
            cards[cardsChosenId[0]].setAttribute('src', 'img/white.png');
            cards[cardsChosenId[1]].setAttribute('src', 'img/white.png');
            cardsWon.push(cardsChosen);
        }
        else{
            cards[cardsChosenId[0]].setAttribute('src', 'img/blank.png');
            cards[cardsChosenId[1]].setAttribute('src', 'img/blank.png');
            alert("Err. Not a match!!!");
        }
        cardsChosen=[];
        cardsChosenId=[];
        displayResult.textContent='Score:'+cardsWon.length;
        displayMoves.textContent='Moves Remaining:'+(--moves);
        if (cardsWon.length===cardsArray.length/2 && moves>=0) {
            displayResult.textContent='Congratulations!! You have won...';
            alert('You Won!');
            location.reload();
        }
        else if(moves<=0){
            displayResult.textContent='Oh Oh. You have lost all moves!!';
            alert('You Lost!');
            location.reload();
        }
    }

    createBoard();
})