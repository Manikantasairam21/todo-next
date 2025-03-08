import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const prisma=new PrismaClient();
export async function POST(request){
    try {
        const { name,email,password }=await request.json();
        const existingUser =await prisma.user.findUnique({
            where:{email,
            },
        });
        if(existingUser){
            return Response.json(
            {
                message:"Already have an account.please Login ",
            },
        {
            status:409,
        });
    } 
    const salt=await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(password,salt);
    const newUser=await prisma.user.create({
        data:{
            name,
            email,
            password:hashedPassword,
        },
    });
    if(newUser){
        const token=jwt.sign({userId:newUser},process.env.JWT_SECRET,
            {
                expiresIn:process.env.JWT_EXPIRES,
            }
        );
        const cookiesStore=await cookies();
        cookiesStore.set("token",token,{
            httpOnly:true,
            path:"/",
            maxAge: 24 * 60 * 60,
            sameSite:"strict",
        });
        return Response.json({
            message:"User Registered",
        },
    {
        status:201,
    });
    }
    }catch (error) {
        return Response.json({
            message:"something went wrong",
        },
    {
        status:500,
    });
    }
}