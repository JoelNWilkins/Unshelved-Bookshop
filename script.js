function rotateScrews() {
    let screws = [...document.getElementsByClassName("screw")];
    for (var i=0; i < screws.length; i++) {
        let a = (Math.random() - 1) * 180;
        console.log("Rotating screw "+i+" "+a+" degrees");
        screws[i].style.transform = "rotate("+a+"deg)";
    }
}

function showAside() {
    document.getElementById("aside").style.display = "block";
}

function hideAside() {
    document.getElementById("aside").style.display = "none";
}

function toggleAside() {
    let aside = document.getElementById("aside");
    if (aside.style.display != "flex") {
        aside.style.display = "flex";
    } else {
        aside.style.display = "none";
    }
}

function allowDrop(event) {
    if (event.target.id == "aside") {
        event.preventDefault();
    }
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("text");
    element = document.getElementById(data);
    event.target.appendChild(element);
    makePile();
}

function stackShelves() {
    let sections = [...document.getElementsByTagName("section")];
    for (var i=0; i < sections.length; i++) {
        let books = sections[i].children;
        position = 0;
        for (var j=2; j < books.length; j++) {
            books[j].style.left = position+"px";
            position += books[j].offsetWidth;
        }
    }
}

function makePile() {
    let aside = document.getElementById("aside");
    let books = aside.children;
    position = 0;
    for (let book of books) {
        book.style.left = (35 + (50 * Math.random()))+"px";
        book.style.bottom = position+"px";
        position += book.offsetWidth;
    }
}

function onLoad() {
    rotateScrews();
    stackShelves();
}

window.onload = onLoad;