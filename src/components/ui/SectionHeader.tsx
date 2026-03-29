type SectionHeaderProps = {
  title: string;
};

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <h2 className="border-b border-white/10 pb-3 text-2xl font-semibold">
      {title}
    </h2>
  );
}