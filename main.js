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
const btn = document.querySelector('#show');
const con = document.querySelector('.container')
me.addEventListener('click', () => {
    about.classList.toggle('hidden');
 // Добавляем или удаляем класс 'move' при каждом клике
});
btn.addEventListener('click', () => {
     // Добавляем или удаляем класс 'move' при каждом клике на кнопку
    con.classList.toggle('container')
});

// Находим элемент input для загрузки файла
document.addEventListener('DOMContentLoaded', function () {
    var audioPlayer = document.getElementById('audioPlayer');
    var uploadInput = document.querySelector('input.upload');

    uploadInput.addEventListener('change', function (event) {
        var file = event.target.files[0];
        var reader = new FileReader();

        reader.onload = function (e) {
            audioPlayer.src = e.target.result;
            audioPlayer.play();
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    });
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
document.addEventListener('DOMContentLoaded', function() {
    var genreTitles = document.querySelectorAll('#genre-container h4');

    genreTitles.forEach(function(title) {
        title.addEventListener('click', function() {
            var audioElement = this.nextElementSibling;
            audioElement.classList.toggle('hidden');
        });
    });
});
    // Получаем ссылку на модальное окно и кнопку для его открытия
    var modal = document.getElementById("loginModal");
    var btnsss = document.getElementById("loginBtn");
    // Получаем элемент для закрытия модального окна
    var span = document.getElementsByClassName("close")[0];
    // Открываем модальное окно при клике на кнопку
    btnsss.onclick = function () {
      modal.style.display = "block";
    }
    // Закрываем модальное окно при клике на крестик
    span.onclick = function () {
      modal.style.display = "none";
    }
    // Закрываем модальное окно при клике за его пределами
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    