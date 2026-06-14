import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  download?: boolean;
};

export function ButtonLink({ href, children, variant = "primary", external, download }: ButtonLinkProps) {
  const className =
    variant === "primary"
      ? "inline-flex min-h-11 items-center justify-center rounded border border-cyanSignal/60 bg-cyanSignal px-5 py-2.5 text-sm font-semibold text-ink shadow-glow transition hover:bg-blueSignal"
      : "inline-flex min-h-11 items-center justify-center rounded border border-line bg-white/5 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-cyanSignal/50 hover:text-cyanSignal";

  if (external || download) {
    return (
      <a href={href} className={className} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} download={download}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
