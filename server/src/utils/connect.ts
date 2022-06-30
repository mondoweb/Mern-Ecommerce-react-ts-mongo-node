import mongoose from "mongoose"
import config from "config"



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