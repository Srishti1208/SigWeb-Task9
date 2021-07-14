const fs = require("fs");

fs.mkdirSync("Srishti"); //Folder 'Srishti' created.

fs.writeFileSync("Srishti/task.txt","My name is Srishti Sharma"); //File 'task.txt' created.

fs.appendFileSync("Srishti/task.txt"," Welcome to the FS module"); //File 'task.txt' appended.

const data = fs.readFileSync("Srishti/task.txt", "utf8"); //File read operation. 
console.log(data);

fs.renamesync("Srishti/task.txt", "Srishti/myTask.txt"); //File renamed as 'myTask.txt'.

fs.unlinkSync("Srishti/myTask.txt"); //File 'myTask.txt' deleted.

fs.rmdirSync("Srishti"); //Folder 'Srishti' removed.