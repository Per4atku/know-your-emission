import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="w-full max-w-xl text-center space-y-8">
        {/* Hero Text */}
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            <span className="text-friendly italic">Know Your Emission.</span>
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
            Shape Your Decision.
          </h2>
        </div>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-muted-foreground">
          Pick Your Device to Explore Its Carbon Impact
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Link
            href="/input"
            className="w-full sm:w-auto px-8 py-4 bg-friendly text-background font-semibold rounded-lg hover:bg-friendly/90 transition-colors text-center"
          >
            Emissions Calculator
          </Link>
          <Link
            href="/about"
            className="w-full sm:w-auto px-8 py-4 border-2 border-friendly text-friendly font-semibold rounded-lg hover:bg-friendly/10 transition-colors text-center"
          >
            About Us
          </Link>
        </div>
      </div>
    </main>
  );
}
