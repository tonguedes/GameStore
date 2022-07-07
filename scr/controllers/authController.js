
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


    
    
    //update
      static update =async(req,res)=>{
        const{email,name,password}= req.body;
       const novoUsuario= await User.findByIdAndUpdate(req.params.id,{email,name,lastName,password})
       return res.status(200).send({"message":"Usuário  cadastrado", novoUsuario})
      }
      //read
      static read =async(req,res)=>{
        const userId =req.params.id

        try {
          const user = await User.findById(userId)
          return res.status(200).send({user})
        } catch (error) {
          console.log(error);
          return res.status(500).send({"message": "erro nao se preocupe, vamos arrumar"})
        }
      }

      static delete =async(req,res)=>{
        const userId =req.params.id
          await User.findByIdAndDelete(userId)

        return res.status(204).send()
      }

  
    
  }

        
  
  

export default AuthController;