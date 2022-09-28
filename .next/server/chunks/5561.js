"use strict";
exports.id = 5561;
exports.ids = [5561];
exports.modules = {

/***/ 8318:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ emailMocks)
/* harmony export */ });
const {
  HOST
} = process.env;
class emailMocks {
  /**
   * Create user account
   * @param {Object} mailOptions Object
   */
  static async verifyAccount(mailOptions) {
    return `
        <div style="width:85%;margin:auto;">
            <p style="font-family: 'Roboto', sans-serif;font-size: 1.2em;font-weight: 400;line-height: 1.55;color: #222222;margin: 10px 0 30px;padding: 44px 34px 44px 34px;background-color: #ffffff;border-radius: 8px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 210, 190, 129);">
                Hi <span>${mailOptions.email}</span>,<br><br>
                Welcome in the YEAN System and ofcourse in the green world!!<br /> <br />
                In this digital era we must make sure that we are not interacting <br />
                with robots hence we are verifying your email address. <br />
                 <a href="${HOST}/activate-account?activation=${mailOptions.token}"><button type="button" style="   border: none;color: white;padding: 10px; text-align: center;text-decoration: none;display: inline-block;font-size: 16px;margin: 4px 2px;cursor: pointer;background-color: #4CAF50;">click here</button></a>
                <br /><br />
                Welcome again in the green world and we expect you to be creating your account by now :-)<br><br>
                Best,<br>
                <span>YEAN</span>
            </p>
        </div>
      `;
  }

  static async contact(mailOptions) {
    return `
        <div style="width:85%;margin:auto;">
            <p style="font-family: 'Roboto', sans-serif;font-size: 1.2em;font-weight: 400;line-height: 1.55;color: #222222;margin: 10px 0 30px;padding: 44px 34px 44px 34px;background-color: #ffffff;border-radius: 8px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 210, 190, 129);">
                New message from <span>${mailOptions.name} with email: ${mailOptions.email}</span>,<br><br>
                <br />
                <hr />
                <br />
                ${mailOptions.message}
            </p>
        </div>
      `;
  }
  /**
   * Create user account
   * @param {Object} mailData Object
   */


  static async forgetPassword(mailData) {
    const url = `${HOST}/reset-password?token=${mailData.token}`;
    return `
        <div style="width:85%;margin:auto;">
            <p style="font-family: 'Roboto', sans-serif;font-size: 1.2em;font-weight: 400;line-height: 1.55;color: #222222;margin: 10px 0 30px;padding: 44px 34px 44px 34px;background-color: #ffffff;border-radius: 8px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 210, 190, 129);">
               Hello !!!, <br><br>
               No worries humans forget, you are missing in the Green World system:-( <br />
               Straigh forward use this link to catch up and create your YEAN account again <br />
               as usual with our system <br />
               <b style="color:#2E86C1"><a href="${url}" style="color:#4CAF50">click here</a></b><br>
            <strong>NB:</strong><span style="color:OrangeRed">  remember that this link will be expired not too Long </span>
                <br /><br />
                
                Best,<br>
                <span>YEAN</span>
            </p>
        </div>
      `;
  }

}

/***/ }),

/***/ 4340:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ emailSender)
/* harmony export */ });
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @author Emmanuel N.
 * @since 11th june 2022
 * @param {Object} option - payload cantaining what sendmail need
 */

const emailSender = async options => {
  try {
    const transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport({
      host: process.env.TRANSPORTER_SERVICE,
      port: 587,
      auth: {
        user: process.env.SERVICE_USERNAME,
        pass: process.env.SERVICE_PASSWORD
      },
      secure: false,
      logger: true,
      debug: true
    });
    const mailOptions = {
      from: `${options.from || 'YEAN'} <${process.env.SERVICE_USERNAME}>`,
      to: options.email,
      subject: options.subject,
      html: options.message
    };
    console.log(mailOptions);
    return transporter.sendMail(mailOptions);
  } catch (err) {
    throw err;
  }
};

/***/ })

};
;