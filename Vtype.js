import {Buttons} from './Buttons.js';


class Vtype extends Buttons{
    constructor(position , EntryPoints){
        super(position , EntryPoints);
    }

};

class VtypeDownRight extends Vtype{
    url = './pictures/bend-right-down.png';
    constructor(position = 0 , EntryPoints = ['R' , 'D']){
        super(position , EntryPoints);
     
    }

}
class VtypeDownLeft extends Vtype{
    url = './pictures/bend-left-down.png'
    constructor(position = 90,  EntryPoints = ['L' , 'D']){
        super(position , EntryPoints);
    }
}
class VtypeLeftUp extends Vtype{
   url = './pictures/bend-left-up.png';
    constructor( position = 180 ,  EntryPoints = ['L' , 'U']){
        super(position , EntryPoints);
    }
}
class VtypeUpRight extends Vtype{
    url = './pictures/bend-right-up.png';
    constructor(position = 270 ,  EntryPoints = ['R' , 'U']){
        super(position ,EntryPoints);
    }
}

export {Vtype , VtypeDownLeft , VtypeUpRight , VtypeLeftUp , VtypeDownRight};