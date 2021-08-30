let animBlocks = document.querySelectorAll('.animation-block');


    let counter = 0;
    setInterval(() => {
        if(counter === animBlocks.length){
            clearInterval;
        }else{
            bgAnimator(animBlocks[counter]);
            counter++;
        }

    }, 400);


function bgAnimator(element){
    element.classList.add('active');
    setTimeout(() => {
        element.classList.add('fading')
    }, 50);
    setTimeout(() => {
        element.classList.remove('active');
        element.classList.remove('fading');
    }, 300);
};
