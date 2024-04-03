document.getElementById("play").addEventListener("click", function() {
    let blue = document.getElementById("blue");
    let white = document.getElementById("white");
    white.innerHTML = "";
    blue.innerHTML = "";
    
    let center = document.createElement("div");
    center.id = "center";
    center.innerHTML = `
        <div id ="heading">
            <div class="su">
                <h1>Sudoku</h1>
                <p id="difficulty">EASY DIFFICULTY</p>
            </div>
            <div class="lvl">
                <p>LEVEL<p>
                <div>
                    <button class="circle" id="lCrcl">
                        <div class="arrow" id="lArrw"></div>
                    </button>
                    <p id="level" style="text-align:center;font-size: 36px;font-weight: 400;padding: 0 25px;">1</p>
                    <button class="circle" id="rCrcl">
                        <div class="arrow" id="rArrw"></div>
                    </button>
                </div>
            </div>
        </div>
        <div class="lower">
            <div id ="board">
                <div class="sboard s0">
                    <div class="sbox" id="box00"></div>
                    <div class="sbox" id="box01"></div>
                    <div class="sbox" id="box02"></div>
                    <div class="sbox" id="box10"></div>
                    <div class="sbox" id="box11"></div>
                    <div class="sbox" id="box12"></div>
                    <div class="sbox" id="box20"></div>
                    <div class="sbox" id="box21"></div>
                    <div class="sbox" id="box22"></div>
                </div>
                <div class="sboard s1">
                    <div class="sbox" id="box03"></div>
                    <div class="sbox" id="box04"></div>
                    <div class="sbox" id="box05"></div>
                    <div class="sbox" id="box13"></div>
                    <div class="sbox" id="box14"></div>
                    <div class="sbox" id="box15"></div>
                    <div class="sbox" id="box23"></div>
                    <div class="sbox" id="box24"></div>
                    <div class="sbox" id="box25"></div>
                </div>
                <div class="sboard s2">
                    <div class="sbox" id="box06"></div>
                    <div class="sbox" id="box07"></div>
                    <div class="sbox" id="box08"></div>
                    <div class="sbox" id="box16"></div>
                    <div class="sbox" id="box17"></div>
                    <div class="sbox" id="box18"></div>
                    <div class="sbox" id="box26"></div>
                    <div class="sbox" id="box27"></div>
                    <div class="sbox" id="box28"></div>
                </div>
                <div class="sboard s3">
                    <div class="sbox" id="box30"></div>
                    <div class="sbox" id="box31"></div>
                    <div class="sbox" id="box32"></div>
                    <div class="sbox" id="box40"></div>
                    <div class="sbox" id="box41"></div>
                    <div class="sbox" id="box42"></div>
                    <div class="sbox" id="box50"></div>
                    <div class="sbox" id="box51"></div>
                    <div class="sbox" id="box52"></div>
                </div>
                <div class="sboard s4">
                    <div class="sbox" id="box33"></div>
                    <div class="sbox" id="box34"></div>
                    <div class="sbox" id="box35"></div>
                    <div class="sbox" id="box43"></div>
                    <div class="sbox" id="box44"></div>
                    <div class="sbox" id="box45"></div>
                    <div class="sbox" id="box53"></div>
                    <div class="sbox" id="box54"></div>
                    <div class="sbox" id="box55"></div>
                </div>
                <div class="sboard s5">
                    <div class="sbox" id="box36"></div>
                    <div class="sbox" id="box37"></div>
                    <div class="sbox" id="box38"></div>
                    <div class="sbox" id="box46"></div>
                    <div class="sbox" id="box47"></div>
                    <div class="sbox" id="box48"></div>
                    <div class="sbox" id="box56"></div>
                    <div class="sbox" id="box57"></div>
                    <div class="sbox" id="box58"></div>
                </div>
                <div class="sboard s6">
                    <div class="sbox" id="box60"></div>
                    <div class="sbox" id="box61"></div>
                    <div class="sbox" id="box62"></div>
                    <div class="sbox" id="box70"></div>
                    <div class="sbox" id="box71"></div>
                    <div class="sbox" id="box72"></div>
                    <div class="sbox" id="box80"></div>
                    <div class="sbox" id="box81"></div>
                    <div class="sbox" id="box82"></div>
                </div>
                <div class="sboard s7">
                    <div class="sbox" id="box63"></div>
                    <div class="sbox" id="box64"></div>
                    <div class="sbox" id="box65"></div>
                    <div class="sbox" id="box73"></div>
                    <div class="sbox" id="box74"></div>
                    <div class="sbox" id="box75"></div>
                    <div class="sbox" id="box83"></div>
                    <div class="sbox" id="box84"></div>
                    <div class="sbox" id="box85"></div>
                </div>
                <div class="sboard s8">
                    <div class="sbox" id="box66"></div>
                    <div class="sbox" id="box67"></div>
                    <div class="sbox" id="box68"></div>
                    <div class="sbox" id="box76"></div>
                    <div class="sbox" id="box77"></div>
                    <div class="sbox" id="box78"></div>
                    <div class="sbox" id="box86"></div>
                    <div class="sbox" id="box87"></div>
                    <div class="sbox" id="box88"></div>
                </div>
            </div>
            <div id ="button">
                <div>
                    <button id="new" >New</button>
                    <button id="solve" >Solve</button>
                </div>
                <p>Choose the difficulty level as easy, moderate, or hard. Attempt to solve independently before seeking assistance from Sudoku Solver.</p>
            </div>

        </div>
    `;
    
    let bg = document.getElementById("bg");
    bg.appendChild(center);
    let centerHeight = document.getElementById("center").offsetHeight;
    let centerTopMargin = (window.innerHeight - centerHeight) / 2;
    document.getElementById("center").style.marginTop = centerTopMargin + "px";

    document.getElementById("new").addEventListener("click",()=>{
        newBoard();
    });    

    var level = document.getElementById("level").innerText;
    level = Number(level)
    document.getElementById("lCrcl").addEventListener("click",()=>{
        if(level!=1){
            level = level - 1;
            document.getElementById("level").innerText = level;
            difficulty();
            arrwCllr();
            newBoard();
        }
    });
    document.getElementById("rCrcl").addEventListener("click",()=>{
        if(level!=3){
            level = level + 1;
            document.getElementById("level").innerText = level;
            difficulty();
            arrwCllr();
            newBoard();
        }
    });
    function difficulty(){
        let diff = document.getElementById("difficulty")
        if(level==1) diff.innerText = "EASY DIFFICULTY"
        else if(level==2) diff.innerText = "MODERATE DIFFICULTY"
        else diff.innerText = "HARD DIFFICULTY"
    }
    function arrwCllr(){
        let l = document.getElementById("lCrcl")
        let r = document.getElementById("rCrcl")
        if(level==1){
            l.style.border = "2px solid rgba(255, 255, 255, 0.3)";
            r.style.border = "2px solid rgba(255, 255, 255, 1)";
        }
        else if(level==2){
            l.style.border = "2px solid rgba(255, 255, 255, 1)";
            r.style.border = "2px solid rgba(255, 255, 255, 1)";
        }
        else{
            l.style.border = "2px solid rgba(255, 255, 255, 1)";
            r.style.border = "2px solid rgba(255, 255, 255, 0.3)";
        }
    }

    document.getElementById("solve").addEventListener("click",()=>{
        solveBoard(board);
    });
});

