import { BoopFatFingers } from "@/components/easter-eggs/boop-fat-fingers";
import { PageShell } from "@/components/layout/page-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { isFeatureEnabled } from "@/lib/feature-flags/flags";

export default function FriendsPage() {
  const showBoop = isFeatureEnabled("easteregg.boopFatFingers");

  return (
    <PageShell
      eyebrow="Corner of Friends"
      title="Friend features start as placeholders, then earn their way into public."
      description="Future friend homepages, profiles, private posts, and inside jokes should be opt-in and owner-approved."
      aside={
        <div className="quiet-panel rounded-lg border p-4 font-mono text-xs text-muted-foreground">
          owner-approved later
        </div>
      }
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="polished-card">
          <CardHeader>
            <CardTitle>Future friend system</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-6 text-muted-foreground">
              Friend-created pages are not public in v1. The scaffold expects accounts, manual approval,
              owner moderation, friend roles, and feature flags before anything user-created goes live.
            </p>
          </CardContent>
        </Card>
        {showBoop ? <BoopFatFingers /> : null}
      </div>
    </PageShell>
  );
}
