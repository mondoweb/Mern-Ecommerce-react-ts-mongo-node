import { Express, Request, Response } from 'express'



const routes = (app: Express) => {
    app.get('/test', (req: Request, res: Response) => {
        res.status(404).json({ message: 'test' })
         //  vai ->  http://localhost:5000/test
    })



 /*  PostMan  -> richiesta get */
    // get user
    // get all users --admin
    // create user - register

/*   ***********  Session   *************   */
    // get sessions
    // get all sessions --admin
    // create session - login
    // delete session - logout




/*   *********** Category   *************   */
    // get categories
    // create category --admin
    // delete category --admin


    // get subCategories
    // create subCategory --admin
    // delete subCategory --admin


    // get products
    // create product --admin
    // delete product --admin



    
}

export default routes  ;
