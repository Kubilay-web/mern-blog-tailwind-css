import nodemailer from "nodemailer";
import Newsletter from "../models/NewsletterModel";

// Nodemailer ile mail gönderimi için transporter ayarı
const transporter = nodemailer.createTransport({
  service: "gmail", // Gmail kullanıyoruz, diğer servisler için ayarları değiştirebilirsiniz
  auth: {
    user: "kubilayozdemir95@gmail.com", // Kendi e-posta adresiniz
    pass: "Kubilay987654321", // E-posta şifreniz (Eğer 2FA varsa, app password kullanın)
  },
});

// E-Bülten Kaydı İşlemi
export const subscribe = async (req, res) => {
  const { email } = req.body;

  try {
    // Eğer e-posta zaten kayıtlıysa hata döndür
    let existingEmail = await Newsletter.findOne({ email });
    if (existingEmail) {
      return res
        .status(400)
        .json({ message: "Bu e-posta adresi zaten kayıtlı." });
    }

    // Yeni bir e-posta kaydı oluştur
    const newSubscriber = new Newsletter({ email });
    await newSubscriber.save();

    // Başarı mesajını içeren bir e-posta oluştur
    const mailOptions = {
      from: "your-email@gmail.com", // Kendi e-posta adresiniz
      to: email, // Kullanıcının e-posta adresi
      subject: "Successfully Subscribed to E-Newsletter",
      text: `Hello, you have successfully subscribed to our e-newsletter using the email: ${email}. Thank you!`,
    };

    // E-postayı gönder
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return res
          .status(500)
          .json({ message: "E-posta gönderilirken bir hata oluştu." });
      } else {
        console.log("E-posta gönderildi: " + info.response);
        return res.status(201).json({
          message:
            "E-Bülten kaydınız başarıyla oluşturuldu ve e-posta gönderildi.",
        });
      }
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Bir hata oluştu. Lütfen daha sonra tekrar deneyin." });
  }
};
