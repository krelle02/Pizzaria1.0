
const pizzas = [{name:"pepperoni", ingredients: ["Pepperoni", "Ost", "Tomatsovs"], image: "Billeder/Pepperoni.png"}, 
{name:"kebab",ingredients: ["Kebab", "Rødløg", "Ost", "Tomatsovs"], image: "Billeder/Kebab.png" }, 
{name:"hawaii", ingredients: ["Skinke", "Ananas", "Ost", "Tomatsovs"], image: "Billeder/Hawaii.png"}, 
{name:"margherita", ingredients: ["Ost", "Tomatsovs"], image: "Billeder/Magarita.png"},
{name:"spaghetti bolognese", ingredients: ["Spaghetti", "Kødsovs"], image: "Billeder/Bolognese.png"},
{name:"spaghetti carbonara", ingredients: ["Spaghetti", "Champignon", "Æg", "Skinke", "Bacon", "Parmesan"], image: "t"},
{name:"lasagne", ingredients: ["Hjemmelavet"], image: "t"}];

const searchBar = document.getElementById("searchBar");

function getIntredients(filteredChars,Target) {
    //insert ul element
    const ul = document.createElement('ul');
    ul.id = "ingredients";
    Target.appendChild(ul);
    // insert ingredients
   
        for (let j = 0; j <filteredChars[0].ingredients.length; j++) {
            const li = document.createElement('li');
            li.innerText = filteredChars[0].ingredients[j]
            const ulTarget = document.querySelector('#ingredients');
            ulTarget.appendChild(li);
        }
    }


searchBar.addEventListener('keyup', (e) => {
   const searchString = e.target.value.toLowerCase(); 
   const filteredChars = pizzas.filter(char => {
    return char.name.includes(searchString) || char.ingredients.includes(searchString);
   })
   if (e.key == 'Enter' && filteredChars.length > 0) {
       const Node = document.getElementById('insertSearch')
       Node.textContent = '';
       document.getElementById("img-search").src = filteredChars[0].image;
       //sets "din pizza"
       const name = filteredChars[0].name[0].toUpperCase() + filteredChars[0].name.slice(1);
       document.getElementById('din-pizza').textContent = name;
       //insert ingredients p element before ingredients-list
       const p = document.createElement('p');
       p.innerText = "Ingredients";
       const Target = document.querySelector('#insertSearch');
       Target.appendChild(p);
       getIntredients(filteredChars,Target);
       //clear searchbar
       const searchbar = document.getElementById('searchBar')
       searchbar.value = '';
   }
})

let activeMenu = false;

setInterval(hamMenu,100);

function hamMenu() {
const menu = getComputedStyle(document.body).getPropertyValue('--menu').replace(/\W/g, '');

if (menu == "ON" && !activeMenu) {
    activeMenu = true;
    const HAM = document.getElementById('menu');
    for (let i = 0; i < 3; i++) {
        const div = document.createElement('div');
        div.className = "ham-bar";
        HAM.append(div);
    }
}
else if (menu == "OFF") {
    HAM.textContent = '';
}
}

let open = false;
function openMenu() { 
    if (!open) {
    document.getElementsByClassName('nav-menu')[0].style.opacity = "1";
    open = true;
    }
    else if (open) {
        document.getElementsByClassName('nav-menu')[0].style.opacity = "0";
        open = false;
    }
    
}
    