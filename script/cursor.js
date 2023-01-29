(() => { 

    var cur = document.querySelector('.cursor');
    var a = document.querySelectorAll('a');
    document.addEventListener('mousemove', e => {
        cur.setAttribute('style', `top:  ${e.pageY -10}px; left: ${e.pageX-10}px;`);
    });
    a.forEach(item=>{
        item.addEventListener('mouseover',e=>{
            cur.classList.add('hover');
        });
        item.addEventListener('mouseleave',e=>{
            cur.classList.remove('hover');
        });
    });
 })();
 
 
 