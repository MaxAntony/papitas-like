import { Footer } from "@components/Footer";
import { Navbar } from "@components/Navbar";
import { FC, ReactNode } from "react";

type props = { child: JSX.Element }
export const LayoutMain: FC<props> = ({ child }) => {
  return (
    <>
      <Navbar />
      <main>
        {child}
      </main>
      <Footer />
    </>
  )
}
