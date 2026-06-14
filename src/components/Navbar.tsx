"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Shield, X } from "lucide-react";
import { useState } from "react";
import { navItems, profile } from "@/data/portfolio";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/84 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded border border-cyanSignal/30 bg-cyanSignal/10 text-cyanSignal shadow-glow">
            <Shield size={20} aria-hidden="true" />
          </span>
          <span>
            <span className="block text-sm font-semibold tracking-wide text-white">{profile.name}</span>
            <span className="block text-xs text-slate-400">Security Operations Portfolio</span>
          </span>
        </Link>

        <button
          className="grid h-10 w-10 place-items-center rounded border border-line text-slate-200 lg:hidden"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded px-3 py-2 text-sm transition ${
                  active
                    ? "bg-cyanSignal/10 text-cyanSignal"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>

      {open ? (
        <div className="border-t border-line bg-ink/96 px-5 py-3 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-1">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded px-3 py-3 text-sm transition ${
                    active ? "bg-cyanSignal/10 text-cyanSignal" : "text-slate-300 hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </header>
  );
}
