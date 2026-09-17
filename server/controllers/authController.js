const User = require("../models/User");
const generateToken = require("../utils/generateToken");

const registerUser = async (req, res, next) => {
  try {
    const {
      name,
      mobile,
      email,
      dateOfBirth,
      gender,
      education,
      occupation,
      about,
      location,
    } = req.body;

    if (!name || !mobile || !dateOfBirth || !gender) {
      return res.status(400).json({
        success: false,
        message: "Name, mobile, date of birth and gender are required",
      });
    }

    const existingUser = await User.findOne({ mobile });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User with this mobile number already exists",
      });
    }

    const user = await User.create({
      name,
      mobile,
      email,
      dateOfBirth,
      gender,
      education,
      occupation,
      about,
      location,
      role: "user",
      verification: {
        status: "pending",
        documentType: "government_id",
      },
      accountStatus: "active",
    });

    const token = generateToken(user._id);

    res.status(201).json({
      success: true,
      message: "Registration successful",
      data: {
        user: {
          id: user._id,
          name: user.name,
          mobile: user.mobile,
          verificationStatus: user.verification.status,
          role: user.role,
        },
        token,
      },
    });
  } catch (error) {
    next(error);
  }
};

const getCurrentUser = async (req, res, next) => {
  try {
    const user = req.user;

    res.status(200).json({
      success: true,
      data: {
        id: user._id,
        name: user.name,
        mobile: user.mobile,
        email: user.email,
        dateOfBirth: user.dateOfBirth,
        gender: user.gender,
        profilePhoto: user.profilePhoto,
        education: user.education,
        occupation: user.occupation,
        about: user.about,
        location: user.location,
        verification: user.verification,
        role: user.role,
        accountStatus: user.accountStatus,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  registerUser,
  getCurrentUser,
};
