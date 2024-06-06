// Register on Unsplash to get your own API key
const API_KEY = '';

const button = document.getElementById('fetch-button');
button.addEventListener('click', function(){
  fetch(`https://api.unsplash.com/photos/randm?count=10&client_id=${API_KEY}`)
  .then(response => response.json()) //res or response
  .then(data => {
    // TODO: Add error handling
    data.map(imageData => {
      const imageWrapper = document.createElement("div");
      imageWrapper.classList.add('image-wrapper');
      const imageElement = document.createElement("img");

      imageElement.src = imageData.urls.small;
      imageWrapper.append(imageElement);
      document.getElementById("image-container").append(imageWrapper);
    }) 
  })
  .catch(error => console.error(error));
});