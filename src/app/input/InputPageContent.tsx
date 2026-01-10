"use client";

import { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface InputPageContentProps {
  children: ReactNode;
}

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
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export default function InputPageContent({ children }: InputPageContentProps) {
  return (
    <motion.main
      className="flex min-h-screen flex-col items-center px-4 pt-24 pb-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="w-full max-w-md space-y-8">
        {/* Logo */}
        <motion.div className="flex items-center gap-2" variants={itemVariants}>
          <Image
            src="/image.svg"
            alt="Know Your eMission logo"
            width={40}
            height={40}
          />
          <span className="text-sm font-semibold tracking-tight">
            <span className="text-friendly">Know Your</span>
            <br />
            <span className="text-friendly">e</span>
            <span className="text-foreground">Mission</span>
          </span>
        </motion.div>

        {/* Header */}
        <motion.div variants={itemVariants}>
          <h1 className="text-foreground text-3xl font-bold tracking-tight md:text-4xl">
            Calculate Your Emissions
          </h1>
          <p className="text-muted-foreground mt-2">
            Start by choosing your device below
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div variants={itemVariants}>
          <Card className="border-border/50">
            <CardContent className="pt-6">{children}</CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.main>
  );
}
