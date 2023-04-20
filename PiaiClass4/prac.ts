export{}

let arr1:string[] = ["Hi","Hello"];

let arr2:Array<number> = [3,3443,3434,434,];

let arr3:[string,number,boolean,number] = ["Hi",234,true,343];

let arr4 = ["Hi",34,false,43,"sdf"];


let arr5 = ["text1","text2"];

arr5.push("text3");
//arr5.push(5);  //error
arr4.push(5);

console.log(arr5, arr4);


let a = [];
a.push(5);
a[0] = "str";

console.log(a);



let soldiers = ["Ahmed","Ali","Asad"];
let soldersAge = [34,22,53]

let joinus = [...soldiers, ...soldersAge];

console.log(joinus)



let logWarrior = (greetings:string, ...names:string[])=>{
    for(const name of names){
        console.log(greetings,name)
    }
}

let warriors = ["Saud","Ahmed","Ali"];

logWarrior("Hello",...warriors);
