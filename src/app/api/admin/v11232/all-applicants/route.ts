import dbConnect from "@/lib/dbConnect";
import User from "@/model/User";
// import { adminAuthMiddleware } from "@/app/middlewares/AdminAuth";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  await dbConnect();
  // const cookie = request.cookies.getAll();
  // console.log("cookieData", cookie);

  // const authResponse = await adminAuthMiddleware(request);
  // console.log("authresponse", authResponse);
  // if (!authResponse || authResponse.status !== 200) {
  //   return new NextResponse(JSON.stringify({ error: "Unauthorized access" }), {
  //     status: authResponse?.status || 401,
  //     headers: { "Content-Type": "application/json" }
  //   });
  // }

  try {
    const url = new URL(request.url);
    const usertype = url.searchParams.get("usertype");
    const email = url.searchParams.get("email") || "";
    // console.log(usertype);

    let query = {};

    if (usertype === "isVerified") {
      query = { isVerify: true };
    }
    if (usertype === "hasPaid") {
      query = { hasPaid: true };
    }
    if (email) {
      query = { email: email };
    }

    const users = await User.find(query, {
      firstname: 1,
      lastname: 1,
      email: 1,
      mobile: 1,
      state: 1,
      city: 1,
      isVerify: 1,
      hasPaid: 1,
      password: 1,
      isFormSubmitted: 1,
      Investment_Plan: 1,
      business_Types: 1,
      final_form: 1,
      createdAt: 1
    });
    // console.log(users);

    return new Response(JSON.stringify(users), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error fetching users:", error);

    return new Response(JSON.stringify({ error: "Failed to fetch users" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
