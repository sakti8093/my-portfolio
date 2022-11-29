
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const password=process.env.PASSWORD

const connection = async () => {
  try {
    mongoose.connect(
      `mongodb+srv://saktiprasad:${password}@backend2000.kmjifsg.mongodb.net/netmeds?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    )
    console.log('DB CONNECTION ESTABLISHED')
  } catch (err) {
    console.log(err)
  }
}

export default connection