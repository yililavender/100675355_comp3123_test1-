const fs = require("fs")

const removeLogFiles = () => {
  const logDirectory = "./Logs"
  if (fs.existsSync(logDirectory)) {
    process.chdir(logDirectory)
    fs.readdir(process.cwd(), (e, files) => {
      files.forEach((file) => {
        fs.unlink(file, (e) =>
          e ? console.error(`Error deleting LOG'${file}'`) : console.log(`delete files...${file}`)
        )
      })
    })
  }
}


const createLogFiles = () => {
  const logDirectory = "./Logs"
  if (!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory)
  }
  process.chdir(logDirectory)
  for (let number = 0; number < 10; number++) {
    fs.writeFile(`Log${number}.txt`, `This is the ${number}th Log file!`, (e) =>
      e ? console.error(`Error creating Log${number}.txt`) : console.log(`Log${number}.txt`)
    );
  }
}


createLogFiles()
removeLogFiles()