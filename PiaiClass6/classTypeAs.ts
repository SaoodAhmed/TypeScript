class Wall{
    cmentComp:string;
    brickType:string;
    pricPerBrick:number
    totalBricksUsed:number;
    constructor(pricPerBrick:number,totalBricksUsed:number){
        this.cmentComp = "Pak";
        this.brickType = "cement brick";
        this.pricPerBrick = pricPerBrick;
        this.totalBricksUsed = pricPerBrick;

        

    }
    showDetails(){
        console.log("it's bricks details")
    }

}


let wall = (wall:Wall)=>{
    wall.showDetails();
}
let  bwall= new Wall(50,1000)
wall(bwall);