"use strict";
class Wall {
    constructor(pricPerBrick, totalBricksUsed) {
        this.cmentComp = "Pak";
        this.brickType = "cement brick";
        this.pricPerBrick = pricPerBrick;
        this.totalBricksUsed = pricPerBrick;
    }
    showDetails() {
        console.log("it's bricks details");
    }
}
let wall = (wall) => {
    wall.showDetails();
};
let bwall = new Wall(50, 1000);
wall(bwall);
