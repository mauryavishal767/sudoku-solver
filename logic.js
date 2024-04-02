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
            document.getElementById(`${id}`).innerText = "";
        }
    }
}

function solveBoard(board){
    let solved = solve(board);
    FillBoard(board)
}

let zero = 0;
function solve(board){
    for(let i = 0; i<9; i++)
        for(let j = 0; j<9; j++)
            if(board[i][j] == 0)
                for(let c = 1; c<=9; c++)
                    if(valid(board,i,j,c)){
                        board[i][j] = c;
                        if(solve(board)==true) return true;
                        else board[i][j] = 0;
                    }
            return false;
return true;
}

function valid(board,i,j,c){
    console.log("solve")
    for(let x = 0; x<9; x++){
        if(board[i][x]==c) return false;
        if(board[x][j]==c) return false;
        if(board[3*(i/3)+x/3][3*(j/3)+x%3]==c) return false;
    }
return true;
}