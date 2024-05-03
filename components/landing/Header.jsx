import { DatePicker } from "@/components/common/DatePicker";
import { Button } from "@/components/ui/button";
import { header1, header2, header3, luggage } from "@/public";
import Image from "next/image";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Header = () => {
  return (
    <header className="pt-10">
      <div className="flex gap-10 overflow-x-hidden">
        <div className="w-1/4 h-full">
          <Image alt="headerleft" src={header1} className="h-full w-full" />
        </div>
        <div className="w-3/4 flex flex-col justify-end">
          <div>
            <Image
              src={luggage}
              alt="luggage"
              width={100}
              height={100}
              className="-rotate-[20deg]"
            />
            <h2 className="text-2xl mt-3 font-medium">
              Discover the World: Wanderlust Adventures Await!
            </h2>
            <p className="text-neutral-500 mt-3">
              Welcome to Pro Travels, your passport to unforgettable
              experiences! Let us guide you on epic journeys across the globe,
              from hidden gems to iconic landmarks. Start your adventure today!
            </p>
          </div>
          <div className="mt-10 flex gap-10 justify-between items-end">
            <Image alt="headerleft" src={header2} className="" />
            <Image alt="headerleft" src={header3} className="" />

            <div>
              <div className="size-32 dark:bg-brand bg-brandText bg-opacity-30 dark:bg-opacity-15 border border-brand p-5 rounded-lg">
                <p className="text-4xl dark:text-neutral-100">50+</p>
              </div>
              <p className="my-6 font-light text-neutral-500">
                We Have more than 50+ packages where you can pick and enjoy your
                holiday
              </p>
              <Button
                variant="secondary"
                className="bg-neutral-300 dark:bg-neutral-800"
              >
                <Link href="/packages">View Packages</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 flex items-center justify-center">
        <div className="h-36 w-full rounded-xl bg-gradient-to-b from-neutral-200 dark:from-neutral-800 to-transparent p-[1px] overflow-hidden">
          <div className=" h-full w-full bg-white dark:bg-neutral-950 rounded-xl grid grid-cols-4 gap-6 items-center px-10">
            <Select className="w-full outline-none">
              <SelectTrigger className="w-full text-neutral-400 ">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
            <Select className="w-full outline-none">
              <SelectTrigger className="w-full text-neutral-400 ">
                <SelectValue placeholder="Person" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">2</SelectItem>
                <SelectItem value="dark">5</SelectItem>
                <SelectItem value="system">10</SelectItem>
              </SelectContent>
            </Select>
            <div>
              <DatePicker />
            </div>

            <Button>Find Package</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
