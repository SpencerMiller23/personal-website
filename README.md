This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Setup

### 1) Install dependencies and start dev server

run `npm run setup`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Useful documentation

- [Next.js](https://nextjs.org/docs) - Learn about Next.js features and API.
- [tailwindcss](https://tailwindcss.com/docs/installation) - CSS framework used for this project.
- [EmailJS](https://www.emailjs.com/docs/sdk/installation/) - API used for sending emails from the frontend app

### Form validation

In order to validate the form content before submission, I first checked whether any of the forms are empty. If not, then the function proceed to verify if the email address is valid by comparing it with a regular expression found [here](https://www.simplilearn.com/tutorials/javascript-tutorial/email-validation-in-javascript)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
