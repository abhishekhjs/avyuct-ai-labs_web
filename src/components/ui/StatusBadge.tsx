interface StatusBadgeProps {
  status: "launched" | "coming-soon" | "ongoing";
  className?: string;
}

const statusConfig = {
  launched: {
    label: "Launched",
    cssClass: "badge-launched",
    dotColor: "bg-accent-green",
  },
  "coming-soon": {
    label: "Coming Soon",
    cssClass: "badge-coming-soon",
    dotColor: "bg-accent-amber",
  },
  ongoing: {
    label: "Ongoing",
    cssClass: "badge-ongoing",
    dotColor: "bg-primary",
  },
} as const;

export default function StatusBadge({
  status,
  className = "",
}: StatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <span
      className={`${config.cssClass} inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-wider ${className}`}
    >
      <span
        className={`${config.dotColor} inline-block h-1.5 w-1.5 rounded-full`}
        aria-hidden="true"
      />
      {config.label}
    </span>
  );
}
