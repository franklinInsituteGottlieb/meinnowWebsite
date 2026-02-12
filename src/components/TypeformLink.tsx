"use client";

import { useTypeformUrl } from "@/hooks/useTypeformUrl";

interface TypeformLinkProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function TypeformLink({ className, children, onClick }: TypeformLinkProps) {
  const url = useTypeformUrl();

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={className} onClick={onClick}>
      {children}
    </a>
  );
}
