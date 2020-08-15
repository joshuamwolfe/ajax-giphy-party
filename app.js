async function search(result) {
  const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=gM5z2hEMdK9Z7cVliiXjPieW4gQ9VhNN&q=${result}&limit=25&offset=0&rating=g&lang=en`);
  console.log(response.data.data[1].url);
  const currentImage = response.data.data[1].url;
  const img = document.createElement('img');
  const giphLoc = document.querySelector('#giph-loc');
  img.setAttribute('src', currentImage);
  giphLoc.append(img);
}

search('penis')
// async function getGiphBySearch(result) {
//   try {
//     console.log(result);
//     const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=gM5z2hEMdK9Z7cVliiXjPieW4gQ9VhNN&q=${result}&limit=25&offset=0&rating=g&lang=en`);
//     const currentImage = response.data.data[0].url;
//     console.log(currentImage);
//     const img = document.createElement('img');
//     const giphLoc = document.querySelector('#giph-loc');
//     img.setAttribute('src', currentImage);
//     giphLoc.append(img);
//   } catch (e) {
//     alert("Giph Not Found");
//     randomGiph();
//   }
// }
//
// getGiphBySearch('penis');
//
// async function randomGiph() {
//   const response = await axios.get('https://api.giphy.com/v1/gifs/random?api_key=gM5z2hEMdK9Z7cVliiXjPieW4gQ9VhNN&tag=&rating=g');
//   // console.log(response.data.data.image_url);
//   const currentImage = response.data.data.image_url;
//   const img = document.createElement('img');
//   const giphLoc = document.querySelector('#giph-loc');
//   img.setAttribute('src', currentImage);
//   giphLoc.append(img);
// }
//
// const form = document.querySelector('#search-form');
// form.addEventListener('submit', function(e) {
//   const input = document.querySelector('#search-value');
//   e.preventDefault();
//   getGiphBySearch(input.value);
//   input.value = '';
// })
//
// // randomGiph();