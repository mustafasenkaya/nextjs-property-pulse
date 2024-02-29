import connectDB from "@/config/database";
import Property from "@/models/Property";

// GET /api/properties
export const GET = async (request) => {
  try {
    await connectDB();

    const propeties = await Property.find({});

    //return new Response("Hello World", { status: 200 });
    // return new Response(JSON.stringify({ message: "Hello World" }), {
    //   status: 200,
    // });
    return new Response(JSON.stringify(propeties), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
