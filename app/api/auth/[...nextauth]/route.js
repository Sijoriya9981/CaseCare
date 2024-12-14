

import NextAuth from "next-auth/next";

console.log(process.env.DESCOPE_API)
console.log(process.env.DESCOPE_CLIENT_ID)

export const authOptions = {
    providers: [
        {
            id: "descope",
            name: "Descope",
            type: "oauth",
            wellKnown: `https://api.descope.com/${process.env.DESCOPE_API}/.well-known/openid-configuration`,
            authorization: { params: { scope: "openid email profile" } },
            clientId: process.env.DESCOPE_CLIENT_ID,
            clientSecret:"UDJwWjFYT0FTR3F1ZjBNUFZrMWE5TW5idTVncTpLMnFBS0NwMUZmdkJLOHFkTXhXWTBGdFVzZFJp", // Securely fetch from env variables
            checks: ["pkce", "state"],
            profile(profile) {
                return {
                    id: profile.sub,
                    name: profile.name,
                    email: profile.email,
                    image: profile.picture,
                };
            },
        },
    ],
   
};
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
