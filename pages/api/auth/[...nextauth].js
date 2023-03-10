import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import axios from 'axios';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        console.log('First');
        const user = { email: credentials.email, password: credentials.password }
        const response = await axios.post('http://localhost:3000/api/login', user);
        if (response.status === 200) {
          return user
        } else {
          return null
        }
      }
    })
  ]
})

