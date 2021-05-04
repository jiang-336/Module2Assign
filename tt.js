const readline = require("readline");
const fs = require("fs");
const argv = require('yargs').argv;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


var array = fs.readFileSync('filenames.txt').toString().split("\n");



function ifFileExists(fileName) {
    if (array.includes(fileName)) {
        return true;
    }
    else return false;
}

function askForUserInput(message) {
    rl.question(message, (fileName) => {
        if (ifFileExists(fileName)) {
            askForUserInput('File already exists, Please provide a new filename: ');
        } else {
            writeToFile(fileName);
            rl.close();
        }
    });
}

function writeToFile(fileName) {
    fs.appendFile('filenames.txt', fileName + '\n', err => {
        if (err) {
            console.log('Error occured');
            return;
        }
        fs.writeFile(fileName, 'You are awesome', err => {
            if (err) {
                console.log('Error occured');
                return
            }
        });
    });
}

askForUserInput('Please provide the filename:=>');



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