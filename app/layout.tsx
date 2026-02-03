import "./globals.css";
import FontToggleButton from "./components/FontToggleButton";

export const metadata = {
  title: "Trading AI Frontend",
  description: "Minimal Trading AI frontend demo"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{ display: "flex", justifyContent: "flex-end", padding: 12 }}>
          <FontToggleButton />
        </header>

        <main style={{ padding: 24 }}>{children}</main>
      </body>
    </html>
  );
}
