import mongoose from "mongoose";

const Connection = async (username, password) => {
  // const URL = `mongodb+srv://${username}:${password}@ecommerce-web.40z8i3t.mongodb.net/ECOMMERCE?retryWrites=true&w=majority`;
  const URL = `mongodb+srv://user2:use2@test.1u8kmed.mongodb.net/TESTPROJ?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with database:", error.message);
  }
};

export default Connection;
