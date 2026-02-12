/** Hintergrund für Unterseiten (Kursdetail, Impressum) – an Startseite angelehnt */
export default function PageBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden>
      {/* Weiße Basis */}
      <div className="absolute inset-0 bg-background" />
      {/* Dezenter Verlauf */}
      <div className="absolute inset-0 page-bg-gradient" />
      {/* Weiche Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-primary/20 blur-3xl page-bg-float-1" />
        <div className="absolute -bottom-32 -left-32 h-[360px] w-[360px] rounded-full bg-primary/25 blur-3xl page-bg-float-2" />
        <div className="absolute top-1/3 right-1/4 h-[280px] w-[280px] rounded-full bg-primary/15 blur-3xl page-bg-float-2" />
      </div>
    </div>
  );
}
