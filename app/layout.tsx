import type { Metadata } from "next";
import ChakraProviders from "@/app/ChakraProvider";
import QueryProviders from "@/app/QueryProviders";
import DefaultLayout from "./(featured-slice)/widgets/layout/ui/DefaultLayout";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    "http://fe-fe-544a1-21216457-67a2ef796b03.kr.lb.naverncp.com/"
  ),
  title: "식선생",
  description: "당신의 식단 관리 서비스",

  openGraph: {
    title: "식선생",
    description: "당신의 식단 관리 서비스",
    url: "www.foodteacher.xyz ",
    siteName: "foodteacher",
    // images: [
    //   {
    //     url: "../../utils/img/OGImg.jpg",
    //     width: 800,
    //     height: 600,
    //   },
    //   {
    //     url: "../../utils/img/OGImg.jpg",
    //     width: 1800,
    //     height: 1600,
    //   },
    // ],

    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/logo.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <QueryProviders>
          <ChakraProviders>
            <DefaultLayout>
              {/* <TheHeader /> */}
              {children}
            </DefaultLayout>
          </ChakraProviders>
        </QueryProviders>
      </body>
    </html>
  );
}
