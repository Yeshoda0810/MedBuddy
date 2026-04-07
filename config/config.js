require('dotenv').config();

const Port = process.env.PORT || 4000;

const MongodbUrl = "mongodb+srv://yashoda83741_db_user:Yeshodagantyada@yeshoda.47jpted.mongodb.net/medbuddy?retryWrites=true&w=majority";

module.exports = {
  Port,
  MongodbUrl
};