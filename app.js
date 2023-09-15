const list = document.querySelectorAll('.list-item');
const listItems = document.querySelectorAll('.list-item');
let indicator = document.querySelector('.indicator');

function setIndicatorPosition() {
  const activeItem = document.querySelector('.list-item.active');
  
  if (activeItem) {
    const index = Array.from(listItems).indexOf(activeItem);
    const widthValue = activeItem.offsetWidth;
    const position = index * widthValue;
    console.log(position);
    indicator.style.transform = `translateX(${position}px)`;
  }
}

function setIndicatorPosition2() {
    const activeItem = document.querySelector('.list-item.active');
    
    if (activeItem) {
      const index = Array.from(listItems).indexOf(activeItem);
      const heightValue = activeItem.offsetHeight;
      const position = index * heightValue;
      console.log(position);
      indicator.style.transform = `translatey(${position}px)`;
    }
  }

function handleWindowSize() {
  if (window.innerWidth < 1024) {
    setIndicatorPosition();

    listItems.forEach(item => {
      item.addEventListener('click', () => {
        listItems.forEach(item => item.classList.remove('active'));
        
        item.classList.add('active');
        
        setIndicatorPosition();
      });
    });
  } else{
    setIndicatorPosition();

    listItems.forEach(item => {
      item.addEventListener('click', () => {
        listItems.forEach(item => item.classList.remove('active'));
        
        item.classList.add('active');
        
        setIndicatorPosition2();
      });
    });
  }
}

window.addEventListener('resize', handleWindowSize);
handleWindowSize();






// listItems.forEach(item => {
//   item.addEventListener('click', () => {
//     listItems.forEach(item => item.classList.remove('active'));
    
//     item.classList.add('active');
//   });
// });


// function activelink() {
//     list.forEach(function(item) {
//       item.classList.remove('active');
//     });
//     this.classList.add('active');
// }

// list.forEach(e => {
//     e.addEventListener('click', activelink)
// });

