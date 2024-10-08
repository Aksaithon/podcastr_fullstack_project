import LeftSidebar from "@/components/LeftSidebar";
import MobileNav from "@/components/MobileNav";
import RightSidebar from "@/components/RightSidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" relative flex flex-col ">
      <main className=" relative flex bg-black-3 ">
        <LeftSidebar />

        <section className=" flex min-h-screen flex-1 px-4 sm:px-14 ">
          <div className=" mx-auto flex flex-col w-full max-w-5xl  max-sm:px-4 ">
            <div className="text-white-1 flex h-16 items-center justify-between md:hidden ">
              <Image
                src={"/icons/logo.svg"}
                width={30}
                height={30}
                alt="menu icon"
              />
              <MobileNav />
            </div>
            <div className="text-white-1 flex flex-col md:pb-14 ">
              Toster
              {children}
            </div>
          </div>
        </section>
        <RightSidebar />
      </main>
    </div>
  );
}
