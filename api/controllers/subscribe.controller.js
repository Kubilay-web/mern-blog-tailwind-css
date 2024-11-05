import Subscribe from "../models/subscribe.model.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

// .env dosyasını yükleyin
dotenv.config();

// Nodemailer transporter ayarı
const transporter = nodemailer.createTransport({
  service: "gmail", // Gmail ya da başka bir servis
  auth: {
    user: process.env.EMAIL_USER, // Gönderici e-posta adresi
    pass: process.env.EMAIL_PASS, // Gönderici e-posta şifresi
  },
});

export const subscribeUser = async (req, res) => {
  const { email } = req.body;

  try {
    // E-posta adresinin zaten abone olup olmadığını kontrol et
    const existingUser = await Subscribe.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Already subscribed" });
    }

    // Yeni abone oluştur
    const newSubscriber = new Subscribe({ email });
    await newSubscriber.save();

    // E-posta gönder (HTML formatında)
    await transporter.sendMail({
      from: process.env.EMAIL_USER, // Gönderen e-posta adresi
      to: email, // Alıcı e-posta adresi
      subject: "Successfully Subscribed",
      html: `
        <h1>Thank you for subscribing to our newsletter!</h1>
        <p>We're excited to have you with us.</p>
        <p>You will now receive updates from us.</p>
        <br/>
        <p>Best regards,<br/>The Team</p>
      `, // HTML formatında e-posta içeriği
    });

    return res.status(201).json({ message: "Successfully subscribed" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to subscribe" });
  }
};
