import mongoose from 'mongoose';

// 'unique=true' so no image in db collection can have same email
// 'default=false' means at user signup, user is not admin
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, required: true, default: false }
});

// 'User' is name of collection in mongodb
const userModel = mongoose.model('User', userSchema);

export default userModel;