import React from "react";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>New message from your portfolio site</title>
      </head>
      <body
        style={{
          margin: 0,
          padding: "24px",
          backgroundColor: "#f3f4f6",
          color: "#111827",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            padding: "24px",
            border: "1px solid #e5e7eb",
            borderRadius: "6px",
            backgroundColor: "#ffffff",
          }}
        >
          <h1 style={{ marginTop: 0, fontSize: "24px", lineHeight: 1.25 }}>
            You received the following message from the contact form
          </h1>
          <p style={{ whiteSpace: "pre-wrap", overflowWrap: "anywhere" }}>
            {message}
          </p>
          <hr style={{ border: 0, borderTop: "1px solid #e5e7eb" }} />
          <p>The sender&apos;s email is: {senderEmail}</p>
        </div>
      </body>
    </html>
  );
}