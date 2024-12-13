export const authOptions = {
    providers: [
        {
            id: "descope",
            name: "Descope",
            type: "oauth",
            wellKnown: `https://api.descope.com/${process.env.DESCOPE_API}/.well-known/openid-configuration`,
            authorization: { params: { scope: "openid email profile" } },
            clientId: process.env.DESCOPE_CLIENT_ID,
            clientSecret: process.env.DESCOPE_CLIENT_SECRET, // Securely fetch from env variables
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
    debug: true, // Enable debug logs for more information
};
