export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="w-full max-w-2xl space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight">
            <span className="text-friendly">About</span> Us
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Know Your Emission helps you understand the environmental impact of your personal devices.
          </p>
        </div>

        <div className="space-y-6 text-muted-foreground">
          <p>
            Our platform visualizes environmental data from Life Cycle Assessment (LCA) reports
            and Product Environment Reports (PER) to help you make more informed decisions about
            the devices you use.
          </p>
          <p>
            We provide insights into manufacturing CO2 emissions, recycled materials usage,
            and sustainability measures implemented by device manufacturers.
          </p>
          <p>
            By understanding the carbon footprint of our devices, we can make better choices
            for a more sustainable future.
          </p>
        </div>
      </div>
    </main>
  );
}
