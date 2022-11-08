const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    })
})
function removeActiveClasses(){
    panels.forEach(panel =>{
        panel.classList.remove('active')
    })
}

// wave js

const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})

// search js

const search = document.querySelector('.search');
const btn = document.querySelector('.bton');
const input = document.querySelector('.input');

btn.addEventListener('click', () =>{
    search.classList.toggle('active');
    input.focus();
})

// scroll js

const boxes = document.querySelectorAll('.slide')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
   const triggerBottom = window.innerHeight / 5 * 4

   boxes.forEach(slide => {
      const boxTop = slide.getBoundingClientRect().top

      if(boxTop < triggerBottom) {
         slide.classList.add('show')
      } else {
         slide.classList.remove('show')
      }
   })
}
