import axios from "axios"

export default function handler(req, res) {
  res.status(200).json({ data: process.env.EMAILJS_USER_ID })
}
