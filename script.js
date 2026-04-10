const arenaData =
    'https://api.are.na/v3

async function getiMAGES() {
    try {
        const response = await fetch(arenaData) ;
        const result = await response.json() ;
        const items = result.data;

    const container =  documeny.getElementById('image-container');
        container.innerHTML = '';

    items.forEach(block => {
        const imageURL = block.image?.src;

                  if (imageURL) {
                      const image = document.createElement('img');
                      img.src = imageURL;
                      container.appendChild(img);
                  }
    });
    }
