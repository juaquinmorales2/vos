export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ color: "#f2f", padding: "20px" }}>{children}</body>
    </html>
  );
}
