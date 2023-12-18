"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeDefs = `#graphql
  type Document {
    type: String
    image: String
    verificationTime: String
    createdAt: String
    updatedAt: String
  }

  type Address {
    latitude: Float
    longitude: Float
    house: String
    road: String
    area: String
    state: String
    zip: String
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    mobile: String
    email: String
    password: String
    token: String
    hostStatus: String
    address: Address
    documents: [Document]
  }

  input DocumentInput {
    type: String
    image: String
    verificationTime: String
  }

  input AddressInput {
    latitude: Float
    longitude: Float
    house: String
    road: String
    area: String
    state: String
    zip: String
  }

  input UserInput {
    firstName: String
    lastName: String
    mobile: String
    email: String
    password: String
    hostStatus: String
    address: AddressInput
    documents: [DocumentInput]
  }

  input RegisterInput {
    firstName: String
    lastName: String
    email: String
    password: String
  }

  input LoginInput {
    email: String
    password: String
  }

  type Query {
    getUsers: [User]
    getUserByEmail(email: String): User
  }  

  type Mutation {
    createUser(userInput: UserInput): User
    deleteUser(userId: String): User
    updateUser(userId: String, userInput: UserInput): User
    registerUser(registerInput: RegisterInput): User
  }
  
`;
exports.default = typeDefs;
