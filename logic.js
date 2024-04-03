let board = [ 
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
];

// let arr = [ 
//     [5,3,0,6,7,8,9,0,2],
//     [6,7,2,1,9,5,3,4,8],
//     [0,9,8,3,4,2,5,6,7],
//     [8,5,9,7,6,1,4,2,3],
//     [4,2,6,8,5,3,7,9,1],
//     [7,1,3,9,0,4,8,5,6],
//     [9,6,0,5,3,7,2,8,4],
//     [2,8,7,4,1,9,6,3,5],
//     [3,4,5,2,8,6,1,7,9],
// ];

function newBoard(){
    let level = document.getElementById("level").innerText;
    let apiLink = "https://sugoku.onrender.com/board?difficulty=";
    if(level==1) apiLink = apiLink + "easy";
    else if(level==2) apiLink = apiLink + "medium";
    else if(level==3) apiLink = apiLink + "hard";
    
    let xhrRequest = new XMLHttpRequest()
    xhrRequest.onload = function () {
        let response = JSON.parse(xhrRequest.response);
        console.log(response);
        board = response.board;
        // board = arr;
        FillBoard(board);
    }
    xhrRequest.open('get', apiLink)
    xhrRequest.send()
}
    
function FillBoard(board){
    for(let i = 0; i<9 ; i++){
        for(let j = 0; j<9 ; j++){
            let id = "box" + `${i}` + `${j}`
            if(board[i][j]!==0)
            document.getElementById(`${id}`).innerText = board[i][j];
            else
            document.getElementById(`${id}`).innerText = " ";
        }
    }
}

function solveBoard(board){
    if(solve(board)) FillBoard(board)
    else console.log("not solved")
}

function solve(board){
    for(let i = 0; i<9; i++){
        for(let j = 0; j<9; j++){
            if(board[i][j] == 0){
                for(let c = 1; c<=9; c++){
                    if(valid(board,i,j,c)){
                        board[i][j] = c;
                        if(solve(board)==true) return true;
                        else board[i][j] = 0;
                    }
                }
                console.log("false")
                return false;
            }
        }
    }
return true;
}

function valid(board,i,j,c){
//     // console.log("solve")
//     for(let x = 0; x<9; x++){
//         if(board[i][x]==c) return false;
//         if(board[x][j]==c) return false;
//         let row = Math.ceil((3*(i/3))+(x/3))
//         let col = Math.ceil((3*(j/3))+(x%3))
//         // console.log("r" + row + " c" + col)
//         if(board[row][col]==c) return false;
//     }
// return true;
// Check row and column
    for (let x = 0; x < 9; x++) {
        if (board[i][x] == c) return false;
        if (board[x][j] == c) return false;
    }

    // Check subgrid
    let startRow = Math.floor(i / 3) * 3;
    let startCol = Math.floor(j / 3) * 3;
    for (let row = startRow; row < startRow + 3; row++) {
        for (let col = startCol; col < startCol + 3; col++) {
            if (board[row][col] == c) return false;
        }
    }

return true;
}