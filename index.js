

import { TType, TTypeLeftUpRight, TTypeRightDownLeft, TTypeUpDownRight, TTypeUpLeftDown } from './TType.js';
//import {Buttons} from './Buttons';
import { Board } from './Board.js';
import { Pipeline, PipelineUpDown, PipelineRightLeft } from './pipeline.js';
import { Vtype, VtypeDownRight, VtypeLeftUp, VtypeUpRight, VtypeDownLeft } from './Vtype.js';
import { Player } from './Player.js';
import { Graph } from './Graph.js';
let PlayerTurn = 0;
let board_ = new Board(9);
let g = new Graph(50);
let StartingButton = document.getElementById('StartingButton');
let InstructionButton = document.getElementById('Instructions');
let Topfirst = document.getElementById('Topfirst')
let Topsecond = document.getElementById('Topsecond')
let Topthird = document.getElementById('Topthird')
let Buttomfirst = document.getElementById('Buttonfirst')
let Buttomsecond = document.getElementById('Buttonsecond')
let Buttomthird = document.getElementById('Buttonthird')
let Leftfirst = document.getElementById('Leftfirst')
let Leftsecond = document.getElementById('Leftsecond')
let Leftthird = document.getElementById('Leftthird')
let value;
let value1;
InstructionButton.addEventListener("click", e => {
    let element = document.getElementById("instructionParagraph");
    if (element.style.visibility === "visible") {
        element.style.visibility = "hidden"
    }
    else {
        element.style.visibility = "visible"
    }

})

StartingButton.addEventListener("click", e => {

    let numofplayers = document.getElementById("NumOfPlayers");
    value = numofplayers.options[numofplayers.selectedIndex].value;

    let numoftreasures = document.getElementById('NumOfTreasures');
    value1 = numoftreasures.options[numoftreasures.selectedIndex].value;

    let div = document.getElementById('StartingDiv');
    div.innerHTML = '';
    document.getElementById('reference').style.visibility = "visible";
    let makevisible = document.getElementById('TopPannel');
    makevisible.style.visibility = "visible";
    makevisible = document.getElementById('MiddleLeftArrows');
    makevisible.style.visibility = "visible";
    makevisible = document.getElementById('MiddleRightArrow');
    makevisible.style.visibility = "visible";
    makevisible = document.getElementById('ButtomPannel');
    makevisible.style.visibility = "visible";
    let am = document.getElementById("bali");
    am.setAttribute("style", "background-color: #00052F;");
    board_.initialize(value, value1);
    let curr = document.getElementById('CurrPlayer');
    curr.src = board_.Players[PlayerTurn].url;

    let currNamePlayer = document.getElementById('NameOfPlayer');
    currNamePlayer.innerHTML = board_.Players[0].name;





});
Topfirst.addEventListener("click", e => {

    if (board_.ExtraPiecex_X === 0 && board_.ExtraPiece_y === 2) {
        for (let i = board_.size - 1; i > 0; i--) {

            board_.board[i][2] = Object.assign({}, board_.board[i - 1][2]);
        }
        board_.board[0][2] = undefined;
        board_.ExtraPiecex_X = 8;
        board_.ExtraPiece_y = 2;

        board_.Players.forEach(e => {
            if (e.CurrentPosition[1] == 2 && e.CurrentPosition[0] != 7) {
                e.CurrentPosition[0]++;
            }
            else if (e.CurrentPosition[1] == 2 && e.CurrentPosition[0] == 7) {
                e.CurrentPosition[0] = 1;
            }
        })

        board_.Treasures.forEach(e => {
            if (e.CurrentPosition[1] == 2 && e.CurrentPosition[0] != 7) {
                e.CurrentPosition[0]++;
            }
            else if (e.CurrentPosition[1] == 2 && e.CurrentPosition[0] == 7) {
                e.CurrentPosition[0] = 1;
            }
        })


        board_.DeleteTable();
        board_.AppendToTable();


        g.initialize(board_, PlayerTurn, board_.Players, value, board_.Treasures, value1);

        if (PlayerTurn == value - 1) {
            PlayerTurn = 0;
        }
        else {
            PlayerTurn++;
        }


    }
}
)
Topsecond.addEventListener("click", e => {
    if (board_.ExtraPiecex_X === 0 && board_.ExtraPiece_y === 4) {
        for (let i = board_.size - 1; i > 0; i--) {

            board_.board[i][4] = Object.assign({}, board_.board[i - 1][4]);
        }
        board_.board[0][4] = undefined;
        board_.ExtraPiecex_X = 8;
        board_.ExtraPiece_y = 4;
        board_.Players.forEach(e => {
            if (e.CurrentPosition[1] == 4 && e.CurrentPosition[0] != 7) {
                e.CurrentPosition[0]++;
            }
            else if (e.CurrentPosition[1] == 4 && e.CurrentPosition[0] == 7) {
                e.CurrentPosition[0] = 1;
            }
        })
        board_.Treasures.forEach(e => {
            if (e.CurrentPosition[1] == 4 && e.CurrentPosition[0] != 7) {
                e.CurrentPosition[0]++;
            }
            else if (e.CurrentPosition[1] == 4 && e.CurrentPosition[0] == 7) {
                e.CurrentPosition[0] = 1;
            }
        })
        board_.DeleteTable();
        board_.AppendToTable();

        g.initialize(board_, PlayerTurn, board_.Players, value, board_.Treasures, value1);
        if (PlayerTurn == value - 1) {
            PlayerTurn = 0;
        }
        else {
            PlayerTurn++;

        }

    }
})
Topthird.addEventListener("click", e => {
    if (board_.ExtraPiecex_X === 0 && board_.ExtraPiece_y === 6) {
        for (let i = board_.size - 1; i > 0; i--) {

            board_.board[i][6] = Object.assign({}, board_.board[i - 1][6]);
        }
        board_.board[0][6] = undefined;
        board_.ExtraPiecex_X = 8;
        board_.ExtraPiece_y = 6;
        board_.Players.forEach(e => {
            if (e.CurrentPosition[1] == 6 && e.CurrentPosition[0] != 7) {
                e.CurrentPosition[0]++;
            }
            else if (e.CurrentPosition[1] == 6 && e.CurrentPosition[0] == 7) {
                e.CurrentPosition[0] = 1;
            }
        })
        board_.Treasures.forEach(e => {
            if (e.CurrentPosition[1] == 6 && e.CurrentPosition[0] != 7) {
                e.CurrentPosition[0]++;
            }
            else if (e.CurrentPosition[1] == 6 && e.CurrentPosition[0] == 7) {
                e.CurrentPosition[0] = 1;
            }
        })


        board_.DeleteTable();
        board_.AppendToTable();

        console.log(PlayerTurn + " Player turn");
        g.initialize(board_, PlayerTurn, board_.Players, value, board_.Treasures, value1);
        if (PlayerTurn == value - 1) {
            PlayerTurn = 0;
        }
        else {
            PlayerTurn++;
        }

    }
})

Buttomfirst.addEventListener("click", e => {
    if (board_.ExtraPiecex_X === 8 && board_.ExtraPiece_y === 2) {
        for (let i = 0; i < board_.size - 1; i++) {

            board_.board[i][2] = Object.assign({}, board_.board[i + 1][2]);
        }
        board_.board[8][2] = undefined;
        board_.ExtraPiecex_X = 0;
        board_.ExtraPiece_y = 2;
        board_.Players.forEach(e => {
            if (e.CurrentPosition[1] == 2 && e.CurrentPosition[0] != 1) {
                e.CurrentPosition[0]--;
            }
            else if (e.CurrentPosition[1] == 2 && e.CurrentPosition[0] == 1) {
                e.CurrentPosition[0] = 7;
            }
        })
        board_.Treasures.forEach(e => {
            if (e.CurrentPosition[1] == 2 && e.CurrentPosition[0] != 1) {
                e.CurrentPosition[0]--;
            }
            else if (e.CurrentPosition[1] == 2 && e.CurrentPosition[0] == 1) {
                e.CurrentPosition[0] = 7;
            }
        })

        board_.DeleteTable();
        board_.AppendToTable();

        g.initialize(board_, PlayerTurn, board_.Players, value, board_.Treasures, value1);
        if (PlayerTurn == value - 1) {

            PlayerTurn = 0;
        }
        else {
            PlayerTurn++;
        }

    }
})
Buttomsecond.addEventListener("click", e => {
    if (board_.ExtraPiecex_X === 8 && board_.ExtraPiece_y === 4) {
        for (let i = 0; i < board_.size - 1; i++) {

            board_.board[i][4] = Object.assign({}, board_.board[i + 1][4]);
        }
        board_.board[8][4] = undefined;
        board_.ExtraPiecex_X = 0;
        board_.ExtraPiece_y = 4;
        board_.Players.forEach(e => {
            if (e.CurrentPosition[1] == 4 && e.CurrentPosition[0] != 1) {
                e.CurrentPosition[0]--;
            }
            else if (e.CurrentPosition[1] == 4 && e.CurrentPosition[0] == 1) {
                e.CurrentPosition[0] = 7;
            }
        })
        board_.Treasures.forEach(e => {
            if (e.CurrentPosition[1] == 4 && e.CurrentPosition[0] != 1) {
                e.CurrentPosition[0]--;
            }
            else if (e.CurrentPosition[1] == 4 && e.CurrentPosition[0] == 1) {
                e.CurrentPosition[0] = 7;
            }
        })


        board_.DeleteTable();
        board_.AppendToTable();
        g.initialize(board_, PlayerTurn, board_.Players, value, board_.Treasures, value1);
        if (PlayerTurn == value - 1) {
            PlayerTurn = 0;
        }
        else {
            PlayerTurn++;

        }
    }
})
Buttomthird.addEventListener("click", e => {
    if (board_.ExtraPiecex_X === 8 && board_.ExtraPiece_y === 6) {
        for (let i = 0; i < board_.size - 1; i++) {

            board_.board[i][6] = Object.assign({}, board_.board[i + 1][6]);
        }
        board_.board[8][6] = undefined;
        board_.ExtraPiecex_X = 0;
        board_.ExtraPiece_y = 6;
        board_.Players.forEach(e => {
            if (e.CurrentPosition[1] == 6 && e.CurrentPosition[0] != 1) {
                e.CurrentPosition[0]--;
            }
            else if (e.CurrentPosition[1] == 6 && e.CurrentPosition[0] == 1) {
                e.CurrentPosition[0] = 7;
            }
        })
        board_.Treasures.forEach(e => {
            if (e.CurrentPosition[1] == 6 && e.CurrentPosition[0] != 1) {
                e.CurrentPosition[0]--;
            }
            else if (e.CurrentPosition[1] == 6 && e.CurrentPosition[0] == 1) {
                e.CurrentPosition[0] = 7;
            }
        })


        board_.DeleteTable();
        board_.AppendToTable();
        g.initialize(board_, PlayerTurn, board_.Players, value, board_.Treasures, value1);
        if (PlayerTurn == value - 1) {

            PlayerTurn = 0;
        }
        else {
            PlayerTurn++;

        }
    }
}
)

Leftfirst.addEventListener("click", e => {
    if (board_.ExtraPiecex_X === 2 && board_.ExtraPiece_y === 0) {
        for (let i = board_.size - 1; i > 0; i--) {

            board_.board[2][i] = Object.assign({}, board_.board[2][i - 1]);
        }
        board_.board[2][0] = undefined;
        board_.ExtraPiecex_X = 2;
        board_.ExtraPiece_y = 8;
        board_.Players.forEach(e => {
            if (e.CurrentPosition[0] == 2 && e.CurrentPosition[1] != 7) {
                e.CurrentPosition[1]++;
            }
            else if (e.CurrentPosition[0] == 2 && e.CurrentPosition[1] == 7) {
                e.CurrentPosition[1] = 1;
            }

        })
        board_.Treasures.forEach(e => {
            if (e.CurrentPosition[0] == 2 && e.CurrentPosition[1] != 7) {
                e.CurrentPosition[1]++;
            }
            else if (e.CurrentPosition[0] == 2 && e.CurrentPosition[1] == 7) {
                e.CurrentPosition[1] = 1;
            }

        })
        board_.DeleteTable();
        board_.AppendToTable();
        g.initialize(board_, PlayerTurn, board_.Players, value, board_.Treasures, value1);
        if (PlayerTurn == value - 1) {

            PlayerTurn = 0;
        }
        else {
            PlayerTurn++;

        }
    }
})
Leftsecond.addEventListener("click", e => {
    if (board_.ExtraPiecex_X === 4 && board_.ExtraPiece_y === 0) {
        for (let i = board_.size - 1; i > 0; i--) {

            board_.board[4][i] = Object.assign({}, board_.board[4][i - 1]);
        }
        board_.board[4][0] = undefined;
        board_.ExtraPiecex_X = 4;
        board_.ExtraPiece_y = 8;
        board_.Players.forEach(e => {
            if (e.CurrentPosition[0] == 4 && e.CurrentPosition[1] != 7) {
                e.CurrentPosition[1]++;
            }
            else if (board_.Players[PlayerTurn].CurrentPosition[0] == 4 && board_.Players[PlayerTurn].CurrentPosition[1] == 7) {
                e.CurrentPosition[1] = 1;
            }
        })
        board_.Treasures.forEach(e => {
            if (e.CurrentPosition[0] == 4 && e.CurrentPosition[1] != 7) {
                e.CurrentPosition[1]++;
            }
            else if (board_.Players[PlayerTurn].CurrentPosition[0] == 4 && board_.Players[PlayerTurn].CurrentPosition[1] == 7) {
                e.CurrentPosition[1] = 1;
            }
        })
        board_.DeleteTable();
        board_.AppendToTable();

        g.initialize(board_, PlayerTurn, board_.Players, value, board_.Treasures, value1); if (PlayerTurn == value - 1) {

            PlayerTurn = 0;
        }
        else {
            PlayerTurn++;

        }
    }
})
Leftthird.addEventListener("click", e => {
    if (board_.ExtraPiecex_X === 6 && board_.ExtraPiece_y === 0) {
        for (let i = board_.size - 1; i > 0; i--) {

            board_.board[6][i] = Object.assign({}, board_.board[6][i - 1]);
        }
        board_.board[6][0] = undefined;
        board_.ExtraPiecex_X = 6;
        board_.ExtraPiece_y = 8;
        board_.Players.forEach(e => {
            if (e.CurrentPosition[0] == 6 && e.CurrentPosition[1] != 7) {
                e.CurrentPosition[1]++;
            }
            else if (e.CurrentPosition[0] == 6 && e.CurrentPosition[1] == 7) {
                e.CurrentPosition[1] = 1;
            }
        })

        board_.Treasures.forEach(e => {
            if (e.CurrentPosition[0] == 6 && e.CurrentPosition[1] != 7) {
                e.CurrentPosition[1]++;
            }
            else if (e.CurrentPosition[0] == 6 && e.CurrentPosition[1] == 7) {
                e.CurrentPosition[1] = 1;
            }
        })
        board_.DeleteTable();
        board_.AppendToTable();

        g.initialize(board_, PlayerTurn, board_.Players, value, board_.Treasures, value1); if (PlayerTurn == value - 1) {
            PlayerTurn = 0;
        }
        else {
            PlayerTurn++;
        }
    }
})
Rightfirst.addEventListener("click", e => {
    if (board_.ExtraPiecex_X === 2 && board_.ExtraPiece_y === 8) {
        for (let i = 0; i < board_.size; i++) {
            board_.board[2][i] = Object.assign({}, board_.board[2][i + 1]);
        }
        board_.board[2][8] = undefined;
        board_.ExtraPiecex_X = 2;
        board_.ExtraPiece_y = 0;
        board_.Players.forEach(e => {
            if (e.CurrentPosition[0] == 2 && e.CurrentPosition[1] != 1) {
                e.CurrentPosition[1]--;
            }
            else if (e.CurrentPosition[0] == 2 && e.CurrentPosition[1] == 1) {
                e.CurrentPosition[1] = 7;
            }
        })
        board_.Treasures.forEach(e => {
            if (e.CurrentPosition[0] == 2 && e.CurrentPosition[1] != 1) {
                e.CurrentPosition[1]--;
            }
            else if (e.CurrentPosition[0] == 2 && e.CurrentPosition[1] == 1) {
                e.CurrentPosition[1] = 7;
            }
        })
        board_.DeleteTable();
        board_.AppendToTable();

        g.initialize(board_, PlayerTurn, board_.Players, value, board_.Treasures, value1); 
        if (PlayerTurn == value - 1) {

            PlayerTurn = 0;
        }
        else {
            PlayerTurn++;

        }
    }



})
Rightsecond.addEventListener("click", e => {
    if (board_.ExtraPiecex_X === 4 && board_.ExtraPiece_y === 8) {
        for (let i = 0; i < board_.size; i++) {
            board_.board[4][i] = Object.assign({}, board_.board[4][i + 1]);
        }
        board_.board[4][8] = undefined;
        board_.ExtraPiecex_X = 4;
        board_.ExtraPiece_y = 0;
        board_.Players.forEach(e => {
            if (e.CurrentPosition[0] == 4 && e.CurrentPosition[1] != 1) {
                e.CurrentPosition[1]--;
            }
            else if (e.CurrentPosition[0] == 4 && e.CurrentPosition[1] == 1) {
                e.CurrentPosition[1] = 7;
            }
        })
        board_.Treasures.forEach(e => {
            if (e.CurrentPosition[0] == 4 && e.CurrentPosition[1] != 1) {
                e.CurrentPosition[1]--;
            }
            else if (e.CurrentPosition[0] == 4 && e.CurrentPosition[1] == 1) {
                e.CurrentPosition[1] = 7;
            }
        })

        board_.DeleteTable();
        board_.AppendToTable();

        g.initialize(board_, PlayerTurn, board_.Players, value, board_.Treasures, value1); if (PlayerTurn == value - 1) {

            PlayerTurn = 0;
        }
        else {
            PlayerTurn++;

        }
    }
})
Rightthird.addEventListener("click", e => {
    if (board_.ExtraPiecex_X === 6 && board_.ExtraPiece_y === 8) {
        for (let i = 0; i < board_.size; i++) {
            board_.board[6][i] = Object.assign({}, board_.board[6][i + 1]);
        }
        board_.board[6][8] = undefined;
        board_.ExtraPiecex_X = 6;
        board_.ExtraPiece_y = 0;
        board_.Players.forEach(e => {
            if (e.CurrentPosition[0] == 6 && e.CurrentPosition[1] != 1) {
                e.CurrentPosition[1]--;
            }
            else if (e.CurrentPosition[0] == 6 && e.CurrentPosition[1] == 1) {
                e.CurrentPosition[1] = 7;
            }
        });
        board_.Treasures.forEach(e => {
            if (e.CurrentPosition[0] == 6 && e.CurrentPosition[1] != 1) {
                e.CurrentPosition[1]--;
            }
            else if (e.CurrentPosition[0] == 6 && e.CurrentPosition[1] == 1) {
                e.CurrentPosition[1] = 7;
            }
        })

        board_.DeleteTable();
        board_.AppendToTable();

        g.initialize(board_, PlayerTurn, board_.Players, value, board_.Treasures, value1); if (PlayerTurn == value - 1) {
            PlayerTurn = 0;
        }
        else {
            PlayerTurn++;
        }
    }
})







//let board_ = 
/*  if(board_.Players[PlayerTurn].CurrentPosition[0] == 6 && board_.Players[PlayerTurn].CurrentPosition[1] != 1){
board_.Players[PlayerTurn].CurrentPosition[1]--;
}
else if(board_.Players[PlayerTurn].CurrentPosition[0] == 6 && board_.Players[PlayerTurn].CurrentPosition[1] == 1){
board_.Players[PlayerTurn].CurrentPosition[1] = 7;
}*/