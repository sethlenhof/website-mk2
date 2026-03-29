type SectionHeaderProps = {
  title: string;
};

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="border-b border-white/10 pb-3">
      <div className="inline-block">
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
        <div
          className="mt-2 h-1 rounded-full"
          style={{
            background:
              "linear-gradient(45deg, rgba(251,63,220,1) 0%, rgba(105,70,252,1) 100%)",
          }}
        />
      </div>
    </div>
  );
}