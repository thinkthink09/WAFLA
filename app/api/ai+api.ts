import OpenAI from "openai";
import { zodResponseFormat } from "openai/helpers/zod";
import { z } from "zod";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const responseSchema = z.object({
  title: z.string(),
  body: z.string(),
  summary: z.string(),
  amount: z.number(),
});

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();

    if (!prompt) {
      return new Response("No prompt provided", { status: 400 });
    }

    // Setup streaming response
    const encoder = new TextEncoder();
    const stream = new TransformStream();
    const writer = stream.writable.getWriter();

    // Chat stream
    const completion = openai.beta.chat.completions
      .stream({
        model: "gpt-4o-2024-11-20",
        messages: [
          {
            role: "system",
            content:
              "You are an assistant that provides a summary of a prompt and generates a title, body, and amount for it.",
          },
          {
            role: "user",
            content: `Here is the prompt: ${prompt}`,
          },
        ],
        response_format: zodResponseFormat(responseSchema, "post"),
      })
      .on(
        "content.delta",
        async ({ snapshot, parsed }) => await writer.write(encoder.encode(JSON.stringify(parsed)))
      )
      .on("content.done", async () => await writer.close());

    // Return the readable stream
    return new Response(stream.readable, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    throw error;
  }
}
