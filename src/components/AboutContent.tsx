"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function AboutContent() {
  return (
    <motion.main
      className="flex min-h-screen flex-col items-center justify-center px-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="w-full max-w-2xl space-y-8">
        <motion.div className="text-center" variants={itemVariants}>
          <h1 className="text-4xl font-bold tracking-tight">
            <span className="text-friendly">About</span> Us
          </h1>
          <p className="text-muted-foreground mt-4 text-lg">
            Know Your Emission helps you understand the environmental impact of
            your personal devices.
          </p>
        </motion.div>

        <div className="text-muted-foreground space-y-6">
          <motion.p variants={itemVariants}>
            Our platform visualizes environmental data from Life Cycle
            Assessment (LCA) reports and Product Environment Reports (PER) to
            help you make more informed decisions about the devices you use.
          </motion.p>
          <motion.p variants={itemVariants}>
            We provide insights into manufacturing CO2 emissions, recycled
            materials usage, and sustainability measures implemented by device
            manufacturers.
          </motion.p>
          <motion.p variants={itemVariants}>
            By understanding the carbon footprint of our devices, we can make
            better choices for a more sustainable future.
          </motion.p>
        </div>
      </div>
    </motion.main>
  );
}
