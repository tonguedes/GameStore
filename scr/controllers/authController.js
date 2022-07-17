
import User from "../models/user.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


  class AuthController {

  static gerarToken(param){
    return jwt.sign(param, process.env.API_SECRET, {
      expiresIn: 86400
    })
  }

   

    static userRegister =async(request, response)=>{
      const {email,name,lastName,password} = request.body;

      const possibleUser =await User.findOne({email})
      if(possibleUser)
      return response.status(400).send({error:"Usuário com email cadastrado"})

      const user=await User.create({email,name,lastName,password})
      user.password =undefined;
      return response.status(200).send({"message":"Usuário  cadastrado", user})

    }
  


    //função autentificação 
    static auth = async(req,res)=>{
      const{email,password}=req.body;
      console.log(req.body)
      const user = await User.findOne({email}).select("+password")

      if(!user)
      return res.status(400).send({error:"Usuário não encontrado"})


      const aSenhaEhIgual = await bcrypt.compare(password, user.password)
      if(!aSenhaEhIgual )
      return res.status(400).send({error:"A senha é invalida"})
      
      user.password = undefined;
      return res.send({
          user,
          token: this.gerarToken({id: user.id}) 
      })

      
    }
    
    
  
  }
  
export default AuthController;