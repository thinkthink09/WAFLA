import OpenAI from "openai";
import { zodTextFormat } from "openai/helpers/zod";
import { z } from "zod";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const responseSchema = z.object({
  items: z.array(
    z.object({
      title: z.string(),
      describe: z.string(),
      amount: z.number(),
    })
  ),
});

export async function POST(request: Request) {
  try {
    console.log("Calling OpenAI API...");

    const { prompt } = await request.json();

    if (!prompt) {
      return new Response("No prompt provided", { status: 400 });
    }

    // Chat with OpenAI API
    const response = await openai.responses.parse({
      model: "gpt-4.1",
      input: [
        // {
        //   role: "system",
        //   content:
        //     "You are an assistant that provides a summary of a prompt and generates a title, description, and amount for it.",
        // },
        {
          role: "user",
          content: `${prompt}`,
        },
      ],
      text: {
        format: zodTextFormat(responseSchema, "response-schema"),
      },
      // stream: true,
    });

    console.log("Response from OpenAI API:", JSON.stringify(response.output_parsed));

    // Return the readable stream
    return Response.json(response.output_parsed);
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    throw error;
  }
}
