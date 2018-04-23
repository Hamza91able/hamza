function toss() {
    var teamAEl = document.getElementById("team A");
    var teamBEl = document.getElementById("team B");
    var oversEl = document.getElementById("overs");
    var radioEl = document.querySelector('input[type="radio"]:checked').value;
    var choices = ["heads", "tails"];
    var tossInt = Math.floor(Math.random() * 2);
    var tossWinnerEl = document.getElementById("toss-winner");
    var oponentDecissionEl = document.getElementById("oponent-decission");
    var container1El = document.getElementById("container1");
    var container2El = document.getElementById("container2");
    var divDecisionEl = document.getElementById("div-decision");
    var container3El = document.getElementById("container3");

    if (choices[tossInt] === radioEl) {
        tossWinnerEl.innerHTML = teamAEl.value + " Won the Toss";
        container1El.style.display = "none";
        container2El.style.display = "block";
        divDecisionEl.style.display = "block";
    }
    else {
        var opChoice = ["bat", "ball"];
        choiceInt = Math.floor(Math.random() * 2);
        var decision = opChoice[choiceInt];
        container1El.style.display = "none";
        container2El.style.display = "block";
        container3El.style.display = "block";
        tossWinnerEl.innerHTML = teamBEl.value + " Won the Toss";
        oponentDecissionEl.innerHTML = teamBEl.value + " Decided to " + decision + " first";
    }
    return false;
    // userDecision();
}

function userDecision() {
    var teamAEl = document.getElementById("team A");
    var userDecissionEl = document.getElementById("user-decission");
    var radioEl2 = document.querySelector('input[name="r2"]:checked').value;
    userDecissionEl.innerHTML = teamAEl.value + " Decided to " + radioEl2 + " first";
    var container2El = document.getElementById("container2");
    container2El.style.display = "none";
    startGame();
}

var targetEl = document.getElementById("target");
var target;
var wicketEl = document.getElementById("wicket");
var oversDom = document.getElementById("overs-dom");
var inning = 1;

function startGame() {
    var container4El = document.getElementById("container4");
    container4El.style.display = "block";
    container3El = document.getElementById("container3");
    container3El.style.display = "none";
    container2El = document.getElementById("container2");
    container2El.style.display = "none";
    var players = 10;
    var runs = 0;
    var oversEl = document.getElementById("overs");
    var totalOvers = document.getElementById("total-overs");
    var runsInOver = 0;
    var inningsNum = 1;
    var statementEl = document.getElementById("statement");
    var scoreEl = document.getElementById("score");
    var count = 0;
    var over = 1;
    var wickets = 0;
    var container5El = document.getElementById("container5");
    totalOvers.innerHTML = "Total Overs = " + oversEl.value;


    var startRuns = setInterval(function () {
        count++;
        var runsInt = Math.floor(Math.random() * 8);
        while (runsInt === 5) {
            runsInt = Math.floor(Math.random() * 8);
        }

        /* RUNS FROM 0-6 EXCEPT 5 */
        if (runsInt !== 0 && runsInt <= 6) {
            var runOrRuns;
            if (runsInt === 1)
                runOrRuns = "run";
            else
                runOrRuns = "runs";
            console.log("Batsman hits the ball for " + runsInt + " " + runOrRuns);
            statementEl.innerHTML = "Batsman hits the ball for " + runsInt + " " + runOrRuns;
            runsInOver = runsInOver + runsInt;
            scoreEl.innerHTML = "Runs = " + runsInOver;
        }

        /* DOT BALL */
        else if (runsInt === 0) {
            var blockOrMiss = Math.floor(Math.random() * 2);
            if (blockOrMiss === 0) {
                console.log("Batsman blocks the ball " + runsInt + " runs");
                statementEl.innerHTML = "Batsman blocks the ball " + runsInt + " runs";
            }
            else {
                console.log("Batsman completly misses the ball " + runsInt + " runs");
                statementEl.innerHTML = "Batsman completly misses the ball " + runsInt + " runs"
            }
        }

        /* OUT */
        else if (runsInt === 7) {
            var wicketType = Math.floor(Math.random() * 4)
            if (wicketType == 0) {
                console.log("OUT, BOWLED");
                statementEl.innerHTML = "OUT, BOWLED";
            }
            else if (wicketType == 1) {
                console.log("OUT, CAUGHT");
                statementEl.innerHTML = "OUT, CAUGHT";
            }
            else if (wicketType == 2) {
                console.log("OUT, LBW");
                statementEl.innerHTML = "OUT, LBW";
            }
            else if (wicketType == 3) {
                console.log("OUT, RUN OUT");
                statementEl.innerHTML = "OUT, RUN OUT";
            }
            wickets++;
            wicketEl.innerHTML = "Wickets = " + wickets;
        }

        if (count === 6) {
            count = 0;
            console.log("Over Completed");
            oversDom.innerHTML = "Over = " + over;
            over++;
            if (over > oversEl.value) {
                statementEl.innerHTML = "Innings Completed";
                targetEl.innerHTML = "Target = " + runsInOver;
                clearInterval(startRuns);
                container5El.style.display = "block";
                target = runsInOver;
            }
        }
    }, 1200);
}

function start2Game() {
    console.log(target);
    targetEl.innerHTML = "Target = " + target;
    wicketEl.innerHTML = "Wickets = 0";
    oversDom.innerHTML = "Over = 0";
    inning++;
    startGame();
}