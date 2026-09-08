const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    // Basic Information
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [2, "Name must contain at least 2 characters"],
      maxlength: [100, "Name cannot exceed 100 characters"],
    },

    mobile: {
      type: String,
      required: [true, "Mobile number is required"],
      unique: true,
      trim: true,
    },

    email: {
      type: String,
      trim: true,
      lowercase: true,
      sparse: true,
    },

    dateOfBirth: {
      type: Date,
      required: [true, "Date of birth is required"],
    },

    gender: {
      type: String,
      enum: ["male", "female", "other"],
      required: [true, "Gender is required"],
    },
    // Profile Information

    profilePhoto: {
      type: String,
      default: "",
    },

    education: {
      type: String,
      trim: true,
      maxlength: 150,
      default: "",
    },

    occupation: {
      type: String,
      trim: true,
      maxlength: 150,
      default: "",
    },

    about: {
      type: String,
      trim: true,
      maxlength: 1000,
      default: "",
    },
    // Location

    location: {
      state: {
        type: String,
        trim: true,
        default: "",
      },

      district: {
        type: String,
        trim: true,
        default: "",
      },

      city: {
        type: String,
        trim: true,
        default: "",
      },
    },
    // Verification

    verification: {
      status: {
        type: String,
        enum: ["pending", "approved", "rejected"],
        default: "pending",
      },

      documentType: {
        type: String,
        enum: ["government_id", "other"],
        default: "government_id",
      },

      documentLast4: {
        type: String,
        default: "",
      },

      verifiedAt: {
        type: Date,
        default: null,
      },

      rejectionReason: {
        type: String,
        default: "",
      },
    },
    // Account

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    accountStatus: {
      type: String,
      enum: ["active", "blocked", "deactivated"],
      default: "active",
    },
  },

  {
    timestamps: true,
  },
);

module.exports = mongoose.model("User", userSchema);
