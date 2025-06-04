import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res
            .status(400)
            .json({ success: false, error: "Todos os campos são obrigatórios" });
    }

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: email,
            to: process.env.EMAIL_USER,
            subject: `Mensagem de ${name}`,
            html: `  <div style="font-family: Arial, sans-serif; background-color: #f8f8f8; padding: 20px;">
    <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 20px; border-radius: 8px;">
      <h2 style="color: #4a4a4a;">📩 Nova mensagem!</h2>
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mensagem:</strong></p>
      <div style="background-color: #f1f1f1; padding: 15px; border-left: 4px solid #7c3aed; margin-top: 10px; white-space: pre-wrap;">
        ${message}
      </div>
      <hr style="margin: 20px 0;" />
      <p style="font-size: 12px; color: #888;">Este e-mail foi gerado automaticamente pelo formulário de contato do site.</p>
    </div>
  </div>`,
        });

        res.status(200).json({ success: true });
    } catch (error) {
        console.error("Erro ao enviar e-mail:", error);
        res.status(500).json({ success: false, error: "Erro ao enviar e-mail" });
    }
}
