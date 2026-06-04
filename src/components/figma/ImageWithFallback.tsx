import React, { useState } from "react";
import Image, { type ImageProps } from "next/image";

const ERROR_IMG_SRC =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";

type ImageWithFallbackProps = Omit<ImageProps, "src" | "alt"> & {
  src?: string | null;
  alt?: string;
};

function isOptimizableSrc(src: string) {
  return src.startsWith("http") || src.startsWith("/");
}

export function ImageWithFallback({
  src,
  alt = "",
  className,
  style,
  priority,
  sizes,
  fill,
  width,
  height,
  loading,
  ...rest
}: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false);

  if (!src || didError) {
    return (
      <div
        className={`inline-block bg-gray-100 text-center align-middle ${className ?? ""}`}
        style={style}
      >
        <div className="flex h-full w-full items-center justify-center">
          <img src={ERROR_IMG_SRC} alt={alt || "Image unavailable"} />
        </div>
      </div>
    );
  }

  if (!isOptimizableSrc(src)) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        style={style}
        loading={loading ?? "lazy"}
        onError={() => setDidError(true)}
        {...(rest as React.ImgHTMLAttributes<HTMLImageElement>)}
      />
    );
  }

  const imageSizes =
    sizes ?? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw";

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        style={style}
        sizes={imageSizes}
        priority={priority}
        loading={priority ? undefined : (loading ?? "lazy")}
        onError={() => setDidError(true)}
        {...rest}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 800}
      height={height ?? 600}
      className={className}
      style={style}
      sizes={imageSizes}
      priority={priority}
      loading={priority ? undefined : (loading ?? "lazy")}
      onError={() => setDidError(true)}
      {...rest}
    />
  );
}
