// function x(){
//     var a=100;
//     return function y() {
//         console.log(a);
//       }         
// }
// var z = x();
// console.log(z);
// z();

// function x(){
//     var a=100;
//      function y() {
//         console.log(a);
//       }      
//       y();   
// }
// x();

// print 1 to 5 after every second
// using var
// for (var i = 1; i < 6; i++) {
//     function close(x) {
//         setTimeout(function () {
//             console.log(x)
//         }, x * 1000)
//     }
//     close(i);
// }
// using let
// for(let i=1; i<6; i++){
//     setTimeout(()=>{console.log(i)}, i*1000)
// }