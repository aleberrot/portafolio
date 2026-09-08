export interface GalleryImage {
  src: string;
  alt: string;
}

interface ProjectGalleryProps {
  images: GalleryImage[];
  columns?: 1 | 2 | 3;
  variant?: "default" | "mobile";
}

export function ProjectGallery({
  images,
  columns = 2,
  variant = "default",
}: ProjectGalleryProps) {
  const gridClass = {
    1: "grid-cols-1",
    2: "grid-cols-1 lg:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  }[columns];

if (variant === "mobile") {
  return (
    <div
      className={`
        grid ${gridClass}
        gap-8
        rounded-2xl
        border border-line
        bg-panel/40
        px-6
        py-10
        lg:px-10
        lg:py-14
      `}
    >
      {images.map((image) => (
        <figure
          key={image.src}
          className="flex justify-center"
        >
          <div className="
            overflow-hidden
            rounded-xl
            border border-line
            bg-canvas
            w-full
            max-w-[320px]
            shadow-2xl
          ">
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="block w-full h-auto object-contain"
            />
          </div>
        </figure>
      ))}
    </div>
  );
}
  return (
    <div className={`grid ${gridClass} gap-6`}>
      {images.map((image) => (
        <figure
          key={image.src}
          className="overflow-hidden rounded-xl border border-line bg-panel"
        >
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className="block h-auto w-full"
          />
        </figure>
      ))}
    </div>
  );
}