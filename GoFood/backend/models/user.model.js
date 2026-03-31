import mongoose, {Schema} from "mongoose";

const userSchema = ( mongoose.Schema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        location: {
                type: String,
                required: true
        },
        email: {
                type: String,
                required: true
        },
        password: {
                type: String,
                required: true
        },
        date: {
            type: Date,
            default: Date.now

        }
    } 
));

export const user = mongoose.model("user", userSchema);