import { Board } from './Board.js';
import { Player } from './Player.js';

class Graph {
    // Constructor
    b;
    p;
    PlayerTurn;
    Playervalue;
    Treasurevalue;
    Treasures;
    constructor(v) {
        this.V = v;
        this.adj = new Array(v);
        for (let i = 0; i < v; i++)
            this.adj[i] = [];
    }

    // Function to add an edge into the graph
    addEdge(v, w) {
        console.log(v + " " + w);
        // Add w to v's list.
        this.adj[v].push(w);
        this.adj[w].push(v);
    }

    // A function used by DFS
    DFSUtil(v, visited) {

        // Mark the current node as visited and print it
        visited[v] = true;
        // console.log(v + " ")
        this.MakeItMovable(v);

        // Recur for all the vertices adjacent to this
        // vertex
        for (let i of this.adj[v].values()) {
            let n = i
            if (!visited[n])
                this.DFSUtil(n, visited);
        }
    }

    // The function to do DFS traversal.
    // It uses recursive
    // DFSUtil()
    DFS(v) {

        // Mark all the vertices as
        // not visited(set as
        // false by default in java)
        let visited = new Array(this.V);
        for (let i = 0; i < this.V; i++)
            visited[i] = false;

        // Call the recursive helper
        // function to print DFS
        // 
        this.DFSUtil(v, visited);
    }
    initialize(board, PlayerTurn, Players , value , Treasures , value1) {
        this.Playervalue = value
        this.Treasurevalue = value1
        this.Treasures = Treasures;
this.PlayerTurn = PlayerTurn;
        this.b = board;
        this.p = Players
        this.p1 = Players;

        let count = 0;
        for (let i = 1; i < 8; i++) {

            for (let j = 1; j < 8; j++) {
                count++;
                if (i - 1 > 0) {
                    if (this.b.board[i][j].EntryPoints.includes('U') && this.b.board[i - 1][j].EntryPoints.includes('D')) {

                        this.addEdge(count, count - 7);
                    }
                }
                if (i + 1 < 8) {
                    if (this.b.board[i][j].EntryPoints.includes('D') && this.b.board[i + 1][j].EntryPoints.includes('U')) {

                        this.addEdge(count, count + 7);
                    }
                }
                if (j + 1 < 8) {
                    if (this.b.board[i][j].EntryPoints.includes('R') && this.b.board[i][j + 1].EntryPoints.includes('L')) {

                        this.addEdge(count, count + 1);
                    }
                }
                if (j - 1 > 0) {
                    if (this.b.board[i][j].EntryPoints.includes('L') && this.b.board[i][j - 1].EntryPoints.includes('R')) {

                        this.addEdge(count, count - 1);
                    }
                }
            }

        }
        if (PlayerTurn == 0) {
            let x = this.p[0].CurrentPosition[0] - 1;
            let y = this.p[0].CurrentPosition[1];
            this.p = this.p[0];
            this.Treasures = this.Treasures[0];
            let position = ((x * 7) + y);
            console.log(position +  "  Position");
            this.DFS(position);
        }
        else if (PlayerTurn == 1) {
            let x = this.p[1].CurrentPosition[0] - 1;
            let y = this.p[1].CurrentPosition[1];
            this.p = this.p[1];
            this.Treasures = this.Treasures[1];
            let position = ((x * 7) + y);
            console.log(position +  "  Position" );
            this.DFS(position);
        }
        else if (PlayerTurn == 2) {
            let x = this.p[2].CurrentPosition[0] - 1;
            let y = this.p[2].CurrentPosition[1];
            this.p = this.p[2];
            this.Treasures = this.Treasures[2];
            let position = ((x * 7) + y);
            console.log(position +  "  Position");
            this.DFS(position);
        }
        else if (PlayerTurn == 3) {
            let x = this.p[3].CurrentPosition[0] - 1;
            let y = this.p[3].CurrentPosition[1];
            this.p = this.p[3];
            this.Treasures = this.Treasures[3];
            let position = ((x * 7) + y);
            console.log(position +  "  Position");
            this.DFS(position);
        }

    }

    MakeItMovable(v) {
        console.log(v + "  500")
        //  v -= 1;
        let x;
        let y;
       if (!this.ismultipleOfSeven(v)) {
            x = Math.floor(v / 7);
            y = Math.floor(v % 7) - 1;
        }
        else {
            x = Math.floor(v / 7) - 1;
            y = 6;
        }
/*
        x = Math.floor(v / 7);
        y = Math.floor(v % 7) - 1;*/
        let documentElem = document.getElementById(String(x + 1) + String(y + 1));
        documentElem.style.border = "3px solid #F2A000";

        console.log(v + " x:" + x  + " y:" + y)
        this.AddMoveListener(documentElem, x + 1, y + 1);
        let CurrentState = document.getElementById('CurrentStateOfGame');
        CurrentState.innerHTML = 'Move the Current Player'
        
    }
    ismultipleOfSeven(v) {
        if (v % 7 == 0) {
            return true;
        }
        return false;
    }
    AddMoveListener(Elem, x, y) {
        this.b.MovingIsAllowed = false;
        Elem.addEventListener('click', e => {
            this.p.CurrentPosition[0] = x;
            this.p.CurrentPosition[1] = y;
            console.log(this.p) 
            if(x == this.Treasures.CurrentPosition[0] && y == this.Treasures.CurrentPosition[1]){
                this.p.CountOfTreasuresCollected++;
                if(this.p.CountOfTreasuresCollected == this.Treasurevalue){

                    alert("Player:" + this.p.name + " has won the game")
                    window.location.reload();
                }else{
                this.Treasures.AllocateRandomPosition();
                let TreasuresColected = document.getElementById('TreasuresCollected');
                let valueoftreasure = parseInt(TreasuresColected.textContent)
                valueoftreasure++;
                TreasuresColected.innerHTML = String(valueoftreasure);
                console.log(this.p.CountOfTreasuresCollected + " " + this.Treasurevalue + "     valuesss")
                }
               
            } 
            this.b.DeleteTable();
            this.b.AppendToTable();
            let currImg = document.getElementById('CurrPlayer');
           // let currTreasure = document.getElementById('CurrTreasure');
            let currNamePlayer = document.getElementById('NameOfPlayer');
            if(this.PlayerTurn >= this.Playervalue){
                this.PlayerTurn = 0;
            }
            
          if(this.PlayerTurn  == this.Playervalue -1 ){
            this.PlayerTurn = 0
            currImg.src = this.b.Players[this.PlayerTurn  ].url; 
           // currTreasure.src = this.Treasures[this.PlayerTurn].Imgurl;
            currNamePlayer.innerHTML = this.b.Players[this.PlayerTurn].name;
          }
          else{         
            currImg.src = this.b.Players[this.PlayerTurn + 1].url;  
            //currTreasure.src = this.Treasures[this.PlayerTurn+1].Imgurl;
            currNamePlayer.innerHTML = this.b.Players[this.PlayerTurn + 1 ].name; 
          }
          this.adj.forEach(e =>{
            while(e.length > 0){
                e.pop();
            }
                })   
                this.b.MovingIsAllowed = true;
                let CurrentState = document.getElementById('CurrentStateOfGame');
                CurrentState.innerHTML = ' Move the Extra Piece using W,S,D,A Buttons'
        })

       
    

    }
}

// Driver Code
export { Graph }