const yargs = require("yargs")

//Tao lenh test
// Create: node app/index.js create --title="Hoc IT" --description="Hoc Node.js"
yargs.command({
    command:"create",
    builder:{
        title:{
            type: String
        },
        description:{
            type: String 
        }
    },
    handler:(argv)=>{
        const { title, description} = argv
        console.log("Title: ", title)
        console.log("Description: ", description)
    }
})

// Real all: node app/index.js realAll 
yargs.command({
    command:"realAll",
    handler:()=>{
        console.log("REAL ALL")
    }
})

// Read detail: node app/index.js realDetail --id="1"
yargs.command({
    command:"realDetail",
    builder:{
     id:{
        type: String
     },
    },
    handler:(argv)=>{
        const { id } = argv
        console.log("ID: ", id)
    }
})

// UPDATE: node app/index.js update --id="1" --title="Hoc IT" --description="Hoc Node.js"
yargs.command({
    command:"update",
    builder:{
     id:{
        type: String
     },
     title:{
        type: String
     },
     description:{
        type: String
     }
    },
    handler:(argv)=>{
        const { id, title, description} = argv
        console.log("ID: ", id)
        console.log("Title: ", title)
        console.log("Description: ", description)
    }
})

// DELETE : node app/index.js delete --id="1" 
yargs.command({
    command:"delete",
    builder:{
     id:{
        type: String
     },
    },
    handler:(argv)=>{
        const { id } = argv
        console.log("ID: ", id)
    }
})

// Luu lai cac lenh vua tao
yargs.parse()