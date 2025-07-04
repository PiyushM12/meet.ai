import { betterAuth } from "better-auth";
 import { drizzleAdapter } from "better-auth/adapters/drizzle";
 import { db } from "@/db";
 import * as schemas from "@/db/schema";    
export const auth = betterAuth({
    socialProviders: {
        github: { 
            clientId: process.env.GITHUB_CLIENT_ID as string, 
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string, 
        },
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID as string, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            scope: [
            "openid",
            "email",
            "profile",
            "https://www.googleapis.com/auth/calendar.readonly",
            ],

        },  
    },
    emailAndPassword:{
        enabled: true,
        
    },
    //...
     database: drizzleAdapter(db, {
        provider: "pg", // or "mysql", "sqlite"
        schema:{
            ...schemas,
        }
     })
})