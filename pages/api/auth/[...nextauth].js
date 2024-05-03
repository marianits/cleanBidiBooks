import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import axios from 'axios';

//Options inside the object configuration
//https://next-auth.js.org/configuration/options#callbacks

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Email",
      label: "Iniciar sesión",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Ingrese su email" },
        password: { label: "Password", type: "password", placeholder: "Ingrese su password" }
      },
      async authorize(credentials, req) {
        let user = { email: credentials.email, password: credentials.password };
        const response = await axios.post('http://localhost:3000/api/login', user);
        if (response.status === 200) {
          return response.data
        } else {
          return null
        }
      }
    })
  ],
  callbacks: {
    async jwt(params) {
      // update token
      if (params.user?.role) {
        params.token.role = params.user.role;
      }
      // return final_token
      return params.token;
    },
    async session({ session, token }) {
      // Send properties to the client
      const { data } = await axios.post('http://localhost:3000/api/users/find', {selector: session.user.email});
      session.user.userId = data._id;
      session.user.role = token.role;
      return session;
    }
  }
})
