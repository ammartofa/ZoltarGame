//Ammar Tofafarosh - 2021 - created for AP Computer Science Principles Exam
setUp();
onEvent("StartBtn", "click", function(event) {
    console.log("StartBtn clicked!");
    setScreen("ZoltarScreen");
});
onEvent("InsertBtn", "click", function(event) {
    console.log("InsertBtn clicked!");
    setScreen("CardScreen");
});
onEvent("FortuneScreen", "click", function(event) {
    fortuneClicker();
});
onEvent("zoltarHelp", "click", function(event) {
    hideElement("zoltarHelp");
});
onEvent("Card1", "click", function(event) {
    setScreen("FortuneScreen");
    showFortune();
});
onEvent("Card2", "click", function(event) {
    setScreen("FortuneScreen");
    showFortune();
});
onEvent("Card3", "click", function(event) {
    setScreen("FortuneScreen");
    showFortune();
});

function setUp() {
    setText("FortuneArea", "");
    setText("totalScore", "");
    setText("livesLeft", "");
}
var fortune1 = "A thrilling time is in your near future. Soon you will have an increase in luck and confidence. Your lucky numbers are 17, 6, 8, 19, 2, 11 and 7.";
var fortune2 = "Plan for many pleasures ahead. In the near future, you will finally be able to accomplish a goal that has been holding you back. Your lucky numbers are 1, 3, 19, 2, 9, 14 and 16.";
var fortune3 = "Something you lost will turn up soon. You will also give the creator of this program a 5 on the AP exam. Your lucky numbers are 2, 3, 17, 20, 14, 13 and 8.";
var fortune4 = "You will find someone new in your life. They will aid you in your dilemma that you are enduring. Your lucky numbers are 4, 5, 2, 7, 12, 19 and 11.";
var fortune5 = "In the near future you will find a new treasure in life. It will aid you in your current dilemma ocurring in your life. Your lucky numbers are 4, 6, 2, 1, 15, 20, and 9.";
var fortunes = ["A thrilling time is in your near future. Soon you will have an increase in luck and confidence. Your lucky numbers are 17, 6, 8, 19, 2, 11 and 7.", "Plan for many pleasures ahead. In the near future, you will finally be able to accomplish a goal that has been holding you back. Your lucky numbers are 1, 3, 19, 2, 9, 14 and 16.", "Something you lost will turn up soon. You will also give the creator of this program a 5 on the AP exam. Your lucky numbers are 2, 3, 17, 20, 14, 13 and 8.", "You will find someone new in your life. They will aid you in your dilemma that you are currently enduring. Your lucky numbers are 4, 5, 2, 7, 12, 19 and 11.", "In the near future you will find a new treasure in life. It will aid you in your current dilemma ocurring in your life. Your lucky numbers are 4, 6, 2, 1, 15, 20, and 9."];
function showFortune() {
    setScreen("FortuneScreen");
    setText("FortuneArea", fortunes[randomNumber(0,4)]);
}

function fortuneClicker()
{
    setScreen("CrystalFindScreen");
    setText("zoltarHelp", "Zoltar needs your help in finding his prized Crystal Ball. Will you help him? (Click here to continue)");
    showElement("zoltarHelp");
    var score = 0;
    var lives = 3;
    setText("totalScore", "0");
    setText("livesLeft", "3");
    function crystalMove(){
        setPosition("crystalBall", randomNumber(50,280), randomNumber(50, 350));
        score = score + 1;
        setText("totalScore", score);
        if(score == 10){
            setScreen("winScreen");
        }
    }
    function backGround() {
        lives = lives - 1;
        setText("livesLeft", lives);
        if(lives == 0){
            setScreen("LoseScreen");
        }
    }
    onEvent("background", "click", function(event) {
        backGround();
    });
    onEvent("crystalBall", "click", function(event) {
        crystalMove();
    });
}


onEvent("playAgain2", "click", function(event) {
    console.log("playAgain2 clicked!");
    setScreen("MainScreen");
    setUp();
});
onEvent("playAgain", "click", function(event) {
    console.log("playAgain clicked!");
    setScreen("MainScreen");
    setUp();
});
//card images - https://www.charactersunlimited.com/wp-content/uploads/2017/03/Zoltar-card.jpg
//sad face - https://cdn.shopify.com/s/files/1/1061/1924/products/Sad_Face_Emoji_grande.png?v=1571606037
//zoltar speakes image - https://zoltar.org/wp-content/uploads/2018/02/ZOLTAR-LOGO.png
//zoltar booth image - https://www.charactersunlimited.com/wp-content/uploads/2019/05/Zoltar_front_red_rgb.jpg
//crystal ball image - https://studio.code.org/v3/assets/Ff33Q3aTr8M8eGXVCt8REVCZU7Lv1vh4Skm0gqHL6ww/crystal-ball.png?t=1580478042000
//trophy gif - https://studio.code.org/v3/assets/Ff33Q3aTr8M8eGXVCt8REVCZU7Lv1vh4Skm0gqHL6ww/source.gif?t=1580737032000

