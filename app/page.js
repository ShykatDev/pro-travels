import Features from "@/components/landing/Features";
import Header from "@/components/landing/Header";
import Upcoming from "@/components/landing/Upcoming";

export default function page() {
  return (
    <div className="container">
      <Header />
      <Features />
      <Upcoming />
    </div>
  );
}
