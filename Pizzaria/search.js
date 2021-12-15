
const pizzas = [{name:"pepperoni", ingredients: ["Pepperoni", "Ost", "Tomatsovs"], image: "Billeder/Pepperoni.png"}, {name:"kebab",ingredients: ["Kebab", "Rødløg", "Ost", "Tomatsovs"], image: "Billeder/Kebab.png" }, {name:"hawaii", ingredients: ["Skinke", "Ananas", "Ost"], image: "Billeder/Hawaii.png"}, {name:"margherita", ingredients: ["Ost", "Tomatsovs"], image: "Billeder/Magarita.png"}];
const searchBar = document.getElementById("searchBar");
var currPizza
console.log(searchBar);


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