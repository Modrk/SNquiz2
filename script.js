const quizData = [
    {
        id: 0,
        src: "https://i.postimg.cc/h4wV9cZP/1.jpg",
        correct: "no"
    },
    {
        id: 1,
        src: "https://i.postimg.cc/sxBStNxr/2.jpg",
        correct: "yes"
    },
    {
        id: 2,
        src: "https://i.postimg.cc/52WvRpMh/3.jpg",
        correct: "yes"
    },
    {
        id: 3,
        src: "https://i.postimg.cc/nhK7b7FC/4.jpg",
        correct: "yes"
    },
    {
        id: 4,
        src: "https://i.postimg.cc/NMjRxMwL/5.jpg",
        correct: "no"
    },
    {
        id: 5,
        src: "https://i.postimg.cc/6qDRwf4G/6.jpg",
        correct: "yes"
    },
    {
        id: 6,
        src: "https://i.postimg.cc/wB6N6vMF/7.jpg",
        correct: "no"
    },
    {
        id: 7,
        src: "https://i.postimg.cc/TwNgN6R0/8.jpg",
        correct: "yes"
    },
    {
        id: 8,
        src: "https://i.postimg.cc/FKDL14Jv/9.jpg",
        correct: "no"
    },
    {
        id: 9,
        src: "https://i.postimg.cc/0QjJwBpw/10.jpg",
        correct: "yes"
    },
    {
        id: 10,
        src: "https://i.postimg.cc/JnFHc5qd/11.jpg",
        correct: "no"
    },
    {
        id: 11,
        src: "https://i.postimg.cc/6qG2H4b6/12.jpg",
        correct: "no"
    },
    {
        id: 12,
        src: "https://i.postimg.cc/LhKqG4Gt/13.jpg",
        correct: "no"
    },
    {
        id: 13,
        src: "https://i.postimg.cc/BZdMJT0g/14.jpg",
        correct: "no"
    },
    {
        id: 14,
        src: "https://i.postimg.cc/ncBTrXVt/15.jpg",
        correct: "no"
    },
    {
        id: 15,
        src: "https://i.postimg.cc/T3x0DTh5/16.jpg",
        correct: "no"
    },
    {
        id: 16,
        src: "https://i.postimg.cc/mZcmxd0k/17.jpg",
        correct: "no"
    },
    {
        id: 17,
        src: "https://i.postimg.cc/SxGrLHzT/18.jpg",
        correct: "yes"
    },
    {
        id: 18,
        src: "https://i.postimg.cc/jjdhMvHs/19.jpg",
        correct: "no"
    },
    {
        id: 19,
        src: "https://i.postimg.cc/PryWM4Tp/20.jpg",
        correct: "yes"
    },
    {
        id: 20,
        src: "https://i.postimg.cc/445Kfd7x/21.jpg",
        correct: "yes"
    },
    {
        id: 21,
        src: "https://i.postimg.cc/WpX3RHCD/22.jpg",
        correct: "yes"
    },
    {
        id: 22,
        src: "https://i.postimg.cc/kgkG1RZf/23.jpg",
        correct: "yes"
    },
    {
        id: 23,
        src: "https://i.postimg.cc/kXYBSpyr/24.jpg",
        correct: "yes"
    },
    {
        id: 24,
        src: "https://i.postimg.cc/zvXGbCbX/25.jpg",
        correct: "no"
    },
    {
        id: 25,
        src: "https://i.postimg.cc/65p8yXnL/26.jpg",
        correct: "no"
    },
    {
        id: 26,
        src: "https://i.postimg.cc/7ZCbnnB5/27.jpg",
        correct: "no"
    },
    {
        id: 27,
        src: "https://i.postimg.cc/MTwTx2zB/28.jpg",
        correct: "yes"
    },
    {
        id: 28,
        src: "https://i.postimg.cc/D0jyqSLQ/29.jpg",
        correct: "no"
    },
    {
        id: 29,
        src: "https://i.postimg.cc/26x5Sc5K/30.jpg",
        correct: "no"
    },
    {
        id: 30,
        src: "https://i.postimg.cc/VNn63LP1/31.jpg",
        correct: "no"
    },
    {
        id: 31,
        src: "https://i.postimg.cc/x8yKhGmZ/32.jpg",
        correct: "yes"
    },
    {
        id: 32,
        src: "https://i.postimg.cc/VsjBJwhF/33.jpg",
        correct: "yes"
    },
    {
        id: 33,
        src: "https://i.postimg.cc/BQ45Dy9f/34.jpg",
        correct: "yes"
    },
    {
        id: 34,
        src: "https://i.postimg.cc/D0KrxpSs/35.jpg",
        correct: "yes"
    }
];

const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
};

shuffleArray(quizData);

const nextQbtn = document.getElementById("btn");
const imgElem = document.getElementById("img");
const quizForm = document.getElementById("quiz-form");
const result = document.getElementById("result");
const qCounter = document.getElementById("question-counter");

let currentImage = 0;
let img = new Image();
img.src = quizData[currentImage].src;
img.classList.add("img-fluid");
img.style.maxHeight = "500px";
imgElem.appendChild(img);
let score = 0;
const wrongAnswers = [];
const cache = document.createElement("div");
cache.classList.add("invisible");

function preloadImage(url) {
    let nimg = new Image();
    nimg.src = url;
    nimg.classList.add("invisible");
    cache.appendChild(nimg);
}

preloadImage(quizData[currentImage+1].src);


function showResults() {
    quizForm.classList.add("d-none", "invisible");
    result.innerHTML += `<p>Du svarede rigtigt på <strong>${Math.round(100*score/quizData.length)}%</strong> af spørgsmålene (${score}/${quizData.length}).</p>`;
    if (wrongAnswers.length) {
        result.innerHTML += "<p>Tjek disse billeder igen (<span class=\"text-success fw-bold\">grøn</span> = SN, <span class=\"text-danger fw-bold\">rød</span> = ikke SN):</p>";
        const filtrQuizData = quizData.filter((obj) => wrongAnswers.includes(obj.id));
        filtrQuizData.forEach((question) => {
            let i = img.cloneNode();
            i.src = question.src;
            question.correct === "yes" ? i.classList.add("border-green") : i.classList.add("border-red");
            result.appendChild(i);
        });
    }
    result.classList.remove("invisible");
}



function nextImage() {
    let answer = document.querySelector('input[name="answer"]:checked')?.value;
    if (answer) {
        quizData[currentImage].correct === answer ? score++ : wrongAnswers.push(quizData[currentImage].id);
        if (currentImage < quizData.length-1) {
            img.src = quizData[currentImage+1].src;

            if (currentImage < quizData.length - 2) {
                preloadImage(quizData[currentImage+2].src);
            }
            currentImage++;
        } else {
            showResults();
        }
        document.querySelector('input[name="answer"]:checked').checked = false;
        qCounter.innerText = currentImage+1;
    }
}

nextQbtn.addEventListener("click", nextImage);