import { PageShell } from "@/components/layout/page-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title="almicsen first, Alan Michaelsen where it makes sense."
      description="A business-safe about page scaffold that keeps the public identity personal without oversharing."
      aside={
        <div className="quiet-panel rounded-lg border p-4 text-sm text-muted-foreground">
          Primary public identity: <span className="text-foreground">almicsen</span>
        </div>
      }
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {[
          ["Public identity", "The site leads with almicsen as the name people see first."],
          ["Business-safe context", "Alan Michaelsen can appear in resume-style or professional sections."],
          ["Privacy by default", "No exact location, contact email, or owner photos are exposed on launch."],
        ].map(([title, body]) => (
          <Card className="polished-card" key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-6 text-muted-foreground">{body}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
