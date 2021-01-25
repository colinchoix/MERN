import mongoose from 'mongoose';

const MenuSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: Number,
    catagories: [String],
});

export default mongoose.model("Menu", MenuSchema);