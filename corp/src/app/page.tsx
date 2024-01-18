import homeImg from "../../public/home.jpg";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Hero imgData={homeImg} imgAlt="car factory" title="Professional cloud hosting" />
    </div>
  );
}
