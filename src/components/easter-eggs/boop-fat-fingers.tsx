"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Fingerprint, RotateCcw, Sparkles } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const MAX_BURSTS = 8;

const verdicts = [
  "calibrating thumb geometry",
  "questionable accuracy detected",
  "surprisingly elegant tap",
  "certified finger weather",
  "boop registered with unnecessary confidence",
  "the button has concerns",
] as const;

type BoopBurst = {
  id: number;
  x: number;
  y: number;
  label: string;
};

export function BoopFatFingers() {
  const [boops, setBoops] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bursts, setBursts] = useState<BoopBurst[]>([]);
  const [lastVerdict, setLastVerdict] = useState<(typeof verdicts)[number]>(verdicts[0]);
  const burstId = useRef(0);

  useEffect(() => {
    if (bursts.length === 0) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setBursts((currentBursts) => currentBursts.slice(1));
    }, 720);

    return () => window.clearTimeout(timeoutId);
  }, [bursts]);

  const pressure = Math.min(100, boops * 9 + streak * 7);
  const precision = useMemo(() => {
    if (boops === 0) {
      return "untested";
    }

    if (streak >= 7) {
      return "dangerously locked in";
    }

    if (streak >= 3) {
      return "mostly intentional";
    }

    return "handshake pending";
  }, [boops, streak]);

  function handleBoop() {
    const nextBoops = boops + 1;
    const nextStreak = streak + 1;
    const nextVerdict = verdicts[nextBoops % verdicts.length];

    burstId.current += 1;
    setBoops(nextBoops);
    setStreak(nextStreak);
    setLastVerdict(nextVerdict);
    setBursts((currentBursts) =>
      [
        ...currentBursts,
        {
          id: burstId.current,
          x: 24 + ((nextBoops * 17) % 52),
          y: 18 + ((nextBoops * 23) % 48),
          label: nextBoops % 5 === 0 ? "bonk" : "boop",
        },
      ].slice(-MAX_BURSTS),
    );
  }

  function resetBoops() {
    setBoops(0);
    setStreak(0);
    setBursts([]);
    setLastVerdict(verdicts[0]);
  }

  return (
    <Card className="polished-card overflow-hidden border-accent/30">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Fingerprint className="h-5 w-5 text-accent" aria-hidden="true" />
          Boop the Fat Fingers
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        <p className="text-sm text-muted-foreground">
          A small original corner-widget for heavy taps, missed confidence, and very serious
          finger science.
        </p>

        <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_13rem]">
          <div className="relative min-h-72 overflow-hidden rounded-lg border bg-background">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(98,214,199,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(98,214,199,0.07)_1px,transparent_1px)] bg-[size:18px_18px]" />
            <div className="absolute inset-x-0 top-0 flex items-center justify-between border-b bg-secondary/45 px-3 py-2 font-mono text-[11px] text-muted-foreground">
              <span>friend-corner://boop-pad</span>
              <span>{precision}</span>
            </div>

            <button
              aria-label="Boop the fat fingers"
              className="absolute left-1/2 top-1/2 grid h-44 w-44 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-accent/50 bg-accent/15 shadow-[0_0_70px_rgba(98,214,199,0.22)] transition duration-150 hover:bg-accent/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring active:scale-95"
              onClick={handleBoop}
              type="button"
            >
              <span className="absolute -top-5 left-9 h-24 w-11 rotate-[-14deg] rounded-full border border-accent/25 bg-card shadow-lg" />
              <span className="absolute -top-7 left-[4.4rem] h-28 w-12 rotate-[-4deg] rounded-full border border-accent/25 bg-card shadow-lg" />
              <span className="absolute -top-5 right-9 h-24 w-11 rotate-[12deg] rounded-full border border-accent/25 bg-card shadow-lg" />
              <span className="relative z-10 grid h-28 w-32 place-items-center rounded-[2rem] border border-accent/35 bg-card text-center shadow-inner">
                <span className="font-mono text-sm uppercase text-accent">Boop</span>
              </span>
            </button>

            {bursts.map((burst) => (
              <span
                className="pointer-events-none absolute animate-[ping_720ms_ease-out_forwards] rounded-full border border-accent/50 px-2 py-1 font-mono text-xs text-accent"
                key={burst.id}
                style={{ left: `${burst.x}%`, top: `${burst.y}%` }}
              >
                {burst.label}
              </span>
            ))}
          </div>

          <div className="quiet-panel rounded-lg border p-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="font-mono text-4xl text-accent" aria-live="polite">
                  {boops}
                </p>
                <p className="text-xs text-muted-foreground">registered boops</p>
              </div>
              <Button aria-label="Reset boop counter" onClick={resetBoops} size="icon" variant="outline">
                <RotateCcw className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>

            <div className="mt-5 space-y-2">
              <div className="flex items-center justify-between font-mono text-[11px] uppercase text-muted-foreground">
                <span>finger pressure</span>
                <span>{pressure}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-secondary">
                <span
                  className="block h-full rounded-full bg-accent transition-all duration-300"
                  style={{ width: `${pressure}%` }}
                />
              </div>
            </div>

            <div className="mt-5 rounded-md border border-accent/20 bg-accent/5 p-3">
              <p className="flex items-center gap-2 text-sm text-foreground">
                <Sparkles className="h-4 w-4 text-accent" aria-hidden="true" />
                {lastVerdict}
              </p>
              <p className="mt-2 font-mono text-xs text-muted-foreground">streak: {streak}</p>
            </div>

            <Link
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "mt-5 w-full",
              )}
              href="/projects/boop-fat-fingers-prototype"
            >
              Project note
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
