import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const prisma = new PrismaClient();

export async function POST(request) {
  const { email, password } = await request.json();

  // Find user by email
  const newUser = await prisma.user.findUnique({ where: { email } });

  if (!newUser || !bcrypt.compareSync(password, newUser.password)) {
    return Response.json(
      { message: "Email or Password is incorrect. Please provide correct credentials." },
      { status: 401 }
    );
  }

  // Sign JWT with userId
  const token = jwt.sign({ userId: newUser.id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });

  // Set cookie
  const cookiesStore = await cookies();
  cookiesStore.set("token", token, {
    httpOnly: true,
    path: "/",
    maxAge: 24 * 60 * 60, // 1 day in seconds
    sameSite: "strict",
  });

  return Response.json({ message: "Logged in successfully" }, { status: 200 });
}
