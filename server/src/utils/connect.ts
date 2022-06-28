import mongoose from "mongoose"
import config from "config"



//  const connect = async () => {
//      const dbUri = config.get<string>('dbUri')

//      try {
//          await mongoose.connect(dbUri)
//          console.log('Connected to DB')
//      } catch (err) {
//          console.log('Could not connect to DB')
//          process.exit(1)
//      }
//   }



const   connect = async () => {
    const dbUri = config.get<string>('dbUri')

    try {
       await  mongoose.connect(dbUri) 
        console.log("Connessooooo!!!!!!!!")
    } catch (e) {
        console.log("CLoud non si connete al db")
     process.exit(1);
    }


}


export default connect ;