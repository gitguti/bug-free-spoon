"use client"
import Hero from "./components/home/Hero";
import Section2 from "./components/home/Section2"
import Section3 from "./components/home/Section3"
import Section4 from "./components/home/Section4"
import Section5 from "./components/home/Section5"
import Loading from "./loading";

export default function Home() {
  return (
    <>

    <main>
    <Hero/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Section5/>
   </main>
   </>

  );
}
