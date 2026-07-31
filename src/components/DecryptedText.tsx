"use client";

import { useEffect, useState } from "react";

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&<>/";

type DecryptedTextProps = {
  text: string;
  className?: string;
  speed?: number;
};

export function DecryptedText({ text, className, speed = 26 }: DecryptedTextProps) {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setFrame(text.length);
      return;
    }

    setFrame(0);
    const timer = window.setInterval(() => {
      setFrame((value) => {
        if (value >= text.length) {
          window.clearInterval(timer);
          return value;
        }
        return value + 1;
      });
    }, speed);

    return () => window.clearInterval(timer);
  }, [speed, text]);

  const output = text
    .split("")
    .map((char, index) => (index < frame || char === " " ? char : chars[(index + frame) % chars.length]))
    .join("");

  return <span className={className}>{output}</span>;
}
