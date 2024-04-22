const { User } = require("../models");

class UserRepository {
  async addUser(userData) {
    try {
      const user = await User.create({
        username: userData.username,
        email: userData.username,
      });

      return user;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async getUser(userId) {
    try {
      const user = await User.findById(userId);
      return user;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async updateUser(userId, userData) {
    try {
      const user = await User.findByIdAndUpdate(userId, userData, {
        new: true,
      });
      console.log("In the Repo", user);
      return user;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  
}

module.exports = UserRepository;
