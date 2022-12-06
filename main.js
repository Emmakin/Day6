const prevBtnE1 = document.getElementById('prevBtn');
const nextBtnE1 = document.getElementById('nextBtn');

let i = 0;

const picArray = ['./pics/car1.jpeg','./pics/car2.jpeg','./pics/car3.jpeg', './pics/car4.jpeg']

nextBtnE1.addEventListener('click', function nextPic(){
    i++
    if (i > 3){
        i = 0
    }
    document.getElementById('img').src = picArray[i]
})

prevBtnE1.addEventListener('click', function prevPic(){
    i--
    if (i < 0){
        i = 3
    }
    document.getElementById('img').src = picArray[i]
})