function rotateScrews() {
    let screws = [...document.getElementsByClassName("screw")];
    for (let i=0; i < screws.length; i++) {
        let a = (Math.random() - 1) * 180;
        console.log("Rotating screw "+i+" "+a+" degrees");
        screws[i].style.transform = "rotate("+a+"deg)";
    }
}

function showAside() {
    document.getElementById("aside").style.display = "flex";
    document.getElementById("main").style.width = "calc(100vw - 350px)";
}

function hideAside() {
    document.getElementById("aside").style.display = "none";
    document.getElementById("main").style.width = "100vw";
}

function toggleAside() {
    let aside = document.getElementById("aside");
    let main = document.getElementById("main");
    if (aside.style.display != "flex") {
        aside.style.display = "flex";
        main.style.width = "calc(100vw - 350px)";
        
    } else {
        aside.style.display = "none";
        main.style.width = "100vw";
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
    let element = document.getElementById(data);
    element.style.left = (35 + (50 * Math.random()))+"px";
    event.target.appendChild(element);
}

function stackShelves() {
    let sections = [...document.getElementsByTagName("section")];
    for (let i=0; i < sections.length; i++) {
        let books = sections[i].children;
        let position = 0;
        for (let j=2; j < books.length; j++) {
            books[j].style.left = position+"px";
            position += books[j].offsetWidth;
        }
    }
}

function onLoad() {
    rotateScrews();
    stackShelves();
    scrollResize();
}

function scrollResize() {
    let scrollY = window.scrollY;
    let aside = document.getElementById("aside");
    let spacer = document.getElementById("spacer");
    if (scrollY < 120) {
        spacer.style.height = (160-scrollY)+"px";
    } else {
        spacer.style.height = "30px";
    }
}

window.onload = onLoad;
window.onscroll = scrollResize;