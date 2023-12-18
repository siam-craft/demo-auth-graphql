import User from "../../models/user.model";

export const resolvers = {
  Query: {
    getUsers: async (): Promise<any> => {
      try {
        const users = await User.find();
        return users;
      } catch (error) {
        throw new Error("Error fetching users from MongoDB");
      }
    },
    getUserByEmail: async (
      _: any,
      { email }: { email: string },
    ): Promise<any> => {
      try {
        const user = await User.findOne({ email });
        return user;
      } catch (error) {
        throw new Error("Error fetching user from MongoDB");
      }
    },
  },
  Mutation: {
    createUser: async (_: any, { userInput }: any): Promise<any> => {
      try {
        const newUser = await User.create(userInput);
        return newUser;
      } catch (error) {
        throw new Error("Error creating user in MongoDB");
      }
    },
    deleteUser: async (
      _: any,
      { userId }: { userId: string },
    ): Promise<any> => {
      try {
        const deletedUser = await User.findByIdAndDelete(userId);
        if (!deletedUser) {
          throw new Error("User not found");
        }
        return deletedUser;
      } catch (error) {
        throw new Error("Error deleting user from MongoDB");
      }
    },
    updateUser: async (_: any, { userId, userInput }: any): Promise<any> => {
      try {
        const updatedUser = await User.findByIdAndUpdate(userId, userInput, {
          new: true,
        });

        if (!updatedUser) {
          throw new Error("User not found");
        }

        return updatedUser;
      } catch (error) {
        throw new Error("Error updating user in MongoDB");
      }
    },

    registerUser: async (
      _: any,
      { registerInput: { firstName, lastName, email, password } }: any,
    ): Promise<any> => {
      console.log(firstName, lastName, email, password);
      // check if the email is already registerd
    },
  },
};
