"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { InfoIcon } from "lucide-react";

var setPopup: React.Dispatch<
  React.SetStateAction<{ id: number; text: string; type: string }[]>
>;

export function CreatePopup(text: string, type?: "success" | "alert" | "error" | "info") {
  const id = Date.now() + Math.random(); // unique id
  setPopup((prev) => [...prev, { id, text: text, type: type || "info" }]);

  setTimeout(() => {
    setPopup((prev) => prev.filter((p) => p.id !== id));
  }, 5000);
}

function Alerts({ type, text }: { type: string; text: string }) {
  return (
    <motion.div
      layout="position"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.3 }}
      className={`alert w-fit h-fit ${
        type === "info"
          ? "alert-info"
          : type === "success"
          ? "alert-success"
          : type === "error"
          ? "alert-error"
          : "alert-info"
      }`}
    >
      <InfoIcon />
      {text}
    </motion.div>
  );
}

export default function AlertFragment() {
  const [popups, setPopups] = useState<
    { id: number; text: string; type: string }[]
  >([]);

  useEffect(() => {
    setPopup = setPopups;
  }, []);

  return (
    <motion.div
      layout="position"
      className="flex flex-col items-end gap-1"
    >
      <AnimatePresence initial={false}>
        {popups.map((data) => (
          <Alerts key={data.id} text={data.text} type={data.type} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
