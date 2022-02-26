This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Setup

### 1) Install dependencies and start dev server: `npm run setup`
### 2) Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Useful documentation

- [Next.js](https://nextjs.org/docs) - Learn about Next.js features and API.
- [tailwindcss](https://tailwindcss.com/docs/installation) - CSS framework used for this project.
- [EmailJS](https://www.emailjs.com/docs/sdk/installation/) - API used for sending emails from the frontend app

### Form validation

In order to validate the form content before submission, I first checked whether any of the forms are empty. If not, then the function proceed to verify if the email address is valid by comparing it with a regular expression found [here](https://www.simplilearn.com/tutorials/javascript-tutorial/email-validation-in-javascript)
