// let a = 'str';          // not literal bcz it can be changable.
// a = 'saud';
// const val = 34;        // literal type; literal variable start with const nd desriable value assingn to variable
//  val = 5;              // that cann't be change
var ac = function (name, size, litReturnType) {
    if (name === "Orient" && size === 1.5) {
        var price = 220000;
        console.log(price, " thousand rupes for used ac nd 55000 thsnd for new ac");
    }
    else if (name === "Orient" && size === 1) {
        var price = 170000;
        console.log(price, " thousand rupes for used ac nd 55000 thsnd for new ac");
    }
    else {
        return undefined;
    }
};
ac('Orient', 1.5, 'text');
ac('Orient', 1, 6);
