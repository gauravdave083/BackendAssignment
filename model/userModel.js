import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
        name:{
                type: String,
                required : true
        },
        img:{
            type: String,
            required : true
        },
        summary:{
            type: String,
            required : true
        },
});

export default mongoose.model("users", userSchema);
