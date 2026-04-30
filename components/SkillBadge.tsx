type SkillBadgeProps = {
  label: string;
};

export function SkillBadge({ label }: SkillBadgeProps) {
  return (
    <span className="rounded-full border border-line bg-white/[0.04] px-3 py-2 text-sm text-slate-300">
      {label}
    </span>
  );
}

