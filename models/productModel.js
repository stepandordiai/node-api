const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
    {
        date: {
            // type: String,
            // required: [true, "Please enter date"],
        },
        info: {
            // type: String,
            // required: false,
        },
        // info2: "",
        // info3: "",
        // info4: "",
        // info5: "",

        // quantity: {
        //     type: Number,
        //     required: true,
        //     default: 0
        // },
        // price: {
        //     type: Number,
        //     required: true,
        // },
        // image: {
        //     type: String,
        //     required: false,
        // }
    }
    // {
    //     timestamps: true,
    // }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
