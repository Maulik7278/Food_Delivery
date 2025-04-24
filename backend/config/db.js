import mongoose from "mongoose";

export const connectDB=async ()=>{
    await mongoose
      .connect(
        "mongodb+srv://maulik:Maulik%407278@cluster0.olqht2v.mongodb.net/food_delivery"
      )
      .then(() => console.log("DB connected"));
}



// mongodb+srv://sadayrmca23:sadaymca23@cluster0.suu9o.mongodb.net