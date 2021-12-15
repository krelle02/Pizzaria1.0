
const pizzas = [{name:"pepperoni", ingredients: ["Meat", "Pep"], image: "Billeder/Pizza_1.png"}, {name:"kebab",ingredients: ["Meat"], image: "Billeder/Kebab.png" }, {name:"hawaii", ingredients: ["Meat", "Ananas"], image: "Billeder/Hawaii.png"}];
const searchBar = document.getElementById("searchBar");
var currPizza
console.log(searchBar);


function getIntredients(filteredChars,Target) {
    //insert ul element
    const ul = document.createElement('ul');
    ul.id = "ingredients";
    Target.appendChild(ul);
    // insert ingredients
    for (let i = 0; i < filteredChars.length; i++) {
        for (let j = 0; j <filteredChars[i].ingredients.length; j++) {
            const li = document.createElement('li');
            li.innerText = filteredChars[i].ingredients[j]
            const ulTarget = document.querySelector('#ingredients');
            ulTarget.appendChild(li);
        }
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
   }
})


