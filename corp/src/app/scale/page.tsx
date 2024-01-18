import scaleImg from "../../../public/scale.jpg";
import Hero from "../../components/Hero";

export default function ScalePage() {
  return (
    <div>
      <Hero imgData={scaleImg} imgAlt="steel factory" title="Scale up your app to infinity" />
    </div>
  );
}
