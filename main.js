function toggleContainer() {
    var container = document.getElementById("genre-container");
    if (container.style.display === "none") {
        container.style.display = "block";
    } else {
        container.style.display = "none";
    }
}
const searchInputs = document.querySelectorAll('input')
const logos = document.getElementsByClassName('search')

searchInputs.forEach(search => {
    search.onmouseover = () => {
        Array.from(logos).forEach(logo => {
            logo.classList.add('hidden')
        })
    }
})
searchInputs.forEach(search => {
    search.onmouseleave = () => {
        Array.from(logos).forEach(logo => {
            logo.classList.remove('hidden')
        })
    }
})

const me = document.querySelector('.me'); // Используем querySelector для выбора первого элемента с классом 'me'
const about = document.querySelector('.about'); // Используем querySelector для выбора первого элемента с классом 'about'
const btn = document.querySelector('button');
const con = document.querySelector('.container')
me.addEventListener('click', () => {
    about.classList.toggle('hidden');
    btn.classList.toggle('move'); // Добавляем или удаляем класс 'move' при каждом клике
});
btn.addEventListener('click', () => {
    btn.classList.toggle('move'); // Добавляем или удаляем класс 'move' при каждом клике на кнопку
    con.classList.toggle('container')
});

// Находим элемент input для загрузки файла
const uploadInput = document.querySelector('.upload input[type="file"]');
const audioPlayer = document.getElementById('audioPlayer');

uploadInput.addEventListener('change', function() {
    const file = this.files[0];
    const objectUrl = URL.createObjectURL(file); // Создаем URL для загруженного файла
    audioPlayer.src = objectUrl; // Задаем src аудиоплееру
    audioPlayer.play(); // Автоматически воспроизводим песню после загрузки
});
function playAudio() {
    audioPlayer.play();
}

function pauseAudio() {
    audioPlayer.pause();
}

function stopAudio() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0; // Возвращаем воспроизведение на начало
}

const btnss = document.querySelectorAll(".icon");
   for (const btn of btnss) {
       btn.addEventListener("click", () => {
           btn.parentElement.classList.toggle("open");
       });
   }