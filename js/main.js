


$(document).ready(function() {

var square1 = $('#one');
var square2 = $('#two');
var square3 = $('#three');
var square4 = $('#four');
var square5 = $('#five');
var square6 = $('#six');
var square7 = $('#seven');
var square8 = $('#eight');
var square9 = $('#nine');

var userTurn = false;

var computerMove = "";

var board = [0, 1, 2, 3, 4, 5, 6, 7, 8];

var user = "X";
var computer = "O";
var count = 0;

$('#restart').on('click', function() {
  restart();
})

$('#x').on('click', function() {
  user = "X";
  computer = "O";
  userTurn = true;
  $('#message').removeClass('begin');
  $('#message').empty();
})

$('#o').on('click', function() {
  user = "O";
  computer = "X";
  userTurn = true;
  $('#message').removeClass('begin')
  $('#message').empty();
})

var checkEmpty = function(choice) {
  if ($(choice).hasClass('empty')) {
    isEmpty = true;
  }
  else {
    isEmpty = false;
  }
}

var updateArray = function(){
  if ($('#one').hasClass('xPlayed')) {
    board[0] = 'X'
  }
  if ($('#two').hasClass('xPlayed')) {
    board[1] = 'X'
  }
  if ($('#three').hasClass('xPlayed')) {
    board[2] = 'X'
  }
  if ($('#four').hasClass('xPlayed')) {
    board[3] = 'X'
  }
  if ($('#five').hasClass('xPlayed')) {
    board[4] = 'X'
  }
  if ($('#six').hasClass('xPlayed')) {
    board[5] = 'X'
  }
  if ($('#seven').hasClass('xPlayed')) {
    board[6] = 'X'
  }
  if ($('#eight').hasClass('xPlayed')) {
    board[7] = 'X'
  }
  if ($('#nine').hasClass('xPlayed')) {
    board[8] = 'X'
  }
  if ($('#one').hasClass('oPlayed')) {
    board[0] = 'O'
  }
  if ($('#two').hasClass('oPlayed')) {
    board[1] = 'O'
  }
  if ($('#three').hasClass('oPlayed')) {
    board[2] = 'O'
  }
  if ($('#four').hasClass('oPlayed')) {
    board[3] = 'O'
  }
  if ($('#five').hasClass('oPlayed')) {
    board[4] = 'O'
  }
  if ($('#six').hasClass('oPlayed')) {
    board[5] = 'O'
  }
  if ($('#seven').hasClass('oPlayed')) {
    board[6] = 'O'
  }
  if ($('#eight').hasClass('oPlayed')) {
    board[7] = 'O'
  }
  if ($('#nine').hasClass('oPlayed')) {
    board[8] = 'O'
  }
}

var updateBoard = function(move) {
  if (move === 0) {
    position = $('#one');
  }
  else if (move === 1) {
    position = $('#two');
  }
  else if (move === 2) {
    position = $('#three');
  }
  else if (move === 3) {
    position = $('#four');
  }
  else if (move === 4) {
    position = $('#five');
  }
  else if (move === 5) {
    position = $('#six');
  }
  else if (move === 6) {
    position = $('#seven');
  }
  else if (move === 7) {
    position = $('#eight');
  }
  else if (move === 8) {
    position = $('#nine');
  }
  if (computer === "O") {
    position.removeClass('empty');
    position.addClass('played');
    position.addClass('oPlayed');
    position.html('O');
  }
  else if (computer === "X") {
    position.removeClass('empty');
    position.addClass('played');
    position.addClass('xPlayed');
    position.html('X');
  }

}


$('.box').on('click', function() {
  checkEmpty(this);
  if (isEmpty === true && userTurn === true){
    userTurn = false;
    $(this).removeClass('empty');
    $(this).addClass('played');
    if (user === "X") {
      $(this).addClass('xPlayed');
      $(this).html('X');
    }
    else if (user === "O") {
      $(this).addClass('oPlayed');
      $(this).html('O');
    }

    updateArray();
    console.log(board);
    var bestSpot = minimax(board, computer);
    computerMove = bestSpot.index;
    updateBoard(computerMove);
    userTurn = true;
    updateArray();
    endGame(board);
    console.log(board);
  }
})

var endGame = function(currentBoard) {
  if (($('#one').hasClass('xPlayed') && $('#two').hasClass('xPlayed') && $('#three').hasClass('xPlayed'))||($('#four').hasClass('xPlayed') && $('#five').hasClass('xPlayed') && $('#six').hasClass('xPlayed'))||($('#seven').hasClass('xPlayed') && $('#eight').hasClass('xPlayed') && $('#nine').hasClass('xPlayed'))||($('#one').hasClass('xPlayed') && $('#four').hasClass('xPlayed') && $('#seven').hasClass('xPlayed'))||($('#two').hasClass('xPlayed') && $('#five').hasClass('xPlayed') && $('#eight').hasClass('xPlayed'))||($('#three').hasClass('xPlayed') && $('#six').hasClass('xPlayed') && $('#nine').hasClass('xPlayed'))||($('#one').hasClass('xPlayed') && $('#five').hasClass('xPlayed') && $('#nine').hasClass('xPlayed'))||($('#three').hasClass('xPlayed') && $('#five').hasClass('xPlayed') && $('#seven').hasClass('xPlayed'))) {
    if (user === "X") {
      $('#message').addClass('finished');
      $('#message').html("YOU WIN!!!!!");
    }
    else {
      $('#message').addClass('finished');
      $('#message').html("Computer wins...");
    }
    userTurn = false;
  }

  else if (($('#one').hasClass('oPlayed') && $('#two').hasClass('oPlayed') && $('#three').hasClass('oPlayed'))||($('#four').hasClass('oPlayed') && $('#five').hasClass('oPlayed') && $('#six').hasClass('oPlayed'))||($('#seven').hasClass('oPlayed') && $('#eight').hasClass('oPlayed') && $('#nine').hasClass('oPlayed'))||($('#one').hasClass('oPlayed') && $('#four').hasClass('oPlayed') && $('#seven').hasClass('oPlayed'))||($('#two').hasClass('oPlayed') && $('#five').hasClass('oPlayed') && $('#eight').hasClass('oPlayed'))||($('#three').hasClass('oPlayed') && $('#six').hasClass('oPlayed') && $('#nine').hasClass('oPlayed'))||($('#one').hasClass('oPlayed') && $('#five').hasClass('oPlayed') && $('#nine').hasClass('oPlayed'))||($('#three').hasClass('oPlayed') && $('#five').hasClass('oPlayed') && $('#seven').hasClass('oPlayed'))) {
    if (user === "X") {
      $('#message').addClass('finished');
      $('#message').html("Computer wins...");
    }
    else {
      $('#message').addClass('finished');
      $('#message').html("YOU WIN!!!!!");
    }
    userTurn = false;
  }
  else if ($('#one').hasClass('played') && $('#two').hasClass('played') && $('#three').hasClass('played') && $('#four').hasClass('played') && $('#five').hasClass('played') && $('#six').hasClass('played') && $('#seven').hasClass('played') && $('#eight').hasClass('played') && $('#nine').hasClass('played')) {
    $('#message').addClass('finished');
    $('#message').html("TIE game");
    userTurn = false;
  }
}


var checkWinner = function(currentBoard, player) {
  if ((currentBoard[0] === player && currentBoard[1] === player && currentBoard[2] === player)||(currentBoard[3] === player && currentBoard[4] === player && currentBoard[5] === player)||(currentBoard[6] === player && currentBoard[7] === player && currentBoard[8] === player)||(currentBoard[0] === player && currentBoard[3] === player && currentBoard[6] === player)||(currentBoard[1] === player && currentBoard[4] === player && currentBoard[7] === player)||(currentBoard[2] === player && currentBoard[5] === player && currentBoard[8] === player)||(currentBoard[0] === player && currentBoard[4] === player && currentBoard[8] === player)||(currentBoard[2] === player && currentBoard[4] === player && currentBoard[6] === player)) {
    return true;
  }
  else {
    return false;
  }
}

var openSpots = function(currentBoard) {
  var openings = [];
  for (var i = 0; i < currentBoard.length; i++) {
    if (currentBoard[i] !== user && currentBoard[i] !== computer) {
      openings.push(currentBoard[i]);
    }
  }
  return openings;
}

var minimax = function(board, player) {
  count++;

  var possibleMoves = openSpots(board);

  // assigns a value to each possible terminal state: winning, losing and tieing
  if (checkWinner(board, user)) {
    return {score:-10};
  }
  else if (checkWinner(board, computer)) {
    return {score:10};
  }
  else if (possibleMoves.length === 0) {
    return {score:0};
  }

  var moveValues = [];

  for (var i = 0; i < possibleMoves.length; i++) {
    var move = {};
    move.index = board[possibleMoves[i]];

    // puts the players symbol on empty spot on the board to map out where the game would go
    board[possibleMoves[i]] = player;

  // minimax will determine where user would go after the computer's move
    if (player === computer) {
      var possibleResult = minimax(board, user);
      // move.score now holds the numerical value of the move
      move.score = possibleResult.score;
    }
  // minimax will determine where computer would go after the user's move
    else {
      var possibleResult = minimax(board, computer);
      // move.score now holds the numerical value of the move
      move.score = possibleResult.score;
    }

  // players symbol removed, to reflect actual board
    board[possibleMoves[i]] = move.index;

    moveValues.push(move);

  }

  // we will now use this array of possible move position and scores to determine
  // what the best move is
    var bestPosition = "";
    // trying to get the highest move value from the array
    if(player === computer) {
      var highestScore = -10000;
      for (var i = 0; i < moveValues.length; i++) {
        if (moveValues[i].score > highestScore) {
          highestScore = moveValues[i].score;
          bestPosition = i;
        }
      }
    }
    // trying to get the lowest move value from the array
    else {
      var highestScore = 10000;
      for (var i = 0; i < moveValues.length; i++) {
        if (moveValues[i].score < highestScore) {
          highestScore = moveValues[i].score;
          bestPosition = i;
        }
      }
    }
    return moveValues[bestPosition];
  }


  var restart = function() {
    board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    $('#message').removeClass('finished');
    $('#message').empty();
    $('#one').empty();
    $('#two').empty();
    $('#three').empty();
    $('#four').empty();
    $('#five').empty();
    $('#six').empty();
    $('#seven').empty();
    $('#eight').empty();
    $('#nine').empty();
    if ($('#one').hasClass('played')) {
      $('#one').removeClass('played xPlayed oPlayed');
      $('#one').addClass('empty');
    }
    if ($('#two').hasClass('played')) {
      $('#two').removeClass('played xPlayed oPlayed');
      $('#two').addClass('empty');
    }
    if ($('#three').hasClass('played')) {
      $('#three').removeClass('played xPlayed oPlayed');
      $('#three').addClass('empty');
    }
    if ($('#four').hasClass('played')) {
      $('#four').removeClass('played xPlayed oPlayed');
      $('#four').addClass('empty');
    }
    if ($('#five').hasClass('played')) {
      $('#five').removeClass('played xPlayed oPlayed');
      $('#five').addClass('empty');
    }
    if ($('#six').hasClass('played')) {
      $('#six').removeClass('played xPlayed oPlayed');
      $('#six').addClass('empty');
    }
    if ($('#seven').hasClass('played')) {
      $('#seven').removeClass('played xPlayed oPlayed');
      $('#seven').addClass('empty');
    }
    if ($('#eight').hasClass('played')) {
      $('#eight').removeClass('played xPlayed oPlayed');
      $('#eight').addClass('empty');
    }
    if ($('#nine').hasClass('played')) {
      $('#nine').removeClass('played xPlayed oPlayed');
      $('#nine').addClass('empty');
    }
    userTurn = true;
  }




})
