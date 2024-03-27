// create ul of thumbs
thumb_gallery = (id) => {
    const n = 25;
    const ul = document.getElementById(id);
    const imgPaths = [];

    for (let i = 1; i <= n; i++) {
        imgPaths.push("img/thumb-" + i + ".png");
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

// periodic reshuffle
function shuffleList(id) {
    var list = document.getElementById(id);
    for (var i = list.children.length; i >= 0; i--) {
      list.appendChild(list.children[Math.random() * i | 0]);
    }
  }
 

// id of gallery
const id ='thumbs';
thumb_gallery(id);
setInterval(shuffleList(id), 1000);
