let animBlocks = document.querySelectorAll('.animation-block');
let animText = document.querySelectorAll('.animation-text');
let bg = document.querySelector('.bg-animations');

let counter = 0;
setInterval(() => {
    if(counter === animBlocks.length){
        clearInterval;
    }else{
        bgAnimator(animBlocks[counter]);
        bgJumper(animBlocks[counter]);
        if(counter >= 5 && counter < animText.length + 5){
            textAnimator(animText[counter - 5]);
        };
        counter++;
        setTimeout(() => {
            bg.classList.add('closed');
        }, 3000);
    };
}, 200);

function bgJumper(element){
    setTimeout(() => {
        element.classList.add('jump');
    }, 100);
    setTimeout(() => {
        element.classList.add('drop');
    }, 200);
};

function bgAnimator(element){
    element.classList.add('active');
    setTimeout(() => {
        element.classList.add('fading')
    }, 50);
};

function textAnimator(element){
    element.style.color = chroma.random();
};
