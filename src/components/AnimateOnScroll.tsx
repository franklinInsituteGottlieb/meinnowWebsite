interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  animation?: string;
  delay?: number;
  threshold?: number;
  rootMargin?: string;
  replayWhenInView?: boolean;
}

export default function AnimateOnScroll({
  children,
  className = "",
}: AnimateOnScrollProps) {
  return <div className={className}>{children}</div>;
}
