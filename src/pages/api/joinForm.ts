import formidable from 'formidable'
import { NextApiRequest, NextApiResponse } from 'next'
const nodemailer = require('nodemailer')

export const config = {
  api: {
    bodyParser: false,
  },
}

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL,
      pass: process.env.NEXT_PUBLIC_EMAIL_KEY,
    },
  })
  const form = formidable()
  form.parse(req, async (err, fields, files) => {
    const pdfPath = files?.file?.[0].filepath
    const htmlTemplate = `
    <html>
      <body>
        <h1>Contact Form Submission</h1>
        <p><strong>Name:</strong> ${fields?.name?.[0]}</p>
        <p><strong>Last Name:</strong> ${fields?.lastName?.[0]}</p>
        <p><strong>Email:</strong> ${fields?.email?.[0]}</p>
        <p><strong>Position:</strong> ${fields?.position?.[0]}</p>
        <p><strong>Linkedin:</strong> ${fields?.linkedin?.[0]}</p>
        <p><strong>Phone:</strong> ${fields?.phone?.[0]}</p>
        <p><strong>Time range for being contacted:</strong> ${fields?.time?.[0]}</p>
        <p><strong> What do you think you can bring to the team:</strong> ${fields?.what?.[0]}</p>
        <p><strong>Why you want join us:</strong> ${fields?.why?.[0]}</p>
      </body>
    </html>
  `

    try {
      await transporter.sendMail({
        from: process.env.NEXT_PUBLIC_EMAIL,
        to: 'info@ingenia.la',
        subject: 'Contact Form',
        html: htmlTemplate,
        attachments: [
          {
            filename: files?.file?.[0]?.originalFilename ?? 'pdf',
            path: pdfPath,
          },
        ],
      })
      res.status(200).end()
    } catch (error) {
      res.status(500).end()
    }
  })
}
