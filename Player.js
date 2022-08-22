class Player {
    url = '';
    name = '';
    CurrentPosition = [];
    CountOfTreasuresCollected = 0;
    TreasureToSearch;
    constructor(name , url , CurrentPosition) {
        this.name = name;
        this.url = url;
        this.CurrentPosition = CurrentPosition;
    }

}


class Ninja extends Player {
    
    constructor(url = './PlayersPics/ninja.png' , CurrentPosition = [1 , 7]) {
        super("Ninja" , url , CurrentPosition);
    } 
}
class Mage extends Player {
    constructor(url = './PlayersPics/mage.png' , CurrentPosition =  [1,1]) {
        super("Mage" , url , CurrentPosition);
    }
}
class RobinHood extends Player {
    constructor(url = './PlayersPics/robin-hood.png'  , CurrentPosition =  [7, 1]) {
        super("RobinHood" , url , CurrentPosition);
    }
}
class Witch extends Player {
    constructor(url = './PlayersPics/witch.png' , CurrentPosition = [7,7]) {
        super("Witch" , url , CurrentPosition);
    }
}


export { Player , Witch , RobinHood , Mage , Ninja}