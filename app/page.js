import About from "./components/About";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen">
    <Hero/>
    <About/>
    </main>
  );
}
