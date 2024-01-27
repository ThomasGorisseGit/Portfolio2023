
/**
 * Observer
 */
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(element => {
        if(element.isIntersecting){
            element.target.classList.add('show');
        }else{
            element.target.classList.remove('show');

        }
    });

});
const bgAnimation = new IntersectionObserver((entries)=>{

    entries.forEach(element => {
        if(element.isIntersecting){
            element.target.classList.add('bg-animation');
        }else{
            element.target.classList.remove('bg-animation');

        }
    });

});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=>{
    observer.observe(el);
});

const background = document.querySelectorAll('.config');
background.forEach((el)=>{
    bgAnimation.observe(el);
});