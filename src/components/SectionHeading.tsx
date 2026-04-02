interface Props {
  title: string;
  subtitle?: string;
  light?: boolean;
}

const SectionHeading = ({ title, subtitle, light }: Props) => (
  <div className="text-center mb-12">
    <h2 className={`text-3xl md:text-4xl font-display font-bold mb-4 ${light ? "text-card" : "text-primary"}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`text-lg max-w-2xl mx-auto ${light ? "text-card/70" : "text-muted-foreground"}`}>
        {subtitle}
      </p>
    )}
    <div className="w-20 h-1 gold-gradient mx-auto mt-6 rounded-full" />
  </div>
);

export default SectionHeading;
