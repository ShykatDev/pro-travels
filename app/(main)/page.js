import FAQs from "@/components/landing/FAQs";
import Features from "@/components/landing/Features";
import Header from "@/components/landing/Header";
import Offer from "@/components/landing/Offer";
import Recommendation from "@/components/landing/Recommendation";
import Upcoming from "@/components/landing/Upcoming";

export default function page() {
  return (
    <div className="container">
      <Header />
      <Features />
      <Upcoming />
      <Offer />
      <Recommendation />
      <FAQs />
    </div>
  );
}
