// giph input value, global variable
const $searchInput = $('#search-value');
const $giphLocation = $('#giph-loc');


async function searchForGiph(result) {
  try {
    //send search term to giphy
    const response = await axios.get('https://api.giphy.com/v1/gifs/search', {
      params: {
        q: result,
        api_key: 'gM5z2hEMdK9Z7cVliiXjPieW4gQ9VhNN',
      }
    });

    //target giph randomly by generating an id.

    // declare giphy url, create image element, target append location
    const currentImage = response.data.data[0].images.original.url;
    console.log(currentImage.length);
    const img = document.createElement('img');
    const giphLoc = document.querySelector('#giph-loc');

    //append giph to webpage
    img.setAttribute('src', currentImage);
    giphLoc.append(img);

  } catch (e) {
    console.log('Giph Not Found.');
  }
}


async function randomGiph() {
  const response = await axios.get('https://api.giphy.com/v1/gifs/random', {
    params: {
      api_key: 'gM5z2hEMdK9Z7cVliiXjPieW4gQ9VhNN',
      tag: '',
      rating: 'r'
    }
  });

  const currentImage = response.data.data.image_url;
  const img = document.createElement('img');
  const giphLoc = document.querySelector('#giph-loc');
  img.setAttribute('src', currentImage);
  giphLoc.append(img);
}

$('form').on('submit', async function(e) {
  e.preventDefault();

  let searchTerm = $searchInput.val();
  $searchInput.val('');

  searchForGiph(searchTerm);
})

$('#remove').on('click', function() {
  $giphLocation.empty();
})