import prisma from "@/lib/prisma";

export default async function Home() {
  const device = await prisma.device.findFirst();
  return (
    <main className="prose prose-invert prose-neutral max-w-none">
      <div className="container">
        <h1>Know Your Emission</h1>
      </div>
    </main>
  );
}
