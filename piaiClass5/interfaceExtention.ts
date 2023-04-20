export{}


interface memory{
    RAM:number|string, // base: its wider property
    ROM:number
}

interface freeOrUseRomMemory{
    free:number,
    use:number
}

interface lap extends memory,freeOrUseRomMemory{
    RAM:string, // overridden property depends on base property(we can only use string or number property)
    name:string,
    processor:string,

}

let laptop:lap = {
    RAM:"8", // here, we must have to use overridden porperty
    ROM:360, // here, we use only base property
    free:120,
    use:240,
    name:"lenovo",
    processor:"i5"
}

console.log(laptop);