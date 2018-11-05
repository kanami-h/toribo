const picArray = [
    {src: 'images/sumibi2.png'},
    {src: 'images/toribo-exterior.jpg'},
    {src: 'images/sumibi2.png'}
];

let playingId = 0;
let counter = 0;

function changePicture() {
    if(counter < picArray.length) {
        document.getElementById('pics').src = picArray[counter].src;
        counter++;
    } else {
        document.getElementById('pics').src = picArray[0].src;
        counter = 0;
    }
}

function playSlideShow() {
    if(playingId == 0){
        playingId = setInterval(changePicture, 3000);
    } else {
        clearInterval(playingId);
        playingId = 0;
    }
}

window.onload = playSlideShow;