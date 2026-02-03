// ఇది ఉదాహరణ మాత్రమే — మీ అసలైన layout.tsx లోని structure ప్రకారం ప్రతిస్థాపించండి
import "./globals.css";
import FontToggleButton from "./components/FontToggleButton";

export const metadata = {
  title: "My App",
  description: "Demo",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{ display: "flex", justifyContent: "flex-end", padding: 12 }}>
          <FontToggleButton />
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
