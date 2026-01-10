import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ReportLoading() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-8">
      {/* Hero Card Skeleton */}
      <Card className="mb-12 border-zinc-700 bg-gradient-to-br from-zinc-900 to-zinc-800">
        <CardContent className="p-6 md:p-8">
          <Skeleton className="mb-6 h-8 w-3/4 bg-zinc-700" />

          <div className="space-y-4">
            <div>
              <Skeleton className="mb-2 h-4 w-40 bg-zinc-700" />
              <Skeleton className="h-7 w-48 bg-zinc-700" />
            </div>

            <div>
              <Skeleton className="mb-2 h-4 w-36 bg-zinc-700" />
              <Skeleton className="h-9 w-32 bg-zinc-700" />
            </div>

            <div>
              <Skeleton className="mb-2 h-4 w-44 bg-zinc-700" />
              <Skeleton className="h-6 w-20 bg-zinc-700" />
            </div>

            <div>
              <Skeleton className="mb-2 h-4 w-36 bg-zinc-700" />
              <Skeleton className="h-6 w-16 bg-zinc-700" />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Skeleton className="h-10 w-28 bg-zinc-700" />
            <Skeleton className="h-10 w-44 bg-zinc-700" />
          </div>
        </CardContent>
      </Card>

      {/* Overview Section Skeleton */}
      <section className="mb-12">
        <Skeleton className="mb-2 h-10 w-40 bg-zinc-700" />
        <Skeleton className="mb-2 h-4 w-36 bg-zinc-700" />
        <Skeleton className="mb-6 h-4 w-48 bg-zinc-700" />

        {/* Chart Skeleton */}
        <div className="flex items-center justify-center">
          <Skeleton className="size-64 rounded-full bg-zinc-700" />
        </div>
      </section>

      {/* Details Section Skeleton */}
      <section className="space-y-6">
        {[...Array(5)].map((_, i) => (
          <div key={i}>
            <Skeleton className="mb-1 h-4 w-48 bg-zinc-700" />
            <Skeleton className="mb-3 h-px w-full bg-zinc-700" />
            <Skeleton className="h-8 w-32 bg-zinc-700" />
          </div>
        ))}
      </section>
    </main>
  );
}
