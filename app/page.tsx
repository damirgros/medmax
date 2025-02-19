import SectionOne from "@/components/SectionOne";
import ThreeScene from "@/components/ThreeScene";

export default function Home() {
  return (
    <>
      <div className="min-h-screen">
        <ThreeScene />
      </div>
      <div>
        <SectionOne />
      </div>
    </>
  );
}
