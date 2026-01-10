export default function generatedSlug({
  modelName,
  capacity,
}: {
  modelName: string;
  capacity: string;
}): string {
  const str = `${modelName} ${capacity}`;

  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "") // remove special characters
    .replace(/\s+/g, "-") // spaces → dashes
    .replace(/-+/g, "-"); // collapse multiple dashes
}
