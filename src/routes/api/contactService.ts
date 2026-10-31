import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/contactService")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = await request.json().catch(() => null);
          if (!body) {
            return Response.json(
              { success: false, message: "invalid request body" },
              { status: 400 },
            );
          }

          //   Now destructure the content of the body and define their types.
          const { fullname, email, message } = body as {
            fullname: string;
            email: string;
            message: string;
          };

          //   Check if the content of the body are available else return error message
          if (!fullname?.trim() || !email?.trim() || !message?.trim()) {
            return Response.json(
              { success: false, message: "All field is required, please input all fields" },
              { status: 400 },
            );
          }

          //   set resend api key to send mail
          const apiKey = process.env.RESEND_API_KEY;
          if (!apiKey) {
            return Response.json(
              { success: false, message: "Server Error, no api key found" },
              { status: 500 },
            );
          }

          const { Resend } = await import("resend");
          const resend = new Resend(apiKey);

          const { data, error } = await resend.emails.send({
            from: "info@brandmasonlimited.com",
            to: "georgejoshuaayomiposi@gmail.com",
            subject: "Brand Mason: Contact Us",
            replyTo: email.trim(),
            text: `Name: ${fullname.trim()} \n\nEmail: ${email.trim()} \n\nMessage: ${message.trim()}`,
          });

          if (error) throw new Error(error.message);
          return Response.json({
            success: true,
            message: "Email sent successfully",
            emailId: data?.id,
          });
        } catch (error) {
          console.log(error);
          return Response.json(
            { success: false, message: "Failed to send Email" },
            { status: 500 },
          );
        }
      },
    },
  },
});
