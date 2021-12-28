function gameObject() {
  return {
    home: {
      teamName: 'Brooklyn Nets',
      colors: ['Black', 'White'],
      players: {
        'Alan Anderson': {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1
        },
        'Reggie Evans': {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7
        },
        'Brook Lopez': {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15
        },
        'Mason Plumlee': {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5
        },
        'Jason Terry': {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5
        }
      },
    },
    away: {
      teamName: 'Charlotte Hornets',
      colors: ['Turquoise', 'Purple'],
      players: {
        'Jeff Adrien': {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2
        },
        'Bismak Biyombo': {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10
        },
        'DeSagna Diop': {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 15
        },
        'Ben Gordon': {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0
        },
        'Brendan Haywood': {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12
        }
      }
    }
  }
}

function allPlayers() {
  const object = gameObject()
  return {...object.home.players, ...object.away.players}
}

function homeTeam() {
  return gameObject().home
}

function awayTeam() {
  return gameObject().away
}

//========numPointsScored===================//
function numPointsScored(nameParam) {
  return allPlayers()[nameParam].points
}

// function numPointsScored(name) {
//   gameObj = gameObject();
//   for (const whichTeam in gameObj) {
//     const team = gameObj[whichTeam].players
//     for (const player in team) {
//       if (player === name) {
//         return team[player].points
//       }
//     }
//   }
// }

// function numPointsScored(name) {
//   gameObj = gameObject();
//   allPlayers = Object.assign({}, gameObj.home.players, gameObj.away.players)
//   return allPlayers[name].points
// }

//========numPointsScored===================//

function shoeSize(nameParam) {
  return allPlayers()[nameParam].shoe
}

//==================Team Colors=================//

// function teamColors(team) {
//   const object = gameObject()
//   if (object.home.teamName === team) {
//     return object.home.colors
//   } else if (object.away.teamName === team) {
//     return object.away.colors
//   } else {
//     return "Wrong team"
//   }
// }

function teamColors(teamParam) {
  const gameObj = gameObject();
  for (let team in gameObj) {
    let teamObj = gameObj[team]
    if (teamObj.teamName === teamParam) {
      return teamObj.colors
    }
  }
}

//==================Team Colors=================//

function teamNames () {
  return [gameObject().home.teamName, gameObject().away.teamName]
}

//====================Player Numbers================//
/*
- Build a function, `playerNumbers`, that takes in an argument of a team name
  and returns an array of the jersey number's for that team.
*/

function playerNumbers(teamParam) {
  const jerseyArray = [];
  const teamPlayers = homeTeam().teamName === teamParam ?
    homeTeam().players : 
    awayTeam().players;

  for (player in teamPlayers) {
    jerseyArray.push(teamPlayers[player].number)
  }
  return jerseyArray
}

//======================Player Stats===================//
const playerStats = (playerParam) => {
  return allPlayers()[playerParam];
}

//======================Big Shoe Rebounds===================//
function bigShoeRebounds() {
  //- First, find the player with the largest shoe size
  let largestShoe = 0;
  let largestPlayer = '';
  const playerObj = allPlayers() 
  const shoeArray = []
  const playerArray = []
  //create two arrays, player name and show size
  for (let player in playerObj) {
    playerArray.push(player)
    shoeArray.push(playerObj[player].shoe)
  }
  //get largest shoe size from shoeArray
  largestShoe = Math.max(...shoeArray)

  //find player name with largest shoe size based on index in shoeArray
  largestPlayer = playerArray[shoeArray.indexOf(largestShoe)]
  return playerObj[largestPlayer].rebounds
}

//=========================Most Points Scored==================//
function mostPointsScored () {
  let playerObj = allPlayers()
  let mostPoints = 0
  let returnPlayer = ''
  for (player in playerObj) {
    if (playerObj[player].points > mostPoints) {
      mostPoints = playerObj[player].points
      returnPlayer = player
    }
  }
  return returnPlayer
}

//=====================Winning Team===========================//
function winningTeam() {
  const homeTeamPlayers = homeTeam().players
  const awayTeamPlayers = awayTeam().players
  let homeTotalScore = 0;
  let awayTotalScore = 0;
  for (let player in homeTeamPlayers) {
    homeTotalScore += homeTeamPlayers[player].points
  }
  for (let player in awayTeamPlayers) {
    awayTotalScore += awayTeamPlayers[player].points
  }
  return homeTotalScore > awayTotalScore ? homeTotalScore : awayTotalScore
}


//=====================Longest Name===========================//
function playerWithLongestName() {
  playerNameArray = Object.keys(allPlayers())
  const lengthArray = playerNameArray.map(player => player.length)
  const longestNameIndex = lengthArray.indexOf(Math.max(...lengthArray))
  return playerNameArray[longestNameIndex]
}

//===========================doesLongNameStealATon============//
function doesLongNameStealATon() {
  const allPlayerObj = allPlayers();
  const longNamePlayer = playerWithLongestName()
  const stealArray =  []
  for (let player in allPlayerObj) {
    stealArray.push(allPlayerObj[player].steals)
  }
  const mostSteals = Math.max(...stealArray);
  return allPlayerObj[longNamePlayer].steals === mostSteals 
}


console.log(doesLongNameStealATon())