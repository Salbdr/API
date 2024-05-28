let url = "https://coffee.alexflipnote.dev/random.json"
console.log(url);

let img = document.getElementById("img")
fetch( url, {method: "GET",})
.then(res => res.json())

.then(data => img.src=data.file)




