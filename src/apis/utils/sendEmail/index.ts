import nodemailer from 'nodemailer';

/**
 * @author Emmanuel N.
 * @since 11th june 2022
 * @param {Object} option - payload cantaining what sendmail need
 */
export const emailSender = async (options: any) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.TRANSPORTER_SERVICE,
      port: 587,
      auth: {
        user: process.env.SERVICE_USERNAME,
        pass: process.env.SERVICE_PASSWORD,
      },
      secure: false,
      logger: true,
      debug: true,
    });
    const mailOptions = {
      from: `YEAN <${process.env.SERVICE_USERNAME}>`,
      to: options.email,
      subject: options.subject,
      html: options.message,
    };
    console.log(mailOptions);
    return transporter.sendMail(mailOptions);
  } catch (err) {
    throw err;
  }
};
