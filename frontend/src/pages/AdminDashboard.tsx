import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type ProjectCategory =
  | "Residential"
  | "Commercial"
  | "Industrial"
  | "Renovation"
  | "Civil"
  | "Other";

type Project = {
  _id: string;
  name: string;
  category: ProjectCategory;
  location: string;
  year: number;
  description: string;
  images: string[];
  featured: boolean;
};

const API_URL = "http://localhost:5000";

const categories: ProjectCategory[] = [
  "Residential",
  "Commercial",
  "Industrial",
  "Renovation",
  "Civil",
  "Other",
];

export default function AdminDashboard() {
  const navigate = useNavigate();

  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  const [editingId, setEditingId] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [category, setCategory] =
    useState<ProjectCategory>("Residential");
  const [location, setLocation] = useState("");
  const [year, setYear] = useState(new Date().getFullYear());
  const [description, setDescription] = useState("");
  const [images, setImages] = useState("");
  const [featured, setFeatured] = useState(false);

  const token = localStorage.getItem("adminToken");

  // Check login
  useEffect(() => {
    if (!token) {
      navigate("/admin");
      return;
    }

    loadProjects();
  }, []);

  // Get projects
  const loadProjects = async () => {
    try {
      const response = await fetch(
        `${API_URL}/api/projects?limit=50`
      );

      const data = await response.json();

      setProjects(data.items || []);
    } catch (error) {
      console.error("Failed to load projects:", error);
    } finally {
      setLoading(false);
    }
  };

  // Clear form
  const clearForm = () => {
    setEditingId(null);
    setName("");
    setCategory("Residential");
    setLocation("");
    setYear(new Date().getFullYear());
    setDescription("");
    setImages("");
    setFeatured(false);
  };

  // Add or update project
  const saveProject = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!token) {
      navigate("/admin");
      return;
    }

    const imageArray = images
      .split("\n")
      .map((image) => image.trim())
      .filter(Boolean);

    const projectData = {
      name,
      category,
      location,
      year: Number(year),
      description,
      images: imageArray,
      featured,
    };

    try {
      const url = editingId
        ? `${API_URL}/api/projects/${editingId}`
        : `${API_URL}/api/projects`;

      const method = editingId ? "PUT" : "POST";

      const response = await fetch(url, {
        method,

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },

        body: JSON.stringify(projectData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to save project");
      }

      alert(
        editingId
          ? "Project updated successfully!"
          : "Project added successfully!"
      );

      clearForm();
      loadProjects();
    } catch (error) {
      alert(
        error instanceof Error
          ? error.message
          : "Something went wrong"
      );
    }
  };

  // Edit project
  const editProject = (project: Project) => {
    setEditingId(project._id);

    setName(project.name);
    setCategory(project.category);
    setLocation(project.location);
    setYear(project.year);
    setDescription(project.description);
    setImages(project.images.join("\n"));
    setFeatured(project.featured);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Delete project
  const deleteProject = async (id: string) => {
    if (!token) return;

    const confirmed = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (!confirmed) return;

    try {
      const response = await fetch(
        `${API_URL}/api/projects/${id}`,
        {
          method: "DELETE",

          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        const data = await response.json();

        throw new Error(
          data.error || "Failed to delete project"
        );
      }

      alert("Project deleted successfully!");

      loadProjects();
    } catch (error) {
      alert(
        error instanceof Error
          ? error.message
          : "Delete failed"
      );
    }
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");

    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <header className="bg-navy-900 px-6 py-4 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between">

          <div className="flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="MR Constructions"
              className="h-12 w-auto"
            />

            <div>
              <h1 className="font-bold">
                MR Constructions
              </h1>

              <p className="text-sm text-white/70">
                Admin Dashboard
              </p>
            </div>
          </div>

          <button
            onClick={logout}
            className="rounded border border-white/30 px-4 py-2 hover:bg-white/10"
          >
            Logout
          </button>

        </div>
      </header>

      <main className="mx-auto max-w-7xl p-6">

        {/* Add / Edit */}
        <section className="mb-8 rounded-lg bg-white p-6 shadow">

          <div className="mb-6 flex items-center justify-between">

            <h2 className="text-2xl font-bold">
              {editingId
                ? "Edit Project"
                : "Add New Project"}
            </h2>

            {editingId && (
              <button
                onClick={clearForm}
                className="rounded border px-4 py-2"
              >
                Cancel Edit
              </button>
            )}

          </div>

          <form
            onSubmit={saveProject}
            className="grid gap-4 md:grid-cols-2"
          >

            {/* Name */}
            <div>
              <label className="mb-1 block font-medium">
                Project Name
              </label>

              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Modern Residential House"
                className="w-full rounded border p-3"
                required
              />
            </div>

            {/* Category */}
            <div>
              <label className="mb-1 block font-medium">
                Category
              </label>

              <select
                value={category}
                onChange={(e) =>
                  setCategory(
                    e.target.value as ProjectCategory
                  )
                }
                className="w-full rounded border p-3"
              >
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="mb-1 block font-medium">
                Location
              </label>

              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Nandyal, Andhra Pradesh"
                className="w-full rounded border p-3"
                required
              />
            </div>

            {/* Year */}
            <div>
              <label className="mb-1 block font-medium">
                Year
              </label>

              <input
                type="number"
                value={year}
                onChange={(e) =>
                  setYear(Number(e.target.value))
                }
                className="w-full rounded border p-3"
                required
              />
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label className="mb-1 block font-medium">
                Description
              </label>

              <textarea
                value={description}
                onChange={(e) =>
                  setDescription(e.target.value)
                }
                placeholder="Describe this construction project..."
                rows={5}
                className="w-full rounded border p-3"
                required
              />
            </div>

            {/* Images */}
            <div className="md:col-span-2">
              <label className="mb-1 block font-medium">
                Image URLs
              </label>

              <textarea
                value={images}
                onChange={(e) =>
                  setImages(e.target.value)
                }
                placeholder={`Paste one image URL per line

https://example.com/house1.jpg
https://example.com/house2.jpg`}
                rows={5}
                className="w-full rounded border p-3"
              />

              <p className="mt-1 text-sm text-gray-500">
                For now, enter one image URL per line.
              </p>
            </div>

            {/* Featured */}
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={featured}
                onChange={(e) =>
                  setFeatured(e.target.checked)
                }
              />

              Featured Project
            </label>

            {/* Submit */}
            <div className="md:col-span-2">

              <button
                type="submit"
                className="rounded bg-yellow-600 px-6 py-3 font-bold text-white hover:bg-yellow-700"
              >
                {editingId
                  ? "Update Project"
                  : "Add Project"}
              </button>

            </div>

          </form>
        </section>

        {/* Projects */}
        <section>

          <h2 className="mb-5 text-2xl font-bold">
            Existing Projects
          </h2>

          {loading ? (
            <p>Loading projects...</p>
          ) : projects.length === 0 ? (
            <div className="rounded bg-white p-6 shadow">
              No projects found.
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {projects.map((project) => (

                <div
                  key={project._id}
                  className="overflow-hidden rounded-lg bg-white shadow"
                >

                  {/* Image */}
                  {project.images.length > 0 ? (
                    <img
                      src={project.images[0]}
                      alt={project.name}
                      className="h-52 w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-52 items-center justify-center bg-gray-200">
                      No Image
                    </div>
                  )}

                  <div className="p-5">

                    <div className="mb-2 flex items-start justify-between gap-2">

                      <h3 className="text-xl font-bold">
                        {project.name}
                      </h3>

                      {project.featured && (
                        <span className="rounded bg-yellow-100 px-2 py-1 text-xs font-bold text-yellow-800">
                          Featured
                        </span>
                      )}

                    </div>

                    <p className="text-sm text-gray-500">
                      {project.category} • {project.year}
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      {project.location}
                    </p>

                    <p className="mt-3 line-clamp-3 text-gray-600">
                      {project.description}
                    </p>

                    <p className="mt-3 text-sm">
                      <strong>
                        {project.images.length}
                      </strong>{" "}
                      image(s)
                    </p>

                    <div className="mt-4 flex gap-2">

                      <button
                        onClick={() =>
                          editProject(project)
                        }
                        className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          deleteProject(project._id)
                        }
                        className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                      >
                        Delete
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>
          )}

        </section>

      </main>
    </div>
  );
}