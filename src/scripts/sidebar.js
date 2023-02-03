
const sidebarElems = document.querySelectorAll('.sidebar__subtitle');

sidebarElems.forEach((elem) => {
    elem.addEventListener('click', (event) => {
        event.target.classList.toggle('active_subtitle');
        
        let ul = event.target.nextElementSibling;
        ul.classList.toggle('active_elem');

        if (ul.style.maxHeight){
            ul.style.maxHeight = null;
          } else {
            ul.style.maxHeight = ul.scrollHeight + "px";
          }
        
        let items = document.querySelectorAll('.sidebar__item');
        items.forEach((elem) => {
            elem.addEventListener('click', ()=> {
                items.forEach((elem) => elem.classList.remove('active_item'))
                elem.classList.add('active_item');
            })
        })
    })
})