import { currentUser } from "@clerk/nextjs/server"
import { db } from "./prisma"

export const checkUser= async()=>{
    const user = await currentUser()
    if(!user){
        return null
    }
    try {
        const loggedInUser = await db.user.findUnique({
            where: {
                clerkUserId: user.id
            }
        })
        if(loggedInUser) return loggedInUser
        const newUser = await db.user.create({
            data: {
                clerkUserId: user.id,
                email: user.emailAddresses[0].emailAddress,
                name:  `${user.name}`,
                imageUrl: user.imageUrl,

            }
        })
        return newUser
    } catch (error) {
        console.log(error.message)
    }
    return user
}