import mongoose from "mongoose";
import bcrypt from "bcryptjs"

const userSchema = new mongoose.Schema(
    {
        "name":{
            type: String,
            required: true
        },
        "email":{
            type: String,
            required: true,
            unique:true,
            lowercase:true
        },
        "password":{
            type: String,
            required:true,
            select: false
        }
    }
)
userSchema.pre("save",async function(next){
    const hash =  await bcrypt.hash(this.password,12)
    this.password = hash
    next()

})



const User = mongoose.model('user', userSchema);
export default User;