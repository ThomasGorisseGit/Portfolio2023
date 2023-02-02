
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

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=>{
    observer.observe(el);
});