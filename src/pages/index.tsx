import SEO from "@/components/SEO";
import Headline from "@/components/ui/Headline";
import HireMe from "@/components/assets/HireMe";
import Button from "@/components/ui/Button";
import { LinkArrow } from "@/components/assets/Icons";
import { slowContainer, slowItem } from "@/util/staggeredAnimation";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <SEO
        pageTitle="Sarath | Home"
        pageDescription={`Welcome to sarath's portfolio website, take a look to know more.`}
      />
      <main className="flex items-center justify-center h-screen">
        <motion.div
          className="flex flex-col items-center justify-center gap-4 overflow-hidden"
          variants={slowContainer}
          initial="hidden"
          animate="show"
        >
          <motion.div className="flex flex-col gap-4" variants={slowItem}>
            <Headline
              title="Hey, I'm Sarath,"
              className="dark:via-fuchsia-300 dark:to-fuchsia-950"
            />
            <Headline
              title="Software Engineer"
              className="xs:text-2xl dark:via-fuchsia-300 dark:to-fuchsia-950"
            />
          </motion.div>

          <motion.pre
            className="text-2xl lg:text-xl md:text-lg sm:text-base xs:text-xs"
            variants={slowItem}
          >
            {`I'm a full-stack developer and oh man I love to <code /> `}
          </motion.pre>

          <motion.div
            className="flex items-center gap-4 mt-4 cursor-pointer"
            variants={slowItem}
          >
            {/* <Button
              text="Resume"
              icon={<LinkArrow className="w-6" />}
              href={"/Resume.pdf"}
            /> */}

            <Link
              href={"/contact"}
              className="flex items-center gap-1 cursor-pointer border-dark"
            >
              <div className="underline underline-offset-4">Contact</div>
              <div className="text-2xl">{">"}</div>
            </Link>
          </motion.div>
        </motion.div>
        {/* <HireMe /> */}
      </main>
    </>
  );
}
