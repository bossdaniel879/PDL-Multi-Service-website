import "./globals.css";

export const metadata = {
  title: "PDL Multi-Services",
  description: "Lawn Care, Junk Removal, Construction & More"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default function HomePage() {
  return (
    <main>
      {/* PASTE YOUR HTML CONTENT HERE */}
      
      <h1>PDL Multi-Services</h1>
      <p>
        Lawn Care, Junk Removal, Construction, and more.
        No excuses. Just results.
      </p>

    </main>
  );
}
