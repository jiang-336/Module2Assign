const readline = require("readline");
const fs = require("fs");
const argv = require('yargs').argv;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 


var array = fs.readFileSync('filenames.txt').toString().split("\n");

readInput('Enter a filename: ');

function checkFile(fileName) {
    if (array.includes(fileName)) {
        return true;
    }
    else return false;
}

function readInput(message) {
    rl.question(message, (fileName) => {
        if (checkFile(fileName)) {
            readInput('Filename is taken, enter a new filename: ');
        } else {
            write(fileName);
            rl.close();
        }
    });
}

function write(fileName) {
    fs.appendFile('filenames.txt', fileName + '\n', err => {
        if (err) {
            console.log('Error!');
            return;
        }
        fs.writeFile(fileName, 'You are awesome', err => {
            if (err) {
                console.log('Error!');
                return
            }
        });
    });
}



// rl.question("Enter a filename ? ", function(name) {

//     x(name)
//     if(!x(name)){

//         console.log("name is taken,try another");

//     }
//     else{
//    fs.writeFile(name, "You are awesome", (error, data)=>{

//     if(error)
//     {
//         throw "Invalid file operation."
//     }
//     else{
//         console.log("file created")
//     }

//     fs.appendFile('./filenames.txt',name+'\n',function(err){
//             if(err){
//                 console.log.error(err)
//             }
//         });
//     });
// }
// });

// // rl.on("close", function() {
// //     console.log("\nBYE BYE !!!");
// //     process.exit(0);

// function x(name){

//     fs.readFile('filenames.txt', function (err, data) {
//         if (err) throw err;
//         array = data.toString().split("\n");
//         if(array.includes(name)){

//             flag =false;
//             console.log(flag);
//             return false;

//           }
//       });

// }