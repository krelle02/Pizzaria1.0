
const pizzas = [{name:"pepperoni", ingredients: ["meat", "pep"], image: "Billeder/pizza-20.jpg"}, {name:"kebab",ingredients: ["meat"], image: "Billeder/pizza_1.png" }];
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
            console.log(filteredChars[i].ingredients[j])
            li.innerText = filteredChars[i].ingredients[j]
            console.log(li);
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
       console.log(Target);
       Target.appendChild(p);
       console.log(p);
       getIntredients(filteredChars,Target);
   }
})


