import SectionTitle from "../common/SectionTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  return (
    <div className="my-20">
      <SectionTitle title="FAQs" desc="Commonly asked questions" />

      <div className="w-1/2 mx-auto mt-16">
        <Accordion type="single" collapsible className="w-full ">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg">
              What destinations does your travel agency offer?
            </AccordionTrigger>
            <AccordionContent className="text-neutral-400">
              We cover a wide range of destinations worldwide, from beach
              getaways to urban adventures.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg">
              How do I book a trip with your travel agency?
            </AccordionTrigger>
            <AccordionContent className="text-neutral-400">
              Book online, call us, or visit one of our locations for
              assistance.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg">
              What amenities are included in your travel packages?
            </AccordionTrigger>
            <AccordionContent className="text-neutral-400">
              Packages vary but may include accommodation, transportation,
              meals, and activities.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg">
              Can your agency help with visa and travel documentation
              requirements?
            </AccordionTrigger>
            <AccordionContent className="text-neutral-400">
              Yes, we offer assistance with visa applications and travel
              documentation.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-lg">
              What measures do you have in place for traveler safety and
              security?
            </AccordionTrigger>
            <AccordionContent className="text-neutral-400">
              We prioritize traveler safety by working with reputable partners
              and staying updated on travel advisories.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQs;
