 console.log("Sever Running")

 async function getArtist(){
    
    const response = await fetch("...")
    const data = await response.json()
    console.log(data)
}

getArtist()




const form = document.getElementById('artForm');
    const gallery = document.getElementById('gallery');

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const title = document.getElementById('title').value;
      const description = document.getElementById('description').value;
      const price = document.getElementById('price').value;
      const imageURL = document.getElementById('imageURL').value;
      const status = document.getElementById('status').value;

      const artCard = document.createElement('div');
      artCard.classList.add('art-card');
      artCard.innerHTML = `
        <img src="${imageURL}" alt="${title}" />
        <h3>${title}</h3>
        <p>${description}</p>
        <p><strong>Price:</strong> $${price}</p>
        <p class="status ${status === 'Sold' ? 'sold' : ''}">${status}</p>
      `;

      gallery.prepend(artCard);
      form.reset();
    });