import {Buttons} from './Buttons.js';

class Pipeline extends Buttons{
    constructor(position , EntryPoints){
        super(position , EntryPoints);
    }

};

class PipelineUpDown extends Pipeline{
    url = './pictures/bend-up-down.png';
    constructor(position = 0 ,   EntryPoints = ['U' , 'D']){
        super(position , EntryPoints);
    }

};
class PipelineRightLeft extends Pipeline{
   url = './pictures/bend-left-right.png';
    constructor( position = 90 ,  EntryPoints = ['R' , 'L']){
        super(position , EntryPoints);
    }

};

export {Pipeline , PipelineRightLeft , PipelineUpDown};