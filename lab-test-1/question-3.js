
let fs = require("fs")
// let path = require("path");
let directory = "./Logs"



function removeLogFiles(){
  if (fs.existsSync(directory)) {
    process.chdir(directory)
    fs.readdir(process.cwd(), (e, files) => { //list all files in the directory
      files.forEach((file) => {
        fs.unlink(file, (e) =>
         console.log(`delete files...${file}`)
        )
      })
    })
  }
}


function createLogFiles(){
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory)
  }
  process.chdir(directory)
  for (let number = 0; number < 10; number++) {
    fs.writeFileSync(`Log${number}.txt`, `This is the ${number}th Log file!`) 
    console.log(`Log${number}.txt`)
  }
}

createLogFiles()
removeLogFiles()