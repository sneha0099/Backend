import mongoose, {mongo, Schema} from "mongoose";

const subsriptionSchema = new Schema({
    subscriber: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    channel: {
        type : Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps: true})

export const Subscription = mongoose.model("Subscription" , subsriptionSchema)