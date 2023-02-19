const btnSearch = document.querySelector('#search');
const input = document.querySelector('#name');
const results = document.querySelector('#result');
const APIKEY = "AIzaSyCn8GYsV4Nr-YjieW4Dz84AHLu8I_qBueg";
const ApiEndPoint = "https://tenor.googleapis.com/v2/search";

btnSearch.addEventListener("click", function (event){

    event.preventDefault();
    const searchTerm = input.value.trim();

    if (!searchTerm){
        console.error("Error");
        return;
    }

    const url = `${ApiEndPoint}?q=${searchTerm}&key=${APIKEY}&client_key=my_project&limit=8`;
    console.log(url)
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE) {
            if (this.status === 200) {
                const response = JSON.parse(this.responseText);
                const gifs = response.result;
                let output = "";
                for (let i = 0; i < gifs.length; i++) {
                    output += `<img src="${gifs[i].media[0].gif.url}" alt="${gifs[i].title}">`;
                }
                results.innerHTML = output;
            } else {
                console.error("There's an error you gonna need to wait a min " + this.status);
            }
        }
        xhr.send()
    }
});
