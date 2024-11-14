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

// анимация
const heart = document.getElementById('heart');

        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY; // Получаем значение прокрутки по вертикали
            const threshold = 100; // Пороговое значение для добавления класса

            if (scrollY > threshold) {
                heart.classList.add('show'); // Добавляем класс, если прокрутка больше порогового значения
            } else {
                heart.classList.remove('show'); // Убираем класс, если прокрутка меньше порогового значения
            }
        });