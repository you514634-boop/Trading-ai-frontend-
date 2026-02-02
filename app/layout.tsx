import "./globals.css";

export const metadata = {
  title: "Trading AI Assistant",
  description: "Beginner friendly AI trading assistant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#020617", color: "white" }}>
        {children}
      </body>
    </html>
  );
}
