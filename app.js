const list = document.querySelectorAll('#list');
const listItems = document.querySelectorAll('.list-item');
let indicator = document.querySelector('.indicator');
const secciones = document.querySelectorAll('.seccion');

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
      const b = lenght * heightValue;

      console.log(lenght);
      if (window.innerWidth < 1024){
        indicator.style.transform = `translateX(${a}px)`;
      }else{
        indicator.style.transform = `translateY(${b}px)`;
      }
      
      listItems.forEach(item => {
        item.classList.remove('active');
        
        listItems[lenght].classList.add('active');
    });

      console.log(listItems[lenght]);
    }
  });
}, {
  threshold: 0.2
});

secciones.forEach(seccion => {
  observer.observe(seccion);
});

function setIndicatorPosition() {
  const activeItem = document.querySelector('.list-item.active');
  
  if (activeItem) {
    const index = Array.from(listItems).indexOf(activeItem);
    const widthValue = activeItem.offsetWidth;
    const position = index * widthValue;
    indicator.style.transform = `translateX(${position}px)`;
  }
}

function setIndicatorPosition2() {
    const activeItem = document.querySelector('.list-item.active');
    
    if (activeItem) {
      const index = Array.from(listItems).indexOf(activeItem);
      const heightValue = activeItem.offsetHeight;
      const position = index * heightValue;
      indicator.style.transform = `translatey(${position}px)`;
    }
  }

function handleWindowSize() {
  if (window.innerWidth < 1024) {

    listItems.forEach(item => {
      item.addEventListener('click', () => {
        listItems.forEach(item => item.classList.remove('active'));
        
        item.classList.add('active');
      });
    });
  } else{

    listItems.forEach(item => {
      item.addEventListener('click', () => {
        listItems.forEach(item => item.classList.remove('active'));
        
        item.classList.add('active');
      });
    });
  }
}

window.addEventListener('resize', handleWindowSize);
handleWindowSize();