import nodemailer from 'nodemailer';

/**
 * @author Emmanuel N.
 * @since 11th june 2022
 * @param {Object} option - payload cantaining what sendmail need
 */
export const emailSender = async ({
  from,
  email,
  subject,
  message,
}: {
  from: string;
  email: string;
  subject?: string;
  message: string;
}) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.TRANSPORTER_SERVICE,
      port: process.env.TRANSPORTER_PORT || 465,
      auth: {
        user: process.env.SERVICE_USERNAME,
        pass: process.env.SERVICE_PASSWORD,
      },
      secure: false,
      logger: true,
      debug: true,
    });
    const mailOptions = {
      from: `${from || 'YEAN'} <${process.env.SERVICE_USERNAME}>`,
      to: email,
      subject: subject,
      html: message,
    };
    return transporter.sendMail(mailOptions);
  } catch (err: any) {
    console.log(err.message);
  }
};
