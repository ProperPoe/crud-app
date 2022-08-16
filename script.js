const form = document.getElementById("form");
const input = document.getElementById("input");
const container = document.getElementById("card-container");
const btn = document.getElementById("butt");
const popup = document.getElementById("card-enlarge");
const closePopupBtn = document.getElementById("close-popup");
const hmm = document.getElementById("fuck");

let card_id = 0;

let postStorage = JSON.parse(localStorage.getItem('posts'));
let likeStorage = JSON.parse(localStorage.getItem('likes'))

if(postStorage){
    postStorage.forEach(store => {
        addNote(store)
    })
}

/*if(likeStorage){
    likeStorage.forEach(whoa => {
        addNote(whoa)
    })
}*/

btn.addEventListener("click", (e) => {
    e.preventDefault();

    addNote();
})

function addNote(store) {
    if(likeStorage){
        console.log(likeStorage.like)
    }
    let el_id = new Date().getTime();
    const x = input.value;
    let count = 0;

    const newCard = document.createElement("div");
        newCard.classList.add("card")
        newCard.innerHTML = `
            <div class="${store ? store.name : x}">
                <div id="content-${card_id}">
                <div>
                    <img src="space.jpg" alt="space">
                </div>
            
                <div class="card-header">
                    <h2>${store ? store.name : x}</h2>
                </div> 
                </div>
                <div class="btn-container" id="btn-container">
                    <div class="like-container">
                        <button class="like-btn" id="like-${card_id}">Like</button>
                        <span class="${card_id}" id="${card_id}">${count}</span>
                    </div>
                    <button class="delete-btn" id="delete-${card_id}">Delete</button>
                </div>
            </div>
            `;

        container.appendChild(newCard);

        let content = document.getElementById(`content-${card_id}`);

        content.addEventListener("click", () => {
            updatePopup(x)
        })

        let like = document.getElementById(`like-${card_id}`);
        let num = document.getElementById(`${card_id}`);

        if(count === 0){
            num.innerText = "";
        }
        if(likeStorage){
            num.innerText = likeStorage[card_id].like
        }

        like.addEventListener("click", () => {
            count++;
            num.innerText = count;
            likeLs(count)
        })

        let del = document.getElementById(`delete-${card_id}`);

        del.addEventListener("click", () => {
            newCard.classList.remove("card")
            newCard.innerHTML = "";
        })

        closePopupBtn.addEventListener("click", () => {
            popup.classList.add("hidden")
        
        })

        card_id++
        //updateLsId(card_id);
        updateLs();
        

        input.value = "";
}

function updatePopup (x){
    hmm.innerHTML = "";
    const popEl = document.createElement('div');

    popEl.innerHTML = `
        <h1>${x}</h1>
        <img src="space.jpg" alt="">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, inventore! Nostrum quam officia optio pariatur maiores tempore alias, sint sed, eos delectus eligendi quidem ut eaque. Temporibus animi optio dicta?
        </p> 
    `

    hmm.appendChild(popEl);
    popup.classList.remove('hidden')
}

function updateLs () {
    let cities = document.querySelectorAll('h2') 
    
    let arr = [];

    cities.forEach(x => {
        arr.push({
            name: x.innerHTML
        })
    })

    localStorage.setItem('posts', JSON.stringify(arr))

    
}

function likeLs () {
    let likesEl = document.querySelectorAll('span');

    let likeArr = [];

    likesEl.forEach(um => {
        likeArr.push({
            like: um.innerText
        })
    })
    localStorage.setItem('likes', JSON.stringify(likeArr))
}

/*function updateLsId (card_id) {

    let numArr = [];
    
    card_id.forEach(x => {
        numArr.push({
            id: x
        })
    })
    localStorage.setItem('id', JSON.stringify(numArr))
}*/

//console.log(postStorage)
//console.log(likeStorage[0].like)











