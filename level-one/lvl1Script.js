//Two variables to check if the the locks have been solved
var unlocked1;
var unlocked2;

//setInterval used to constantly call functions
setInterval(pass1, 200);
setInterval(pass2, 200);

//oneASetUp is used to setup the first page in level one by disabling the button
function oneASetUp()
{
    var bttnSetUp = document.getElementById("btn1");
    bttnSetUp.disabled = true;
}

/*pass1 checks to see if the input box has the right code put into it, if it does it sets unlocked1 to true. Then id unlocked is equal to 
true it enables the button*/
function pass1() {
    var code1 = document.getElementById("lock1").value;
    var bttn1 = document.getElementById("btn1");

    if (code1 == "1gef9") {
        unlocked1 = true;
    }
    
    if(unlocked1 == true)
    {
        bttn1.disabled = false;
    }
}

//When nextlvl1 is called by the button it changes the page to the next part
function nextlvl() {
    window.location.href = 'one-b.html';
}

/*pass2 checks to see if the input box on level 2 has the corrent code typed in, if it does it will set unlocked2 to true. Then if unlocked2
is equal to true it will make the button not hidden, but if unlocked2 is false then it will hide the button*/
function pass2() {
    var code2 = document.getElementById("lock2").value;
    var bttn2 = document.getElementById("btn2");

    if (code2 == "992103745912210374") {
        unlocked2 = true;
    }
    
    if(unlocked2 == true)
    {
        bttn2.hidden = false;
    }
    else
    {
        bttn2.hidden = true;
    }
}

function lvlOneFinal() {
    window.location.href = '../index.html';
}
