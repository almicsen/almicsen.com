import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-muted-foreground sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p>almicsen.com</p>
          <div className="flex gap-4">
            <Link className="hover:text-foreground" href="/media/pdf">
              PDF wrapper
            </Link>
            <Link className="hover:text-foreground" href="/media/video">
              Video wrapper
            </Link>
            <Link className="hover:text-foreground" href="/media/score-sync">
              ScoreSync
            </Link>
          </div>
        </div>
        <p>No exact location, contact email, owner photos, fake metrics, or fake testimonials by default.</p>
      </div>
    </footer>
  );
}
