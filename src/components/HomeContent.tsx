"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export default function HomeContent() {
  return (
    <motion.main
      className="flex min-h-screen flex-col items-center justify-center px-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="w-full max-w-xl space-y-8 text-center">
        {/* Hero Text */}
        <motion.div className="space-y-2" variants={itemVariants}>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            <span className="text-friendly italic">Know Your Emission.</span>
          </h1>
          <motion.h2
            className="text-foreground text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            variants={itemVariants}
          >
            Shape Your Decision.
          </motion.h2>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-muted-foreground text-lg sm:text-xl"
          variants={itemVariants}
        >
          Pick Your Device to Explore Its Carbon Impact
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row"
          variants={itemVariants}
        >
          <motion.div
            variants={buttonVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/input"
              className="bg-friendly text-background hover:bg-friendly/90 block w-full rounded-lg px-8 py-4 text-center font-semibold transition-colors sm:w-auto"
            >
              Emissions Calculator
            </Link>
          </motion.div>
          <motion.div
            variants={buttonVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/about"
              className="border-friendly text-friendly hover:bg-friendly/10 block w-full rounded-lg border-2 px-8 py-4 text-center font-semibold transition-colors sm:w-auto"
            >
              About Us
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.main>
  );
}
