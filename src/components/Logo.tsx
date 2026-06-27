import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({
  className,
}: {
  className?: string;
  /** zadržano radi kompatibilnosti poziva; logo je u boji i radi na svetloj i tamnoj podlozi */
  invert?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center", className)}
      aria-label="Spiko — početna"
    >
      <Image
        src="/logo.png"
        alt="Spiko"
        width={580}
        height={220}
        priority
        className="h-9 w-auto sm:h-10"
      />
    </Link>
  );
}
