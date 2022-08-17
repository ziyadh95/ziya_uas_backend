import mongoose from "mongoose";
 
const User = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    nim:{
        type: Number,
        required: true
    },
    kelas:{
        type: String,
        required: true
    },
    semester:{
        type: Number,
        required: true
    },
    jenis_kelamin:{
        type: String,
        required: true
    },
    alamat:{
        type: String,
        required: true
    },
});
 
export default mongoose.model('Users', User);