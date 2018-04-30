//adding politician
var createPolitician = function (name, partyColor) {

  var politician = {};
  politician.name = name;
  politician.electionResults = null;
  politician.totalVotes = 0;
  politician.partyColor = partyColor;

  politician.announcePolitic = function() {
    console.log(this.name + " is running for the U.S. Election!");
  };
  politician.announcePolitic();

  politician.tallyUpTotalVotes = function () {
    this.totalVotes = 0;
    for (var i = 0; i < this.electionResults.length; i++)
    {
      this.totalVotes += this.electionResults[i];
    }
  };
  return politician;
};

//listing total results
var william = createPolitician("William Wasitall", [245, 141, 136]);
var garry = createPolitician("Garry Gotitall", [132, 17, 11]);
console.log("William Wasitall's color is " + william.partyColor);
console.log("Garry Gotitall's color is " + garry.partyColor);

william.electionResults = [5,1,7,2,33,6,4,2,1,14,8,3,1,11,11,0,5,3,3,3,7,4,8,9,3,7,2,2,4,2,8,3,15,15,2,12,0,4,13,1,3,2,8,21,3,2,11,1,3,7,2];
garry.electionResults = [4,2,4,4,22,3,3,1,2,15,8,1,3,9,0,6,1,5,5,1,3,7,8,1,3,3,1,3,2,2,6,2,14,0,1,6,7,3,7,3,6,1,3,17,3,1,2,11,2,3,1];

//updated results
william.electionResults[9] = 1;
garry.electionResults[9] = 28;

william.electionResults[4] = 17;
garry.electionResults[4] = 38;

william.electionResults[43] = 11;
garry.electionResults[43] = 27;

console.log(william.electionResults);
console.log(garry.electionResults);


var setStateResults = function (state) {
  theStates[state].winner = null;
  if (william.electionResults[state] > garry.electionResults[state]) {
    theStates[state].winner = william;
  } else if (william.electionResults[state] < garry.electionResults[state]) {
   theStates[state].winner = garry;
  }

  var stateWinner = theStates[state].winner;
  if (stateWinner !== null) {
    theStates[state].rgbColor = stateWinner.partyColor;
  } else {
    theStates[state].rgbColor = [11, 32, 57];
  }

  var stateInfoTable = document.getElementById("stateResults");
  var bottomHeader = stateInfoTable.children[0];
  var bottomBody = stateInfoTable.children[1];
  var stateName = bottomHeader.children[0].children[0];
  var abbrev = bottomHeader.children[0].children[1];
  var candidate1Name = bottomBody.children[0].children[0];
  var candidate1Results = bottomBody.children[0].children[1];
  var candidate2Name = bottomBody.children[1].children[0];
  var candidate2Results = bottomBody.children[1].children[1];
  var winnersName = bottomBody.children[2].children[1];

  stateName.innerText = theStates[state].nameFull;
  abbrev.innerText = "(" + theStates[state].nameAbbrev + ")";

  candidate1Name.innerText = "William Wasitall";
  candidate2Name.innerText = "Garry Gotitall";

  candidate1Results.innerText = william.electionResults[state];
  candidate2Results.innerText = garry.electionResults[state];

  if (theStates[state].winner === null) {
    winnersName.innerText = "DRAW";
  } else {
    winnersName.innerText = theStates[state].winner.name;
  }
};

william.tallyUpTotalVotes();
garry.tallyUpTotalVotes();
console.log(william.totalVotes);
console.log(garry.totalVotes);

var winner;

if (william.totalVotes > garry.totalVotes) {
  winner = william.name;
} else if (william.totalVotes < garry.totalVotes) {
  winner = garry.name;
} else {
  winner = "DRAW";
}

console.log("And the winner is..." + winner + "!!!");

console.log("William's color is: " + william.partyColor);
console.log("Garry's color is: " + garry.partyColor);

var countryInfoTable = document.getElementById("countryResults");
var row = countryInfoTable.children[0].children[0];

row.children[0].innerText = william.name;
row.children[1].innerText = william.totalVotes;
row.children[2].innerText = garry.name;
row.children[3].innerText = garry.totalVotes;
row.children[5].innerText = winner;

console.log(this.winner + " just won the election!");
