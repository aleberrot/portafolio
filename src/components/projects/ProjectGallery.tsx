interface GalleryImage {
  src: string;
  alt: string;
}

interface ProjectGalleryProps {
  images: GalleryImage[];
  columns?: 1 | 2 | 3;
}

export function ProjectGallery({
  images,
  columns = 2,
}: ProjectGalleryProps) {
  const gridClass = {
    1: "grid-cols-1",
    2: "grid-cols-1 lg:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  }[columns];

  return (
    <div className={`grid ${gridClass} gap-6`}>
      {images.map((image) => (
        <div
          key={image.src}
          className="bg-panel border border-line rounded-xl overflow-hidden"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-auto block"
          />
        </div>
      ))}
    </div>
  );
}