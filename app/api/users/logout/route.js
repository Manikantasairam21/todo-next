import { cookies } from "next/headers";

export async function GET(request) {
  try {
    const cookiesStore = await cookies();
    cookiesStore.delete("token");
    return Response.json({ message: "Logged out successfully" }, { status: 200 });
  } catch (error) {
    return Response.json({ message: "Logout failed", error: error.message }, { status: 500 });
  }
}
