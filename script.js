let animBlocks = document.querySelectorAll('.animation-block');


// window.addEventListener('click', () => {
    let counter = 0;
    setInterval(() => {
        if(counter === animBlocks.length){
            clearInterval;
        }else{
            bgAnimationEnder(animBlocks[counter]);
            counter++;
        }

    }, 400);
// })


function bgAnimationEnder(element){
    element.classList.add('active');
    setTimeout(() => {
        element.classList.add('fading')
    }, 50);
    setTimeout(() => {
        element.classList.remove('active');
        element.classList.remove('fading');
    }, 300);
};
