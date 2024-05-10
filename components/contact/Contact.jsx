import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="h-auto md:min-h-screen flex justify-center items-start py-10 md:py-20 relative">
      <div className="w-full md:w-3/4">
        <div>
          <h2 className="text-2xl font-medium">Contact Us 👋</h2>
          <p className="md:w-3/4 text-neutral-500 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quo
            quibusdam fugiat omnis deleniti aliquam assumenda nihil?
          </p>
        </div>

        <div className="my-10">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col gap-2 mb-4 w-full md:w-1/2">
              <Label
                htmlFor="name"
                className="text-neutral-600 dark:text-neutral-300"
              >
                Full Name
              </Label>
              <Input
                type="text"
                name="name"
                placeholder="Enter Full Name"
                className="w-full"
              />
            </div>
            <div className="flex flex-col gap-2 mb-4 w-full md:w-1/2">
              <Label
                htmlFor="email"
                className="text-neutral-600 dark:text-neutral-300"
              >
                Email
              </Label>
              <Input
                type="email"
                name="email"
                placeholder="Enter Email"
                className="w-full"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 mb-4 w-full">
            <Label
              htmlFor="email"
              className="text-neutral-600 dark:text-neutral-300"
            >
              Message
            </Label>
            <Textarea rows={10} placeholder="Enter your message here" />
          </div>

          <Button>Send</Button>

          <p className="mt-6">
            We will use only your personal info to contact you.{" "}
            <span className="text-brandText underline">Privacy Policy</span>
          </p>

          <div className="mt-10 flex flex-col md:flex-row gap-y-6 border-t items-center justify-between">
            <div className="flex py-6 gap-6 items-center dark:text-neutral-400 text-neutral-600">
              <div className="flex items-center gap-2">
                <FaLocationDot />
                <p>Dhaka, Bangladesh</p>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone />
                <p>+8801787612333</p>
              </div>
            </div>
            <div className="flex items-center gap-6 dark:text-neutral-400 text-neutral-600">
              <FaFacebookF className="cursor-pointer duration-300 dark:hover:text-white hover:text-black" />
              <FaInstagram className="cursor-pointer duration-300 dark:hover:text-white hover:text-black" />
              <FaYoutube className="cursor-pointer duration-300 dark:hover:text-white hover:text-black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
