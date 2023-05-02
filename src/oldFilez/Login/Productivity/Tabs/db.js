import { connect } from "mongoose";

export async function connectToDatabase() {
  const uri = "mongodb+srv://<username>:<password>@<cluster>/<database>?retryWrites=true&w=majority";
  const options = { useNewUrlParser: true, useUnifiedTopology: true };

  const connection = await connect(uri, options);
  console.log("Database connected");
  return connection;
}

export function User(connection) {
  const userSchema = new connection.Schema({
    sub: { type: String, required: true },
    email: { type: String, required: true },
    // Add other fields as needed
  });

  return connection.model("User", userSchema);
}
