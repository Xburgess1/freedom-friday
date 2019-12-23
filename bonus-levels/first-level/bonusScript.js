/*The four lines below are variables, the animPlayed is used to know when the boxFall animation has been played, the ceasarSolve is 
used to know when a certain code has been solved, and the min and sec are used for the timer.*/
var animPlayed = false;
var min = 7;
var sec = 0;


/*all of the setIntervals are used to constantly call certain functions every 20 milliseconds, exept for timer, that is called once every
second so the timer goes down once a second*/
setInterval(checkFlipCode, 20);
setInterval(solveCipher, 20);
setInterval(rearrangeUnder, 20);
setInterval(timer, 1000);

//bonusSetUp is used to setup the bonus level by setting certain parts of the level to be hidden and setting the timer to be equal to 7 mins
function bonusSetUp()
{
    var hidText = document.getElementById("hiddenText");
    var boxBack = document.getElementById("underline");
    var ceasar = document.getElementById("lock1");
    var rearrange = document.getElementById("lock2");
    var midText = document.getElementsByClassName("midText")[0];
    var final = document.getElementById("finalBtn");
    var finalText = document.getElementsByClassName("impossibleText")[0];
    var animText = document.getElementById("hidText");
    document.getElementById("time");
    
    time.innerHTML = min + "mins : " + sec + "secs";
    hidText.hidden = true;
    boxBack.hidden = true;
    ceasar.hidden = true;
    midText.hidden = true;
    rearrange.hidden = true;
    final.hidden = true;
    finalText.hidden = true;
    animText.hidden = true;
}

//This function is called when the "FREE" button has been pressed, this makes some text and an input box appear on the screen
function undoHidden()
{
    var ceasar = document.getElementById("lock1");
    var hidText = document.getElementById("hiddenText");
    hidText.hidden = false;
    ceasar.hidden = false;
}

/*checkFlipCode checks to see is the input box behind the flip box has the proper code of "123" and see if the boxFall animation has already
been played. If the proper code is typed in and the animation has not been played it sets the box2 class name to "box3-animation" which
has all of the code to play the animation. Then is sets the animPlayed variable to true and makes some hidden code at the bottom of the 
page no longer hidden.*/
function checkFlipCode()
{
    var code = document.getElementById("underline").value;
    var c = document.getElementsByClassName("box3")[0];
    var animText = document.getElementById("hidText");

    if(code == "123" && animPlayed == false)
    {
        c.className += "-animation";
        animPlayed = true;
        animText.hidden = false;

    }
}


/*solveCipher has two roles, first is to check whether the ??? has been cracked and typed into the lock1 box, and it also checks
to see if the secret code on the page has been typed into the box, if the secret code has been typed then a new input box will appear*/
function solveCipher()
{
    var ceasar = document.getElementById("lock1").value;
    var boxBack = document.getElementById("underline");
    var midText = document.getElementsByClassName("midText")[0];
    var rearrange = document.getElementById("lock2");

    if(ceasar == "1234")
    {
        boxBack.hidden = false;
    }

    if(ceasar == "?????")
    {
        midText.hidden = false;
        rearrange.hidden = false;
    }
}


/*The rearrangeUnder checks for the word "123" which is found when rearranging the underlined letters throughout the page, if the 
correct code is put in then the final text and button will appear*/
function rearrangeUnder()
{
    var rearrange = document.getElementById("lock2").value;
    var final = document.getElementById("finalBtn");
    var finalText = document.getElementsByClassName("impossibleText")[0];

    if(rearrange == "123")
    {
        final.hidden = false;
        final.disabled = true;
        finalText.hidden = false;
    }
}

/*The timer function is used to make the timer at the top of the page. First it gets the <p> that stores the time and sets it using
the .innerHTML property to the amount of minutes left and the amount of seconds left. The underneath that it checks if the sec variable
is not 0. If the sec is not at 0 then it will subtract one from the sec variable. Then if sec is equal to 0 and the min variable is not 0
then it will subtract 1 from the min variable and set the sec variable to 59. Lastly if the min variable is 0 and the sec variable is 0
it will send the user back to the home page.*/
function timer()
{
    document.getElementById("time");
    time.innerHTML = min + "mins : " + sec + "secs";

    if(sec != "0")
    {
        sec--;
    }
    else if(sec == "0" && min != "0")
    {
        min--;
        sec = 59;
    }
    else
    {
        window.location.href = '../../index.html';
    }
}

