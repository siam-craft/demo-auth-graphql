"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const documentSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ["nid", "driving", "passport"],
        default: "nid",
    },
    image: { type: String },
    verificationTime: { type: Date },
}, {
    timestamps: true,
});
const addressSchema = new mongoose.Schema({
    latitude: { type: Number },
    longitude: { type: Number },
    house: { type: String },
    road: { type: String },
    area: { type: String },
    state: { type: String },
    zip: { type: String },
});
const userSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    mobile: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    hostStatus: {
        type: String,
        enum: ["active", "inactive"],
        default: "inactive",
    },
    address: { type: addressSchema },
    documents: [documentSchema],
});
const User = mongoose.model("User", userSchema);
exports.default = User;
