import Image from "next/image";
import Contact from "./components/contact";
import MainTop from "./components/maintop";

import SpecialDetail from "./components/content2";
import ContentDatil from "./components/content1";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between  w-full  lg:w-3/4 md:w-3/4 h-screen   mx-auto drop-shadow-lg ">
      <MainTop/>
      <ContentDatil/>
      <SpecialDetail/>
      <Contact/>
    </main>
  );
}
