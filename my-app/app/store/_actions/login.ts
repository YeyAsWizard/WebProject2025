"use server"

import prisma from "@/utils/db"
import hashPassword from "@/utils/hashPassword"
import { loginUser } from "@/utils/loginUser"

export default async function login(prevState: unknown, formData: FormData) {
    const email = formData.get("email") as string
    const password = formData.get("password") as string
    const remember = (formData.get("remember") === "on") ? true : false

    console.log(email, password, remember)

    const user = await prisma.user.findFirst({ where: {  email }})

    if ( !user ) {
        return {
            error: "User not found",
            message: ""
        }
    }  

    if( user.password !== await hashPassword(password) ) {
        return {
            error: "Invalid password",
            message: "" 
        }
    }
    
    await loginUser(user, remember);
     
    console.log("User:  ", user)
    return {
        error: "",
        message: "User logged in successfully"
    }
}