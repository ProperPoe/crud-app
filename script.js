const form = document.getElementById("form");
const input = document.getElementById("input");
const container = document.getElementById("card-container");
const btn = document.getElementById("butt");
const popup = document.getElementById("card-enlarge");
const closePopupBtn = document.getElementById("close-popup");
const hmm = document.getElementById("fuck");

/*let storage = JSON.parse(localStorage.getItem('posts'));

if(storage){
    storage.forEach((store) => {
        addNote(store)
    })
}*/

btn.addEventListener("click", () => {
    let el_id = new Date().getTime();
    const x = input.value;

    const newCard = document.createElement("div");

        newCard.innerHTML = `
        <div class="card">
            <div>
                <img src="space.jpg" alt="space">
            </div>
            
            <div class="card-header">
                <h2>${x}</h2>
            </div> 
            <div class="btn-container" id="btn-container">
                <div class="like-container">
                    <button class="like-btn" id="like-${el_id}">Like</button>
                    <span id="${el_id}"></span>
                </div>
                <button class="delete-btn" id="delete-${el_id}">Delete</button>
            </div>
        </div>
        `;

        newCard.addEventListener("click", () => {
            updatePopup(x)
        })

        container.appendChild(newCard);

        input.value = "";

        let like = document.getElementById(`like-${el_id}`);
        let num = document.getElementById(`${el_id}`);
        let count = 0;

        like.addEventListener("click", () => {
            count++;
            num.innerText = count;
        })

        let del = document.getElementById(`delete-${el_id}`);

        del.addEventListener("click", () => {
            newCard.innerHTML = "";
        })

        closePopupBtn.addEventListener("click", () => {
            popup.classList.add("hidden")
        
        })

})

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


/*function updateLs (el_id, x, num, del) {
    let cards = document.querySelectorAll(".card");


    let arr = [];

    cards.forEach((card) => {
        arr.push({
            id: card.id,
            name: x,
            likes: {
                num
            },
            delete: del = false,
        })

        
    })
}
*/











