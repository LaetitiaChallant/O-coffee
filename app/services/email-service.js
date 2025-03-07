// Looking to send emails in production? Check out our Email API/SMTP product!
import { MailtrapClient } from "mailtrap";

const TOKEN = "3f0ded4ebcf406d1d26c1f26e90369ec";

const client = new MailtrapClient({
  token: TOKEN,
  testInboxId: 3458698,
});

export async function sendEmail(name, email, message) {
  const sender = {
    email: email,
    name: name,
  };
  
  const recipients = [
    {
      email: "challantlaetitia@gmail.com",
    }
  ];
  
  try {
    const response = await client.testing.send({
      from: sender,
      to: recipients,
      subject: "You are awesome!",
      text: message,
      category: "Integration Test",
    });
    console.log("Email envoyé avec succès :", response);
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email :", error);
    throw error;
  }
}