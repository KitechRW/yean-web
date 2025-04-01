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
    const port = Number(process.env.TRANSPORTER_PORT || 465);
    const transporter = nodemailer.createTransport({
      host: process.env.TRANSPORTER_SERVICE,
      port,
      auth: {
        user: process.env.SERVICE_USERNAME,
        pass: process.env.SERVICE_PASSWORD,
      },
      secure: port === 465,
      logger: false,
      debug: false,
    });
    const mailOptions = {
      from: `${from || 'YEAN'} <${process.env.SERVICE_USERNAME}>`,
      to: email,
      subject: subject,
      html: message,
    };
    return await transporter.sendMail(mailOptions);
  } catch (err: any) {
    console.log(err.message);
  }
};

export const emailSenderSendGrid = ({
  email,
  subject,
  message,
}: {
  email: string;
  subject?: string;
  message: string;
}) => {
  const sgMail = require('@sendgrid/mail');

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: email,
    from: {
      email: process.env.SERVICE_USERNAME, 
      name: "YEAN Agro",
    },
    subject,
    html: message,
  };

  return sgMail.send(msg).catch((error: any) => {
    console.error(error);
  });
};
