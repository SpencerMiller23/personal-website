export default function handler(req, res) {
  res.status(200).json({ data: process.env.NEXT_PUBLIC_EMAILJS_USER_ID })
}
