import mongoose from "mongoose";

const CategorySchame = mongoose.Schema({
    name: {
        type: String, 
        require: true,
    }, 
    products: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Products'
        }
    ]
});

export default mongoose.model('Category', CategorySchame)