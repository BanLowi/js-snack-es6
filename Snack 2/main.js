const soccerTeams = [

    {
        name: "Juventus",
        score: 0,
        fail: 0
    },

    {
        name: "Milan",
        score: 0,
        fail: 0
    },

    {
        name: "Inter",
        score: 0,
        fail: 0
    },

    {
        name: "Napoli",
        score: 0,
        fail: 0
    },

    {
        name: "Roma",
        score: 0,
        fail: 0
    },

    {
        name: "Bologna",
        score: 0,
        fail: 0
    }

];

const soccerTeamsNoScore = [];
console.log(soccerTeamsNoScore);
console.log(soccerTeams);

for(let i = 0; i < soccerTeams.length; i++) {
    soccerTeams[i].score = getRndInteger(1, 10);
    soccerTeams[i].fail = getRndInteger(1, 10);
    soccerTeams[i].name

    team = {};

    team["name"] = soccerTeams[i].name
    team["fail"] = soccerTeams[i].fail
    soccerTeamsNoScore.push(team)
}


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}