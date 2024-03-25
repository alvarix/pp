
thumb_gallery = () => {
    const n = 25;
    const ul = getElementById("thumbs");

    for (let i = 1; i <= n; i++) {
        const li = document.createElement("li");
        const img = document.createElement("img");
        
        img.src = "img/thumb-"; // Set the image source here
        
        li.appendChild(img);
        li.appendChild(document.createTextNode("Image " + i));
        
        ul.appendChild(li);
    }
  }