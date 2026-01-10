import EnvironmentCard from "@/components/EnvironmentCard";
import FractionChart from "@/components/FractionChart";

export default async function DevicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <main className="container flex flex-col gap-8 lg:flex-row">
      <EnvironmentCard />
      <FractionChart />
    </main>
  );
}
