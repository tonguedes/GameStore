import User from "../models/user.js"

class userController{

      //update
      static update =async(req,res)=>{
        const{email,name,password}= req.body;
       const novoUsuario= await User.findByIdAndUpdate(req.params.id,{email,name,lastName,password})
       return res.status(200).send({"message":"Usuário  cadastrado", novoUsuario})
      }
      //read
      static read =async(req,res)=>{
        const userId =req.id

        try {
          const user = await User.findById(userId)
          return res.status(200).send({user})
        } catch (error) {
          console.log(error);
          return res.status(500).send({"message": "erro nao se preocupe, vamos arrumar"})
        }
      }

      
       static getAllUser = async (req, res) => {
         const userAll = await User.find();
           if (!userAll) return res.status(204).json({ 'message': 'Usuário não encontrado.' });
              res.json(userAll);
      }

      static delete =async(req,res)=>{
        const userId =req.params.id
          await User.findByIdAndDelete(userId)

        return res.status(204).send()
      }
       

    
}

export default userController;