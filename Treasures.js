class Treasures {
occupied = false;
    constructor(Imgurl) {
        this.Imgurl = Imgurl;
        this.CurrentPosition = [];
    }

    AllocateRandomPosition() {
        let rand_x = 1;
        let rand_y = 1;
        while (rand_x === 0 || rand_y == 0 || rand_x == 1 && rand_y == 1 || rand_x == 1 && rand_y == 7 || rand_x == 7 && rand_y == 7 || rand_x == 7 && rand_y == 1 ) {
            rand_x = Math.floor(Math.random() * 7);
            rand_y = Math.floor(Math.random() * 7);
        }

        this.CurrentPosition[0]= rand_x;
        this.CurrentPosition[1] = rand_y;

    }

}

export {Treasures}