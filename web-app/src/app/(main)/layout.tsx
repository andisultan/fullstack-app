import SiteHeader from "@/components/layouts/site-header";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SiteHeader />
      <main className="container m-auto">{children}</main>
    </>
  );
}
