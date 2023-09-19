const list = document.querySelectorAll('#list');
const listItems = document.querySelectorAll('.list-item');
let indicator = document.querySelector('.indicator');
const secciones = document.querySelectorAll('.seccion');

// codigo del observer y el indicador

const observer = new IntersectionObserver((entradas, observer) => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      const targetElement = entrada.target;
      const parents = Array.from(targetElement.querySelectorAll("*")).filter(element => element !== targetElement);
      const position = parents.reduce((acc, parent) => {
        const index = Array.from(parent.children).indexOf(acc.element);
        return {
          element: parent,
          index: index >= 0 ? index : acc.index
        };
      }, { element: targetElement, index: Array.from(targetElement.parentNode.children).indexOf(targetElement) });



      const activeItem = document.querySelector('.list-item.active');
      const widthValue = activeItem.offsetWidth;
      const heightValue = activeItem.offsetHeight;
      const lenght = Number(position.index);
      const a = lenght * widthValue;
      const b = (lenght * heightValue);
      if (window.innerWidth < 1024) {
        indicator.style.transform = `translateX(${a}px)`;
      } else {
        indicator.style.transform = `translateY(${b}px)`;
      }

      listItems.forEach(item => {
        item.classList.remove('active');

        listItems[lenght].classList.add('active');
      });
    }
  });
}, {
  threshold: 0.2
});

secciones.forEach(seccion => {
  observer.observe(seccion);
});


document.getElementById('next').onclick = function(){
  let lists = document.querySelectorAll('.item');
  document.getElementById('slide').children[0].appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
  let lists = document.querySelectorAll('.item');
  document.getElementById('slide').children[0].prepend(lists[lists.length - 1]);
}
