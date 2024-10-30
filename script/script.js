document.addEventListener('DOMContentLoaded', (event) => {
  const video = document.getElementById('background-video');
  // Проверка на воспроизведение видео
  const playVideo = () => {
      video.play().catch((error) => {
          // Обработка ошибки воспроизведения
          console.error('Ошибка воспроизведения видео:', error);
          // Попробуйте воспроизвести видео снова после некоторой задержки
          setTimeout(() => {
              video.play();
          }, 1000);
      });
  };
  
  // Попытка воспроизведения видео
  playVideo();

  // Добавьте обработчик событий нажатия на экран для повышения вероятности воспроизведения
  window.addEventListener('touchstart', playVideo, { once: true });
});

// анимация скрола

function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  
  for (let elm of elements) {
    observer.observe(elm);
  }
  

  // анимация слайда
  
//   function modalClose (modal) {
//     modal.classList.add('disable');
//     modal.close();
// }

// window.addEventListener('DOMContentLoaded', () => {
//     const modal = document.querySelector('dialog');
//     const slider = modal.querySelector('.slider');
//     modal.showModal();

//     slider.addEventListener('change', evt => {
//         if (evt.target.value !== '100') {
//             evt.target.value = 0;
//             return;
//         }

//         modalClose(modal);
//     });

// });

// закрытия диалогового окна если клацать мимо
dialogElement.addEventListener("click", closeOnBackDropClick)

function closeOnBackDropClick({ currentTarget, target }) {
  const dialogElement = currentTarget
  const isClickedOnBackDrop = target === dialogElement
  if (isClickedOnBackDrop) {
    dialogElement.close()
  }
}

// 