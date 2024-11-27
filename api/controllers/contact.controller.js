// Gerekli kütüphanelerin import edilmesi
import Contact from "../models/contact.model.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

// .env dosyasını yükleyin
dotenv.config();

export const submitContactForm = async (req, res) => {
  const { NameSurname, Email, Message } = req.body;

  const newContact = new Contact({
    nameSurname: NameSurname,
    email: Email,
    message: Message,
  });

  try {
    await newContact.save();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: Email,
      subject: "İletişim Formu",
      text: "Mesajınız başarıyla gönderildi!",
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Succesfully Send" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error.Please try again." });
  }
};

export const getContactForms = async (req, res) => {
  try {
    const contactForms = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contactForms);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching contact forms." });
  }
};
