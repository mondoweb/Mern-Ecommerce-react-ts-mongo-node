import {object , string} from 'zod'


const createSessionSchema =object({
    body: object({
        email: string({ required_error: "Email è obbligatoria "  }) ,
        password: string( { required_error: " Password è obbligatoria" } )
    }) 

}) ;



export default createSessionSchema ;