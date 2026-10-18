import Image from "next/image";

export function GsLogo({
  className = "",
  height = 44,
}: {
  className?: string
  height?: number
}) {
  const width = Math.round(height * (2000 / 789));
  return (
    <Image
      src="/gs-exhibitions-logo.png"
      alt="Global Sources Exhibitions"
      width={width}
      height={height}
      className={`h-auto w-auto ${className}`}
      priority
    />
  );
}
