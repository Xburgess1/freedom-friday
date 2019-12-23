// JavaScript source code
var unlocked1;

var lightsOn = [false, false, false, false, false, false, false];

setInterval(lock1, 200);

function setupFinal() {
    var bttn = document.getElementById("twoFinal");
    var solutText = document.getElementById("solutionText");
    solutText.hidden = true;
    bttn.hidden = true;
}

function lock1() {
    var lock = document.getElementById("lvlTwoLock").value;
    var btn = document.getElementById("twoFinal");

    if (lock == "22") {
        unlocked1 = true;
    }
    
    if (unlocked1 == true) {

        btn.hidden = false;
    }
}

function lvlTwoEnd() {
    window.location.href = '../index.html';
}

function setActive(btn)
{
    var solutText = document.getElementById("solutionText");

    if (btn.id == "inactive")
    {
        btn.id = "active";
    }
    else
    {
        btn.id = "inactive";
    }

    lightsOn = [false, false, false, false, false, false, false];

    if (document.getElementsByClassName("lightButtons")[0].id == "active")
    {
        lightsOn[0] = !lightsOn[0];
        lightsOn[3] = !lightsOn[3];
        lightsOn[6] = !lightsOn[6];
    }
    
    if (document.getElementsByClassName("lightButtons")[1].id == "active")
    {
        lightsOn[0] = !lightsOn[0];
        lightsOn[5] = !lightsOn[5];
    }

    if (document.getElementsByClassName("lightButtons")[2].id == "active")
    {
        lightsOn[4] = !lightsOn[4];
        lightsOn[2] = !lightsOn[2];
    }

    if (document.getElementsByClassName("lightButtons")[3].id == "active")
    {
        lightsOn[1] = !lightsOn[1];
        lightsOn[2] = !lightsOn[2];
        lightsOn[4] = !lightsOn[4];
        
    }

    if (document.getElementsByClassName("lightButtons")[4].id == "active")
    {
        lightsOn[6] = !lightsOn[6];
        lightsOn[4] = !lightsOn[4];
        lightsOn[3] = !lightsOn[3];
    }
    
    if (document.getElementsByClassName("lightButtons")[5].id == "active")
    {
        lightsOn[0] = !lightsOn[0];
    }


    for (var i = 0; i < document.getElementsByClassName("lightList").length; i++)
    {
        if (lightsOn[i] == true) {
            document.getElementsByClassName("lightList")[i].style.backgroundColor = "green";
        }
        else {
            document.getElementsByClassName("lightList")[i].style.backgroundColor = "black";
        }
    }

    if (lightsOn.includes(false))
    {
        solutText.hidden = true;
    }
    else
    {
        solutText.hidden = false;
    }
}

