"use client";

import { motion } from "framer-motion";

export default function SendRequestButtons() {
  return (
    <div className="flex justify-between gap-4 mt-6">
      <ActionButton
        label="Send"
        icon="fas fa-paper-plane"
        gradientFrom="from-purple-500"
        gradientTo="to-pink-500"
      />
      <ActionButton
        label="Request"
        icon="fas fa-hand-holding-usd"
        gradientFrom="from-emerald-500"
        gradientTo="to-teal-500"
      />
    </div>
  );
}

function ActionButton({
  label,
  icon,
  gradientFrom,
  gradientTo,
}: {
  label: string;
  icon: string;
  gradientFrom: string;
  gradientTo: string;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`flex-1 flex flex-col items-center justify-center px-4 py-4 rounded-2xl text-white font-semibold text-sm bg-gradient-to-r ${gradientFrom} ${gradientTo} shadow-lg`}
    >
      <i className={`${icon} text-xl mb-1`} />
      {label}
    </motion.button>
  );
}
