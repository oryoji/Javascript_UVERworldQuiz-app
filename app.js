const quiz = [
{
  question: '問題1：UVERworldの最新シングルは？',
  answers: [
    'ハイ！問題作',
    'ROB THE FRONTEA',
    '一滴の影響',
    'AS ONE'
  ],
  correct: 'AS ONE'
},
{
  question: '問題2：UVERworldのファーストシングルは？',
  answers: [
    'THE ONE',
    'D-tecnoLife',
    'CHANCE',
    'SHAMROCK'
  ],
  correct: 'D-tecnoLife'
},
{
  question: '問題3：UVERworldの2019東京ドーム男祭りで1曲目で披露された曲は？(開幕SEは含みません)',
  answers: [
    'Home 微熱39°C',
    "Don't Think.Feel",
    '一石を投じる Tokyo midnight sun',
    'AS ONE'
  ],
  correct: "Don't Think.Feel"
}
];

let quizIndex = 0;
const quizLength = quiz.length;
let score = 0;


const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
};
setupQuiz();


const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解');
    score++;
  }else{
    window.alert('不正解');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    setupQuiz();
  }else{
    window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！')
  }
};

//クリックしたら正誤判定
let handlerIndex = 0;
while(handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}