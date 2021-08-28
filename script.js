let animBlocks = document.querySelectorAll('.animation-block');



animBlocks.forEach(el => {
    el.addEventListener('mouseover', bgAnimationEnder);
})

function bgAnimationEnder(){
    this.classList.add('active');
    setTimeout(() => {
        this.classList.add('fading')
    }, 100);
    setTimeout(() => {
        this.classList.remove('active');
        this.classList.remove('fading');
    }, 200);
};
// function indexer(elClassName, addedElClassName, triggerClassName, addedTriggerClassName, startNumber){
//     let counter = startNumber;
//     let  obj = document.querySelectorAll(`.${elClassName}`);
//     obj.forEach(el => {
//         el.classList.add(`${addedElClassName}-${counter}`);
//         counter++;
//     });
//     counter = startNumber;
//     let trig = document.querySelectorAll(`.${triggerClassName}`);
//     trig.forEach(el => {
//         el.classList.add(`${addedTriggerClassName}-${counter}`);
//         counter++;
//     })
    
// };

// indexer("animation-block", "animated", "bg-animations", "bg-animations", 1);

