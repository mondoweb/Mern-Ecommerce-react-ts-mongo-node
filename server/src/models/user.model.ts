import { Document, model, Schema } from "mongoose";

// User   
// firstName - lastName - email - password - address - role

export interface UserDocument extends Document {
  user: UserDocument["_id"];
  fistName: string;
  lastName: string;
  email: string;
  password: string;
  andress: string;
  role: string;
}

const UserSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  fistName: {
    type: String,
  },

  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  andress: {
    type: String,
  },

  role: {
    type: String,
  },
});


const Utente = model<UserDocument>("user", UserSchema);

export default Utente;







   