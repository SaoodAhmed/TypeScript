// ******************Optional Parameters****************
// function annouceSongs(song:string, singer?:string){
//     console.log("The song is ",song);
//     if(singer){
//         console.log("The singer is ",singer);
//     }   
// }
// annouceSongs("Tokha door ghuzeral dehira")
// annouceSongs("Tokha door ghuzariyal dehira "," Sarmad Sindhi");
// function annouceSongDefault(song:string, singer:string = 'Manzoor Sakherani') {
//     console.log('The song is ', song);
//     console.log('The singer is '+singer);
// }
// annouceSongDefault('Dushman dost maa peda aksar yar thendo aa');
// annouceSongDefault('Hath m khani hithyar kalm ja','Sarmd Sindhi');
function drinCool(cold, price, size) {
    console.log('The name of cold drink is ' + cold);
    console.log('The price is ', price);
    if (size) {
        console.log("The size is " + size + " litre");
    }
}
drinCool("Pepsi", 100);
drinCool('Dew', 120, 1.5);
