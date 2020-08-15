console.log("Let's get this party started!");

async function getGiph() {
  const response = await axios.get('https://api.giphy.com/v1/gifs/random?api_key=gM5z2hEMdK9Z7cVliiXjPieW4gQ9VhNN&tag=&rating=g');
  console.log(response.data.data.image_url);
  const currentImage = response.data.data.image_url;
  const img = document.createElement('img');
  const giphLoc = document.querySelector('#giph-loc');
  img.setAttribute('src', currentImage);
  giphLoc.append(img);

  // img.append(document.querySelector('#giphlocation'));
  // const img = document.querySelector('#giph');
  // img.src = 'https://api.giphy.com/v1/gifs/random?api_key=gM5z2hEMdK9Z7cVliiXjPieW4gQ9VhNN&tag=&rating=g';
}

getGiph();