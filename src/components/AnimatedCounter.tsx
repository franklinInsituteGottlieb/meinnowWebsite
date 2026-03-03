interface AnimatedCounterProps {
  value: string;
  duration?: number;
  className?: string;
  startAnimation?: boolean;
}

export default function AnimatedCounter({
  value,
  className = "",
}: AnimatedCounterProps) {
  return <p className={className}>{value}</p>;
}
