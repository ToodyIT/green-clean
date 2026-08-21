import Image from "next/image";
import logo from "../../public/images/logo.png";

export function Logo({
  className = "",
  inline = false,
}: {
  className?: string;
  inline?: boolean;
}) {
  return (
    <Image
      src={logo}
      alt="GreenClean"
      className={`${inline ? "inline-block" : ""} h-7 w-auto ${className}`}
    />
  );
}
