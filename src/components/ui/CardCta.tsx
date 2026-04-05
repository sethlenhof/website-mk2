type CardCtaProps = {
  label?: string;
};

export default function CardCta({
  label = "View details +",
}: CardCtaProps) {
  return (
    <span className="shrink-0 text-sm text-white/50 transition group-hover:text-white/80">
      {label}
    </span>
  );
}