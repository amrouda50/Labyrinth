import { PipelineRightLeft, PipelineUpDown } from "./pipeline.js";
import { TType, TTypeLeftUpRight, TTypeRightDownLeft, TTypeUpDownRight, TTypeUpLeftDown } from "./TType.js";
import { VtypeDownLeft, VtypeDownRight, VtypeLeftUp, VtypeUpRight } from "./Vtype.js";
import { Player, Witch, Mage, Ninja, RobinHood } from './Player.js';
import {Treasures} from './Treasures.js';
class Board {
    ExtraPieceSpots = [
        [0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8],
        [8, 1], [8, 2], [8, 3], [8, 4], [8, 5], [8, 6], [8, 7], [8, 8],
        [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0],
        [1, 8], [2, 8], [3, 8], [4, 8], [5, 8], [6, 8], [7, 8],
    ]
    Treasures = [];
    SelectedImg = null;
    ExtraPiecex_X = 0;
    ExtraPiece_y = 0;
    Players = []
    MaxiumumPlayers;
    NumberOfTreasures;
    CountOfCurrentPlayers = 0;
MovingIsAllowed = true;
    constructor(size) {
        this.size = size;
        this.board = Array(size).fill().map(() => Array(size).fill());
    }
    initialize(NumberOfplayers , NumberOfTreasures) {
        this.MaxiumumPlayers = NumberOfplayers;
        this.NumberOfTreasures = NumberOfTreasures;
        this.DefaultStartingBoard();
        this.DefaultPlayersPosition(NumberOfplayers);
        this.AppendToTable();
        this.CreateTreasures();
        this.AddMoveListener();


    }
    DeleteTable() {

        let table = document.getElementById('board');
        table.innerHTML = '';
        this.CountOfCurrentPlayers = 0;
    }

    AppendToTable() {
        let table = document.getElementById('board');
        let div = document.createElement('div');
        let innerHTMLsolution = '';
        let PlayerUrl = '';
        for (let i = 0; i < this.size; i++) {
            innerHTMLsolution += '<tr>';
            for (let j = 0; j < this.size; j++) {
                let id = String(i) + String(j);
                if (typeof this.board[i][j] !== "undefined" && this.board[i][j] != this.board[this.ExtraPiecex_X][this.ExtraPiece_y]) {
                    let IDname = ' "' + this.board[i][j].url + '"';
                    let CurPlayer = null;
                    if (this.Players[0] != null && this.Players[0] != null && i === this.Players[0].CurrentPosition[0] && j === this.Players[0].CurrentPosition[1]) {
                        CurPlayer = this.Players[0];
                        CurPlayer.TreasureToSearch = this.Treasures[0];
               

                    }
                    else if (this.Players[1] != null && this.Players[1] != null && i === this.Players[1].CurrentPosition[0] && j === this.Players[1].CurrentPosition[1]) {
                        CurPlayer = this.Players[1];
                        CurPlayer.TreasureToSearch = this.Treasures[1];
                       

                    }
                    else if (this.Players[2] != null && this.Players[2] != null && i === this.Players[2].CurrentPosition[0] && j === this.Players[2].CurrentPosition[1]) {
                        CurPlayer = this.Players[2];
                        CurPlayer.TreasureToSearch = this.Treasures[2]; 

                     

                    }
                    else if (this.Players[3] != null && this.Players[3] != null && i === this.Players[3].CurrentPosition[0] && j === this.Players[3].CurrentPosition[1]) {
                        CurPlayer = this.Players[3];
                        CurPlayer.TreasureToSearch = this.Treasures[3];

                       
                    }
                    if ((this.CountOfCurrentPlayers < this.MaxiumumPlayers) && (CurPlayer != null)) {
                        innerHTMLsolution += '<td style = "width: 50px ; height: 50px ; background-color:gray; position:relative;" id="' + id + '" > <img style="position:relative;top:0;left:0;"src=' + IDname + '>' + ' </img>  <img width="30px" style="position:absolute;top:7px;left:7px;" src="' + CurPlayer.url + '">' + ' </img> </td>';
                        this.CountOfCurrentPlayers++;
                        CurPlayer = null;
                    }
                    else {
                        innerHTMLsolution += '<td style = "width: 50px ; height: 50px ; background-color:gray" id="' + id + '" > <img src=' + IDname + '>' + ' </img>  </td>';
                    }



                }
                else if (typeof this.board[i][j] == "undefined" || this.board[i][j] == this.board[this.ExtraPiecex_X][this.ExtraPiece_y]) {
                    if (this.board[i][j] === this.board[this.ExtraPiecex_X][this.ExtraPiece_y]) {
                        let IDname = ' "' + this.board[i][j].url + '"';
                        innerHTMLsolution += '<td style = "width: 50px ; height: 50px ; background-color:lightskyblue ;" id="' + id + '" > <img src=' + IDname + '>' + ' </img>  </td>'; //
                    }
                    else {
                        innerHTMLsolution += '<td style = " width: 50px ; height: 50px; background-color:lightskyblue" id="' + id + '""> </td>';
                    }


                }



            }
            innerHTMLsolution += '</tr>';
        }
        table.innerHTML += innerHTMLsolution;
      
        this.SelectedImg = document.getElementById(String(this.ExtraPiecex_X) + String(this.ExtraPiece_y)).firstElementChild;

        this.AddRotateListener();
        if(typeof this.Treasures[0] !== "undefined"){
            this.AppendTreasures();
        }
        


    }
    DefaultStartingBoard() {
        for (let i = 1; i < this.size - 1; i++) {
            for (let j = 1; j < this.size - 1; j++) {
                if (i === 1 && j === 1) {
                    this.insertRoom(1, 1, new VtypeDownRight());
                }
                else if (i === 1 && j === 3) {
                    this.insertRoom(1, 3, new TTypeRightDownLeft());
                }
                else if (i === 1 && j === 5) {

                    this.insertRoom(1, 5, new TTypeRightDownLeft());
                }
                else if (i === 1 && j === 7) {
                    this.insertRoom(1, 7, new VtypeDownLeft());
                }
                else if (i === 3 && j === 1) {
                    this.insertRoom(3, 1, new TTypeUpDownRight());
                }
                else if (i === 3 && j === 3) {
                    this.insertRoom(3, 3, new TTypeUpDownRight());
                }
                else if (i === 3 && j === 5) {
                    this.insertRoom(3, 5, new TTypeRightDownLeft());
                }
                else if (i === 3 && j === 7) {
                    this.insertRoom(3, 7, new TTypeUpLeftDown());
                }
                else if (i === 5 && j === 1) {
                    this.insertRoom(5, 1, new TTypeUpDownRight());
                }
                else if (i === 5 && j === 3) {
                    this.insertRoom(5, 3, new TTypeLeftUpRight());
                }
                else if (i === 5 && j === 5) {
                    this.insertRoom(5, 5, new TTypeLeftUpRight());
                }
                else if (i === 5 && j === 7) {
                    this.insertRoom(5, 7, new TTypeUpLeftDown());
                }
                else if (i === 7 && j === 1) {
                    this.insertRoom(7, 1, new VtypeUpRight());
                }
                else if (i === 7 && j === 3) {
                    this.insertRoom(7, 3, new TTypeLeftUpRight());
                }
                else if (i === 7 && j === 5) {
                    this.insertRoom(7, 5, new TTypeLeftUpRight());
                }
                else if (i === 7 && j === 7) {
                    this.insertRoom(7, 7, new VtypeLeftUp());
                }
                else {
                    this.board[i][j] = this.AllocateRandom();
                }


            }
        }
        this.AllocateExtraPiece();

    }
    insertRoom(x, y, room) {

        this.board[x][y] = room;
        this.board[x][y].allocated = true;

    }

    AllocateRandom() {
        let rand = Math.floor(Math.random() * 10);
        if (rand === 0) {
            return new VtypeLeftUp();
        }
        else if (rand === 1) {
            return new TTypeRightDownLeft();
        }
        else if (rand === 2) {
            return new TTypeUpLeftDown();
        }
        else if (rand === 3) {
            return new TTypeLeftUpRight();
        }
        else if (rand === 4) {
            return new TTypeUpDownRight();
        }
        else if (rand === 5) {
            return new VtypeUpRight();
        }
        else if (rand === 6) {
            return new PipelineUpDown();
        }
        else if (rand === 7) {
            return new VtypeDownRight();
        }
        else if (rand === 8) {
            return new VtypeDownLeft();
        }
        else if (rand === 9) {
            return new PipelineRightLeft();
        }
    }
    AllocateExtraPiece() {
        let rand = Math.floor(Math.random() * 33);
        let x = this.ExtraPieceSpots[rand][0];
        let y = this.ExtraPieceSpots[rand][1];
        this.ExtraPiecex_X = x;
        this.ExtraPiece_y = y;
        this.board[x][y] = this.AllocateRandom();

    }

    AddRotateListener() {
        this.SelectedImg.addEventListener('click', e => {
            if (this.board[this.ExtraPiecex_X][this.ExtraPiece_y].url === './pictures/bend-left-right-up.png') {
                this.insertRoom(this.ExtraPiecex_X, this.ExtraPiece_y, new TTypeUpDownRight());
                this.SelectedImg.src = this.board[this.ExtraPiecex_X][this.ExtraPiece_y].url;
            }
            else if (this.board[this.ExtraPiecex_X][this.ExtraPiece_y].url === './pictures/bend-down-up-right.png') {
                this.insertRoom(this.ExtraPiecex_X, this.ExtraPiece_y, new TTypeRightDownLeft());
                this.SelectedImg.src = this.board[this.ExtraPiecex_X][this.ExtraPiece_y].url;
            }
            else if (this.board[this.ExtraPiecex_X][this.ExtraPiece_y].url === './pictures/bend-left-down-right.png') {
                this.insertRoom(this.ExtraPiecex_X, this.ExtraPiece_y, new TTypeUpLeftDown());
                this.SelectedImg.src = this.board[this.ExtraPiecex_X][this.ExtraPiece_y].url;
            }
            else if (this.board[this.ExtraPiecex_X][this.ExtraPiece_y].url === './pictures/bend-up-down-left.png') {
                this.insertRoom(this.ExtraPiecex_X, this.ExtraPiece_y, new TTypeLeftUpRight());
                this.SelectedImg.src = this.board[this.ExtraPiecex_X][this.ExtraPiece_y].url;
            }
            else if (this.board[this.ExtraPiecex_X][this.ExtraPiece_y].url === './pictures/bend-right-down.png') {
                this.insertRoom(this.ExtraPiecex_X, this.ExtraPiece_y, new VtypeDownLeft());
                this.SelectedImg.src = this.board[this.ExtraPiecex_X][this.ExtraPiece_y].url;
            }
            else if (this.board[this.ExtraPiecex_X][this.ExtraPiece_y].url === './pictures/bend-left-down.png') {
                this.insertRoom(this.ExtraPiecex_X, this.ExtraPiece_y, new VtypeLeftUp());
                this.SelectedImg.src = this.board[this.ExtraPiecex_X][this.ExtraPiece_y].url;
            }
            else if (this.board[this.ExtraPiecex_X][this.ExtraPiece_y].url === './pictures/bend-left-up.png') {
                this.insertRoom(this.ExtraPiecex_X, this.ExtraPiece_y, new VtypeUpRight());
                this.SelectedImg.src = this.board[this.ExtraPiecex_X][this.ExtraPiece_y].url;
            }
            else if (this.board[this.ExtraPiecex_X][this.ExtraPiece_y].url === './pictures/bend-right-up.png') {
                this.insertRoom(this.ExtraPiecex_X, this.ExtraPiece_y, new VtypeDownRight());
                this.SelectedImg.src = this.board[this.ExtraPiecex_X][this.ExtraPiece_y].url;
            }
            else if (this.board[this.ExtraPiecex_X][this.ExtraPiece_y].url === './pictures/bend-up-down.png') {
                this.insertRoom(this.ExtraPiecex_X, this.ExtraPiece_y, new PipelineRightLeft());
                this.SelectedImg.src = this.board[this.ExtraPiecex_X][this.ExtraPiece_y].url;
            }
            else if (this.board[this.ExtraPiecex_X][this.ExtraPiece_y].url === './pictures/bend-left-right.png') {
                this.insertRoom(this.ExtraPiecex_X, this.ExtraPiece_y, new PipelineUpDown());
                this.SelectedImg.src = this.board[this.ExtraPiecex_X][this.ExtraPiece_y].url;
            }


        });
    }
    reallocateExtraPiece(newX, newY) {
        for (let i = 0; i < this.ExtraPieceSpots.length; i++) {
            if (this.ExtraPieceSpots[i][0] === newX && this.ExtraPieceSpots[i][1] === newY) {
                this.SelectedImg = document.getElementById(String(this.ExtraPiecex_X) + String(this.ExtraPiece_y)).firstElementChild;
                let url = this.SelectedImg.src;
                this.SelectedImg.remove();
                this.board[newX][newY] = Object.assign({}, this.board[this.ExtraPiecex_X][this.ExtraPiece_y]);
                this.board[this.ExtraPiecex_X][this.ExtraPiece_y] = undefined;
                this.ExtraPiecex_X = newX;
                this.ExtraPiece_y = newY;
                let newImg = document.getElementById(String(newX) + String(newY));
                let element = document.createElement('img');
                element.src = url;
                newImg.appendChild(element);
                this.SelectedImg = element;
                this.AddRotateListener();

            }
        }

    }
    AddMoveListener() {
        window.addEventListener("keydown", key => {
            if(this.MovingIsAllowed){

            if (key.keyCode == '87') {
                this.reallocateExtraPiece(this.ExtraPiecex_X - 1, this.ExtraPiece_y, this.SelectedImg);
            }
            else if (key.keyCode == '83') {
                this.reallocateExtraPiece(this.ExtraPiecex_X + 1, this.ExtraPiece_y, this.SelectedImg);

            }
            else if (key.keyCode == '68') {
                this.reallocateExtraPiece(this.ExtraPiecex_X, this.ExtraPiece_y + 1, this.SelectedImg);

            }
            else if (key.keyCode == '65') {
                this.reallocateExtraPiece(this.ExtraPiecex_X, this.ExtraPiece_y - 1, this.SelectedImg);

            }
        }
        }, false)

    }
    DefaultPlayersPosition(NumberOfplayers) {
        for (let i = 0; i < NumberOfplayers; i++) {
            if (i === 0) {
                this.Players.push(new Mage());

            }
            else if (i === 1) {
                this.Players.push(new Ninja());

            }
            else if (i === 2) {
                this.Players.push(new RobinHood());

            }
            else if (i === 3) {
                this.Players.push(new Witch());

            }
        }

    }
    CreateTreasures(){
       let imgTreasure = ['./Treasures/diamond-ring (1).png'  , './Treasures/diamond-ring (2).png' , './Treasures/diamond-ring.png' , 'Treasures/rings.png' ]
       console.log(this.MaxiumumPlayers);
        for(let i = 0 ; i < this.MaxiumumPlayers ; i++){
         this.Treasures[i] = new Treasures(imgTreasure[i]);
         this.Treasures[i].AllocateRandomPosition(); 
         let x = this.Treasures[i].CurrentPosition[0];
         let y = this.Treasures[i].CurrentPosition[1];
         console.log(x + "  " + y);
         let position = document.getElementById(String(x) + String(y));
         position.setAttribute('style' , "width:50px ; height:50px; background-color:gray;position:relative;")
        position.firstElementChild.setAttribute('style' , "position:relative;top: 0;left: 0;");
         let element = document.createElement('img');
         element.setAttribute('style' , " width:30px; position:absolute; top:7px;left:7px")
         element.src = this.Treasures[i].Imgurl;
         position.appendChild(element);
            
        }
    }
    AppendTreasures(){
        let imgTreasure = ['./Treasures/diamond-ring (1).png'  , './Treasures/diamond-ring (2).png' , './Treasures/diamond-ring.png' , 'Treasures/rings.png' ]
        for(let i = 0 ; i < this.MaxiumumPlayers ; i++){
            let x = this.Treasures[i].CurrentPosition[0];
            let y = this.Treasures[i].CurrentPosition[1];
            let position = document.getElementById(String(x) + String(y));
            position.setAttribute('style' , "width:50px ; height:50px; background-color:gray;position:relative;")
           position.firstElementChild.setAttribute('style' , "position:relative;top: 0;left: 0;");
            let element = document.createElement('img');
            element.setAttribute('style' , " width:30px; position:absolute; top:7px;left:7px")
            element.src = this.Treasures[i].Imgurl;
            position.appendChild(element);
               
           }

    }


}

export { Board };



/* createTable(size) {
        let table = document.getElementById('board');
        let div = document.createElement('div');
        let innerHTMLsolution = '';
        for (let i = 1; i < size - 2; i++) {
            innerHTMLsolution += '<tr>';
            for (let j = 1; j < size - 2; j++) {
                innerHTMLsolution += '<td> <img src="./pictures/bend-down-up-right.png" >' + ' </img> </td>';
            }
            innerHTMLsolution += '</tr>';
        }
        table.innerHTML += innerHTMLsolution ;

    }*/