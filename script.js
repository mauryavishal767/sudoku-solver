document.getElementById("play").addEventListener("click", function() {
    var blue = document.getElementById("blue");
    var white = document.getElementById("white");
    white.innerHTML = "";
    blue.innerHTML = "";
    
    var center = document.createElement("div");
    center.id = "center";
    center.innerHTML = `
        <div id ="heading">
            <h1>Sudoku</h1>
            <p>DIFFICULTY</p>
        </div>
        <div id ="board">
            <div class="sboard s0">
                <div class="sbox" id="box00">1</div>
                <div class="sbox" id="box01">2</div>
                <div class="sbox" id="box02">3</div>
                <div class="sbox" id="box10">4</div>
                <div class="sbox" id="box11">5</div>
                <div class="sbox" id="box12">6</div>
                <div class="sbox" id="box20">7</div>
                <div class="sbox" id="box21">8</div>
                <div class="sbox" id="box22">9</div>
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
            <button id="new" >New</button>
            <button id="solve" >Solve</button>
        </div>
    `;
    
    var bg = document.getElementById("bg");
    bg.appendChild(center);

    
});