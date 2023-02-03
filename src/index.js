import './styles/reset.css'
import './styles/style.scss'
import './scripts/sidebar.js'



const addBtn = document.querySelectorAll('.course__add');

addBtn.forEach((elem) => {
    elem.addEventListener('click', ()=> {
        elem.parentElement.classList.toggle('special');
        elem.classList.toggle('special__add');
    })
})