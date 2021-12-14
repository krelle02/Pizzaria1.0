
const pizzas = [{name:"pepperoni", ingredients: ["meat"], image: "Billeder/pizza-20.jpg"}, {name:"kebab",ingredients: ["meat"], image: "Billeder/pizza_1.png" }];
const searchBar = document.getElementById("searchBar");
console.log(searchBar);


searchBar.addEventListener('keyup', (e) => {
   const searchString = e.target.value.toLowerCase(); 
   console.log(searchString);
   const filteredChars = pizzas.filter(char => {
    return char.name.includes(searchString) || char.ingredients.includes(searchString);
   })
   if (e.key == 'Enter') {
       console.log(filteredChars);
       console.log(filteredChars[0].image);
       document.getElementById("pizza-search").src = filteredChars[0].image;
       return filteredChars;
   }
})


