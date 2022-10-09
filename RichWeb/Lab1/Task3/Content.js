document.body.addEventListener("click",spinthings);

function spinthings(){
    console.log("spinning");
    document.body.animate([
        {transform:'rotate(360deg)'},
    ],{
        duration:1000,
        iterations:2
    });
    
}


document.body.addEventListener("click",colorChange);

function colorChange(){
    
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";

    document.body.style.background=bgColor;
}
