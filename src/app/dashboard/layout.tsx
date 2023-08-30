import Header from "@/components/header";
import SideMenu from "@/components/sideMenu";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <SideMenu />
      {children}
    </div>
  );
}
