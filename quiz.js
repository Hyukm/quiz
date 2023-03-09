const question = 'ゲーム史上、最も売れたゲーム機は次のうちどれ？';
const answers =  [
    'スーパーファミコン',
    'プレイステーション2',
    'ニンテンドースイッチ',
    'ニンテンドーDS'
];
const correct = 'ニンテンドーDS';
const $button = document.getElementsByTagName('button');

//クイズの問題
const setupQuiz = function (){
    document.getElementById('js-question').textContent = question;
    let buttonIndex = 0;
    let buttonLength = $button.length;
    while (buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = answers[buttonIndex];
        // $button[0].textContent = answers[0];
        // $button[1].textContent = answers[1];
        // $button[2].textContent = answers[2];
        // $button[3].textContent = answers[3];
        buttonIndex++;
    }
    
}

setupQuiz();//関数を呼ばないと中身が表示されないので

const clickHandler = function(e) {
    if (correct === e.target.textContent) {
        window.alert('正解！');
    } else {
        window.alert('不正解。。');
    };
};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
const buttonLength = $button.length;
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', function(e) {
        clickHandler(e);
    });
    handlerIndex++;
}