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
      subject: `[Somnium] Mensagem de ${name}`,
      html: 
			`
			<div style="font-family: Arial, sans-serif; background-color: #f8f8f8; padding: 20px;">
				<div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px;">
					<div style="padding: 20px; background-color: #040013; text-align: center;">
						<h1 style="color: #fff">Som<span style="color: #C77DFF">nium</span></h1>
					</div>
					<div style="padding: 20px;">
						<h2 style="font-size: 24px; color: #4a4a4a;">Nova mensagem! 📩 </h2>
						<p style="font-size: 16px"><strong>Nome:</strong></p>
						<p style="font-size: 14px">${name}</p>
						<p style="font-size: 16px"><strong>E-mail:</strong></p>
						<p style="font-size: 14px">${email}</p>
						<p style="font-size: 16px"><strong>Mensagem:</strong></p>
						<div style="background-color: #f1f1f1; font-size: 14px; padding: 15px; border-left: 4px solid #7c3aed; margin-top: 10px; white-space: pre-wrap;">${message}</div>
						<hr style="margin: 20px 0;" />
						<p style="font-size: 12px; color: #888;">Este e-mail foi gerado automaticamente pelo formulário de contato do site.</p>
					</div>
				</div>
			</div>
			`,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    res.status(500).json({ success: false, error: "Erro ao enviar e-mail" });
  }
}
