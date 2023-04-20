class person{
    name:string;
    age:number;
    type:string;
    private speed:number;

    constructor(name:string, age:number, type:string){
        this.name= name;
        this.age = age;
        this.type = type;
        this.speed = 0;

    }

    set Speed(speed:number){
        if(speed>0){
            this.speed = speed;
        }else{
            this.speed = 2;
        }
    }

    get Speed(){
        return this.speed;
    }


    eat(){
        return this.name+" is eating"
    }

    walk(){
        this.speed = 2;
        return this.name+" is walking with "+this.speed +"m/s"
        
    }

    sleep(){
        return this.name+" is sleeping"
    }
    
}




let Saud:person = new person("Saud",23,"Male");
Saud.Speed = -20;
console.log(Saud);
