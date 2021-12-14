

catchMap()
.then(response => {
console.log('yay');
})
.catch(error =>  {
  console.log("error");
  console.error(error);
})

async function catchMap() {
      console.log("about to get map");
      const response = await fetch('map.jpg');
      const blob = await response.blob();
      document.getElementById('map').src = URL.createObjectURL(blob);
    }
