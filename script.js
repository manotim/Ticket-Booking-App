const slot = [
    {
        id: 'erbhet',
        img: './images/vvip.jpg',
        title: 'VVIP Ticket',
        price: 5000,
    },
    {
        id: 'ebfr',
        img: './images/vip.jpg',
        title: 'VIP Ticket',
        price: 2000,
    },
    {
        id: 'evdf',
        img: './images/reg.png',
        title: 'Regular Ticket',
        price: 1000,
    }
];


const containerSection = document.querySelector('.container-center');


let basket = []


//load items
window.addEventListener('DOMContentLoaded', function() {
    displayTickets(slot);
});


//display tickets
function displayTickets(eventTickets) {
    let displayTickets = eventTickets.map(function(x) {
        let {id, img, title, price} = x;
        return `
        <div id=ticket-id-${id} class="ticket">
            <img width="20" src=${img} alt=${title}>
            <div class="details">
                <h3>${title}</h3>
                <div class="price">
                    <h2>Ksh ${price}</h2>
                    <div class="buttons">
                        <i onclick='decrement(${id})' class="fa fa-minus" aria-hidden="true"></i>
                        <div id=${id} class="quantity">0</div>
                        <i onclick='increment(${id})' class="fa fa-plus" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </div>
        `;
    });
    displayTickets = displayTickets.join('');
    containerSection.innerHTML = displayTickets
};


//increment function
let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);


    if(search === undefined) {
        basket.push({
            id: selectedItem.id,
            item: 1,
        })
    } else {
        search.item += 1;
    }
    console.log(basket);
    update(selectedItem.id);
};


//decrement function
let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);


    if(search.item === 0) return;
     else {
        search.item -= 1;
    }
    console.log(basket)
    update(selectedItem.id);
};


//update function
let update = (id) => {
let search = basket.find((x) => x.id === id);
document.getElementById(id).innerHTML = search.item;
calculate();
};


//calculate function
let calculate = () => {
   
};
