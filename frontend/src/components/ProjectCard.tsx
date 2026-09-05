export interface Project {
  _id?: string;
  name: string;
  category: string;
  location: string;
  year: number;
  description: string;
  images?: string[];
}

export default function ProjectCard({ project }: { project: Project }) {
  const cover = project.images?.[0];
  return (
    <article className="group overflow-hidden border border-stone-200 bg-white">
      <div className="aspect-[4/3] w-full overflow-hidden bg-stone-200">
        {cover ? (
          <img
            src={cover}
            alt={project.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-stone-600">
            {project.category}
          </div>
        )}
      </div>
      <div className="p-4">
        <p className="text-xs uppercase tracking-wide text-bronze">{project.category} · {project.year}</p>
        <h3 className="mt-1 font-display text-lg font-semibold text-navy">{project.name}</h3>
        <p className="mt-1 text-sm text-stone-600">{project.location}</p>
        <p className="mt-2 text-sm leading-relaxed text-stone-800">{project.description}</p>
      </div>
    </article>
  );
}
