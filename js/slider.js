const imageLink = [
    './image/slider (1).jpg',
    './image/slider (2).jpg',
    './image/slider (3).jpg',
    './image/slider (4).jpg',
    './image/slider (5).jpg',
    './image/slider (6).jpg',
    './image/slider (7).jpg',
    './image/slider (8).jpg',
    './image/slider (9).jpg',
    './image/slider (10).jpg',
    './image/slider (11).jpg'
]
let imgIndex = 0;
const imageElement = document.getElementById('slider');
setInterval(()=>{
    if(imgIndex>= imageLink.length){
        imgIndex = 0;
    }
    const setImage = imageLink[imgIndex];
    imgIndex++;
    imageElement.setAttribute('src', setImage);

},2000);