export function CyberBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(34,211,238,0.18),transparent_22rem),radial-gradient(circle_at_82%_12%,rgba(52,211,153,0.13),transparent_20rem),linear-gradient(115deg,rgba(14,165,233,0.08),transparent_42%,rgba(20,184,166,0.08))]" />
      <div className="absolute inset-0 cyber-mesh opacity-70" />
      <div className="absolute left-1/2 top-16 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full border border-cyanSignal/10 bg-cyanSignal/[0.03] blur-2xl" />
      <svg className="absolute inset-x-0 top-0 h-full w-full opacity-45" viewBox="0 0 1200 720" aria-hidden="true">
        <path className="network-path path-a" d="M80 122 C 250 70, 340 216, 502 165 S 760 70, 916 156 1068 292, 1162 238" />
        <path className="network-path path-b" d="M126 535 C 275 421, 388 612, 540 488 S 760 360, 918 460 1038 584, 1140 520" />
        <path className="network-path path-c" d="M302 42 C 348 178, 210 295, 332 412 S 474 574, 405 676" />
        {[
          [80, 122],
          [502, 165],
          [916, 156],
          [1162, 238],
          [126, 535],
          [540, 488],
          [918, 460],
          [1140, 520],
          [302, 42],
          [332, 412],
          [405, 676]
        ].map(([cx, cy], index) => (
          <circle key={`${cx}-${cy}`} className="network-node" cx={cx} cy={cy} r={index % 3 === 0 ? 4 : 3} />
        ))}
      </svg>
    </div>
  );
}
