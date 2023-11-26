import SEO from "@/components/SEO";
import coverPhoto from "../../public/sarath.jpeg";
import Image from "next/image";
import { FC } from "react";
import Headline, { HeadlineAnimated } from "@/components/ui/Headline";
import { motion } from "framer-motion";

interface aboutProps {}

const about: FC<aboutProps> = ({}) => {
  return (
    <>
      <SEO
        pageTitle="Sarath | About"
        pageDescription={"To know more about sarath, read this through!!!"}
      />
      <main className="flex flex-col items-center justify-center w-full">
        <HeadlineAnimated title="About ME" className="mt-32 lg:mt-14" />

        <div className="grid grid-cols-12 px-32 py-24 md:py-8 2xl:px-20 xl:px-2">
          <motion.div
            className="flex flex-col col-span-6 lg:col-span-12 lg:order-2 lg:px-16 lg:pt-4 xs:px-4"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex flex-col justify-between gap-8 font-normal lg:text-sm">
              <p className="text-justify">
                {`Howdy! I'm Sarath Suresh, your friendly neighborhood Software Engineer based in Coimbatore, Tamil Nadu. Riding the tech waves at Graas.ai, I wield my daily tools like a coding maestro – JavaScript, Node.js, React, MongoDB, Java, and Python (with a sprinkle of Flask for that extra flavor). My coding philosophy? Ternary operators over if-else blocks any day. I'm all about that sleek, concise code life.`}
              </p>
              <p className="text-justify">
                {`But it's not just about the code; it's about crafting solutions that sing. I'm passionate about building seamless user experiences, whether it's a sleek React app or a robust Java backend. When I'm not pushing pixels, you might catch me exploring the latest tech trends or tinkering with some side projects. Join me on this coding adventure, where every line of code tells a story. Let's make magic happen! ✨`}
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center justify-center col-span-6 lg:col-span-12 lg:order-1 "
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src={coverPhoto}
              alt="coverPhoto"
              className="w-3/4 p-2 border border-solid md:5/6 lg:w-1/2 xl:w-11/12 rounded-xl dark:bg-light border-dark/50 xs:w-11/12"
              priority={true}
            />
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default about;
