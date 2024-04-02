import "@/shared/styles/globals.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <main className="bg-neutral-500 text-3xl">{children}</main>
    </html>
  );
}
