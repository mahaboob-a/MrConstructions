import { useEffect, useState } from "react";

export interface Project {
  _id?: string;
  name: string;
  category: string;
  location: string;
  year: number;
  description: string;
  images?: string[];
  featured?: boolean;
}

export default function ProjectCard({
  project,
}: {
  project: Project;
}) {
  const images =
    project.images && project.images.length > 0
      ? project.images
      : [];

  const [currentImage, setCurrentImage] = useState(0);

  // Automatically change image every 3 seconds
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImage((previous) => {
        return (previous + 1) % images.length;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Reset image when project changes
  useEffect(() => {
    setCurrentImage(0);
  }, [project._id]);

  const cover = images[currentImage];

  return (
    <article className="group overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl">

      {/* ================= IMAGE ================= */}
      <div className="relative h-80 overflow-hidden bg-stone-200">

        {cover ? (
          <img
            key={cover}
            src={cover}
            alt={`${project.name} - image ${currentImage + 1}`}
            className="h-full w-full object-cover transition-opacity duration-700"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-stone-500">
            No Image
          </div>
        )}

        {/* Project number */}
        <div className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-navy-900/80 text-lg font-semibold text-white shadow-xl backdrop-blur-md">
          {String(currentImage + 1).padStart(2, "0")}
        </div>

        {/* Category */}
        <div className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-navy-900/80 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
          {project.category}
        </div>

        {/* Image counter */}
        {images.length > 1 && (
          <div className="absolute bottom-5 right-5 rounded-full border border-white/10 bg-navy-900/80 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
            {currentImage + 1} / {images.length}
          </div>
        )}
      </div>

      {/* ================= IMAGE INDICATORS ================= */}
      {images.length > 1 && (
        <div className="flex justify-center gap-2 py-4">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentImage(index)}
              aria-label={`Show image ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentImage
                  ? "w-8 bg-bronze"
                  : "w-2 bg-stone-300 hover:bg-stone-400"
              }`}
            />
          ))}
        </div>
      )}

      {/* ================= CONTENT ================= */}
      <div className="p-7">

        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl font-semibold text-navy">
              {project.name}
            </h3>

            <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-bronze">
              {project.category}
            </p>
          </div>

          <span className="text-2xl text-bronze transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>

        <p className="mt-2 text-sm text-stone-500">
          {project.year}
        </p>

        <p className="mt-5 line-clamp-3 leading-7 text-stone-600">
          {project.description}
        </p>

        <p className="mt-5 text-sm text-stone-500">
          {project.location}
        </p>

        <div className="mt-7 h-px w-12 bg-bronze transition-all duration-500 group-hover:w-full" />

      </div>
    </article>
  );
}