let board = [ [], [], [], [], [], [], [], [], [] ];
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

function solveBoard(){
    
}