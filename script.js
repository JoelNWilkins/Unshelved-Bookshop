function rotateScrews() {
    let screws = [...document.getElementsByClassName("screw")];
    for (var i=0; i < screws.length; i++) {
        let a = (Math.random() - 1) * 180;
        console.log("Rotating screw "+i+" "+a+" degrees");
        screws[i].style.transform = "rotate("+a+"deg)";
    }
}

window.onload = rotateScrews;