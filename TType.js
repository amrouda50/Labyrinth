
import {Buttons} from './Buttons.js';
class TType extends Buttons{
    constructor(position , EntryPoints){
        super(position , EntryPoints);
    }

};
class TTypeLeftUpRight extends TType{
    url = './pictures/bend-left-right-up.png';
    constructor(position = 0 , EntryPoints = ['L' , 'U' , 'R']){
       
        super(position , EntryPoints);
    }
}

class TTypeUpDownRight extends TType{
url = './pictures/bend-down-up-right.png';
constructor(position = 90 ,  EntryPoints = ['U' , 'R' , 'D']){
    super(position , EntryPoints);
}

}


class TTypeRightDownLeft extends TType{
    url = './pictures/bend-left-down-right.png';
    
    constructor( position = 180 , EntryPoints = ['R' , 'D' , 'L']){
        super(position ,EntryPoints);
    }
}
class TTypeUpLeftDown extends TType{
    url = './pictures/bend-up-down-left.png';
    constructor( position = 270 ,  EntryPoints = ['U' , 'L' , 'D']){
        super(position , EntryPoints);
    }
}


export {TType , TTypeUpDownRight , TTypeUpLeftDown , TTypeRightDownLeft , TTypeLeftUpRight};