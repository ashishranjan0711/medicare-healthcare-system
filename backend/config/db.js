import mongoose from "mongoose";

export const connectDB = async ()=> {
  await mongoose.connect("mongodb+srv://helloashish88_db_user_medicalcare:ashsih123456789@medicalcare.lpnh7aa.mongodb.net/MediCare")
  .then(() => {console.log("DB connected")})
}

