fetch('https://memes.colon3.me/memes.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response.json();
    })
    .then(data => {
        let memes = data.files;
        let body = document.getElementById("body");
        memes.forEach(meme => {
            let url = 'https://memes.colon3.me/' + meme;
            body.innerHTML += `<a href=${url}>${meme}<\a>`;
        });
    })
    .catch(error => {
        console.error('Error fetching JSON:', error);
    });
