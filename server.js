import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();

app.use(cors());
app.use(express.json());



app.post("/sendEmail", (req, res) => {
    const {
        url,
        telefono,
        empresa,
        ciudad,
        email,
        selectedOption
    } = req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "desarrollowebodm@gmail.com",
            pass: "dwjxplmpaluexeun",
        },
    });

    const mailOptions = {
        from: "desarrollowebodm@gmail.com",
        to: "jcmurillo@odm.com.mx",
        cc: ['cma@odm.com.mx', 'jefedigitalodm@gmail.com'],
        subject: "Nuevo cliente potencial",
        html: `
        <div>
        <img src="https://odm.com.mx/images/ODMenvios.png" alt="logo" border="0" width="300" height="auto" />
        <h1>¡Nuevo cliente potencial!</h1>
        <p>Nombre: ${url}</p>
        <p>Teléfono: <a href="tel:${telefono}">${telefono}</a></p>
        <p>Empresa: ${empresa}</p>
        <p>Ciudad: ${ciudad}</p>
        <p>Email: ${email}</p>
        <p>Opción elegida: ${selectedOption}</p></div>
      `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send("Ocurrió un error al enviar el correo electrónico.");
        } else {
            console.log("Correo enviado", info.response);
            res.status(200).send("¡Tus datos se han enviado correctamente!");
        }
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
});