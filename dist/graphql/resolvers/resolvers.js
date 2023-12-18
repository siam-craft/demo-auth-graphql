"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const user_model_1 = __importDefault(require("../../models/user.model"));
exports.resolvers = {
    Query: {
        getUsers: () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const users = yield user_model_1.default.find();
                return users;
            }
            catch (error) {
                throw new Error("Error fetching users from MongoDB");
            }
        }),
        getUserByEmail: (_, { email }) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const user = yield user_model_1.default.findOne({ email });
                return user;
            }
            catch (error) {
                throw new Error("Error fetching user from MongoDB");
            }
        }),
    },
    Mutation: {
        createUser: (_, { userInput }) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const newUser = yield user_model_1.default.create(userInput);
                return newUser;
            }
            catch (error) {
                throw new Error("Error creating user in MongoDB");
            }
        }),
        deleteUser: (_, { userId }) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const deletedUser = yield user_model_1.default.findByIdAndDelete(userId);
                if (!deletedUser) {
                    throw new Error("User not found");
                }
                return deletedUser;
            }
            catch (error) {
                throw new Error("Error deleting user from MongoDB");
            }
        }),
        updateUser: (_, { userId, userInput }) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const updatedUser = yield user_model_1.default.findByIdAndUpdate(userId, userInput, {
                    new: true,
                });
                if (!updatedUser) {
                    throw new Error("User not found");
                }
                return updatedUser;
            }
            catch (error) {
                throw new Error("Error updating user in MongoDB");
            }
        }),
        registerUser: (_, { registerInput: { firstName, lastName, email, password } }) => __awaiter(void 0, void 0, void 0, function* () {
            console.log(firstName, lastName, email, password);
            // check if the email is already registerd
        }),
    },
};
