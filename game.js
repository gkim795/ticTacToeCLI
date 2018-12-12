const args = process.argv.slice(2)
let row = args[0][0]
let column = args[0][1] 
let player = true
let win = false
let lose = false
let plays = 0
let board = {
  1: [[],[],[]],
  2: [[],[],[]],
  3: [[],[],[]],
}

let ticTacJoe = (row,column) => {
  if(checkLocation(row,column)){
    //true response means there was an empty spot in that location
    if(player) {
      // this means that this is player 1
      let current = board[row]
      current[column-1] = 'X'
    } else {
      let current = board[row]
      current[column-1] = 'O'
    }
    plays +=1
    player = !player
  }
  console.log(board)
}

let checkLocation = (row, column) => {
  let rowResult = board[row]
  let current = rowResult[column-1]
  if (current.length === 0) {
    return true
  } else {
    return false
  }
}

let checkForWinners = () => {
  
}

let checkAcross = () => {
  for (let rows in board) {
    let row = board[rows][0]

    if(row[0]!== [] && row[1]!==[] && row[2]!==[]) {
      if(row[0] == row[1] && row[1]==row[2]){
        win = true
        console.log(`Winner! : ${row[0]}`)
        return;
      }
    }
  }
}

let checkDown = () => {

  for (let i = 1; i < 4; i++){
   for(let j = 0; j <3; j++) {
     let row = board[i]
     let piece = row[j]
   }
  }
}

ticTacJoe(row, column)

checkDown()
