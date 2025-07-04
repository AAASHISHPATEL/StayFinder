import jwt from "jsonwebtoken"
const isAuth = async (req,res,next) => {

    try {
        const token = req.cookies.token || req.headers.authorization?.split(" ")[1]
        // console.log(token)
        if(!token){
            return res.status(400).json({message:"user doesn't have a token"})
        }
        let verifyToken = jwt.verify(token,process.env.JWT_SECRET)
        if(!verifyToken){
            res.status(400).json({message:"user doesn't have a Validtoken"})
        }
        req.userId = verifyToken.userId
        next()

    } catch (error) {
        res.status(500).json({message:`isAuth error ${error}`})
        
    }
    
}
export default isAuth