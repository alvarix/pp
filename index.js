// create ul of thumbs
gallery = (id, format, num) => {
    const n = num;
    const ul = document.getElementById(id);
    const imgPaths = [];

    for (let i = 1; i <= n; i++) {
        imgPaths.push("img/" + id + "/" + i + '.' + format);
    }
    shuffleArray(imgPaths);
    imgPaths.forEach(path => {
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.src = path;
        li.appendChild(img);
        ul.appendChild(li);
    });
}

// shuffle onload
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// periodic reshuffle - doesnt work
function shuffleList(id) {
    var list = document.getElementById(id);
    for (var i = list.children.length; i >= 0; i--) {
      list.appendChild(list.children[Math.random() * i | 0]);
    }
  }
 

function refreshPage() {
    location.reload();
}

document.addEventListener('DOMContentLoaded', () => {


    const refreshIcon = document.getElementById('refreshIcon');
    refreshIcon.addEventListener('click', refreshPage);
    // id of gallery
    gallery('thumbs', 'png', 33);
    gallery('gallery', 'jpg', 10);
    // setInterval(shuffleList(id), 1000);

});