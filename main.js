let products = { 
    NewArrivals: [
        {
            id: 0,
            name: 'Carnation',
            images: '/photo/download (7).jpeg',
        },{
            id: 1,
            name: 'butterfly',
            images: '/photo/download (8).jpeg',
        },{
            id: 2,
            name: 'crocus',
            images: '/photo/download (6).jpeg',
        },{
            id: 3,
            name: 'shrub',
            price: 40 ,
            images: '/photo/145cm Artificial Black Rubber Ficus Plant Branches Fake plant Plastic Leaf Realistic Ornamental.jpeg',
            quantity: 1
        },{
            id: 4,
            name: 'Dahlia',
            images: '/photo/Baby Shower Centerpiece✨.jpeg',
        },{
            id: 5,
            name: 'Lotus',
            images: '/photo/New Arrivals1.jpeg',
        }
    ]
     ,BirthdayProducts: [
        {
            id: 0,
            name: 'Red rose',
            images: '/photo/Krasuvo.jpeg',
        },{
            id: 1,
            name: 'Pink rose',
            images: '/photo/Букет пионовидных роз.jpeg',
        },{
            id: 2,
            name: 'Damask ',
            images: '/photo/download (2).jpeg',
        },{
            id: 3,
            name: 'Balloons',
            images: '/photo/download (4).jpeg',
        },{
            id: 4,
            name: 'Mix',
            images: '/photo/download (3).jpeg',
        },{
            id: 5,
            name: 'Teddy',
            images: '/photo/purple.jpeg',
        }
    ] ,
    IndoorPlant: [
        {
            id: 0,
            name: 'Branch',
            images: '/photo/Decorative Flowers Artificial Plant Tree Green Potted Home Restaurant Office Large Fake Bonsai Floor Decoration Traveler Banana.jpeg',
        },{
            id: 1,
            name: 'Dandelion',
            images: '/photo/New Arrivals.jpeg',
        },{
            id: 2,
            name: 'Stump',
            images: '/photo/Peperomia watermelon 🌱🍉😍.jpeg',
        },{
            id: 3,
            name: 'Moss',
            images: '/photo/13 Gorgeous Plants to Transform Your Boho Bedroom Instantly _ MowersLab.jpeg',
        }
    ], 
    HousePlant: [
        {
            id: 3,
            name: 'Thistle',
            images: '/photo/Sansevieria.jpeg',
        },
        {
            id: 3,
            name: 'Dragon',
            images: '/photo/00.jpeg',
        }
    ]
};

const card = document.querySelector('main'); 
showAllProducts();

function showAllProducts() {
    for (let category in products) {
        productShow(category); 
    }
}

function productShow(category) {
    let product = products[category];

    product.forEach((value, index) => { 
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');

        newDiv.innerHTML = `
            <img src='${value.images}' onclick="addToCart(${index}, '${category}')">
            <div>
                <i class="fa-regular fa-heart"></i>
                <p>${value.name}</p>
            </div>
        `;

        card.appendChild(newDiv);
    });
}



function check() {
    card.innerHTML = '';
    let anyChecked = false;

    document.querySelectorAll('[type="checkbox"]').forEach(item => {
        if (item.checked) {
            const category = item.id;
            console.log(category);
            if (products[category]) {
                productShow(category);
                anyChecked = true;
            }
        }
    });

    if (!anyChecked) showAllProducts();
}


function toggleElement(button, element, className) {
    button.addEventListener('click', function () {
        element.classList.toggle(className);
    });
}

const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('#navbarNav');
const filterBar = document.querySelector('#filterBar');
const aside = document.querySelector('aside');

toggleElement(navbarToggler, navbarCollapse, 'show');
toggleElement(filterBar, aside, 'show');




let dark = document.querySelector('.dark');
let light = document.querySelector('.light');
let button = document.getElementById('theme-toggle');

button.addEventListener('click', toggleTheme);

function toggleTheme() {
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        light.style.display = 'none';
        dark.style.display = 'flex';
    } else {
        document.body.classList.add('dark-mode');
        document.body.style.backgroundColor = 'rgba(12, 10, 10, 0.795)';
        document.body.style.color = 'white';
        dark.style.display = 'none';
        light.style.display = 'flex';
    }
}


