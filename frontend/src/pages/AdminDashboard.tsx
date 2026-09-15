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

type UploadedImage = {
  url: string;
  publicId: string;
};

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

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

  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  const [editingId, setEditingId] = useState<string | null>(
    null
  );

  const [name, setName] = useState("");
  const [category, setCategory] =
    useState<ProjectCategory>("Residential");
  const [location, setLocation] = useState("");
  const [year, setYear] = useState(
    new Date().getFullYear()
  );
  const [description, setDescription] = useState("");

  // Existing images already saved in Cloudinary
  const [images, setImages] = useState<string[]>([]);

  // New files selected from computer
  const [selectedFiles, setSelectedFiles] = useState<File[]>(
    []
  );

  const [featured, setFeatured] = useState(false);

  const getToken = () => {
    return localStorage.getItem("adminToken");
  };

  /*
  |--------------------------------------------------------------------------
  | CHECK LOGIN
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    const token = getToken();

    if (!token) {
      navigate("/admin");
      return;
    }

    loadProjects();
  }, [navigate]);

  /*
  |--------------------------------------------------------------------------
  | LOAD PROJECTS
  |--------------------------------------------------------------------------
  */

  const loadProjects = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `${API_URL}/api/projects?limit=50`
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Failed to load projects"
        );
      }

      setProjects(data.items || []);
    } catch (error) {
      console.error(
        "Failed to load projects:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  /*
  |--------------------------------------------------------------------------
  | CLEAR FORM
  |--------------------------------------------------------------------------
  */

  const clearForm = () => {
    setEditingId(null);
    setName("");
    setCategory("Residential");
    setLocation("");
    setYear(new Date().getFullYear());
    setDescription("");
    setImages([]);
    setSelectedFiles([]);
    setFeatured(false);
  };

  /*
  |--------------------------------------------------------------------------
  | SELECT IMAGES FROM COMPUTER
  |--------------------------------------------------------------------------
  */

  const handleFileSelection = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = Array.from(e.target.files || []);

    if (files.length === 0) {
      return;
    }

    // Only images
    const imageFiles = files.filter((file) =>
      file.type.startsWith("image/")
    );

    if (imageFiles.length !== files.length) {
      alert("Only image files are allowed.");
    }

    // Maximum 10 images
    if (imageFiles.length > 10) {
      alert("You can select a maximum of 10 images.");

      setSelectedFiles(imageFiles.slice(0, 10));
    } else {
      setSelectedFiles(imageFiles);
    }

    // Allows selecting the same file again later
    e.target.value = "";
  };

  /*
  |--------------------------------------------------------------------------
  | REMOVE NEW SELECTED IMAGE
  |--------------------------------------------------------------------------
  */

  const removeSelectedFile = (index: number) => {
    setSelectedFiles((currentFiles) =>
      currentFiles.filter(
        (_, currentIndex) => currentIndex !== index
      )
    );
  };

  /*
  |--------------------------------------------------------------------------
  | REMOVE EXISTING IMAGE
  |--------------------------------------------------------------------------
  */

  const removeExistingImage = (index: number) => {
    setImages((currentImages) =>
      currentImages.filter(
        (_, currentIndex) => currentIndex !== index
      )
    );
  };

  /*
  |--------------------------------------------------------------------------
  | UPLOAD IMAGES TO CLOUDINARY
  |--------------------------------------------------------------------------
  */

  const uploadImages = async (): Promise<string[]> => {
    if (selectedFiles.length === 0) {
      return [];
    }

    const token = getToken();

    if (!token) {
      navigate("/admin");
      return [];
    }

    const formData = new FormData();

    selectedFiles.forEach((file) => {
      formData.append("images", file);
    });

    setUploading(true);

    try {
      const response = await fetch(
        `${API_URL}/api/projects/upload`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Image upload failed"
        );
      }

      const uploadedImages: UploadedImage[] =
        data.images || [];

      return uploadedImages.map(
        (image) => image.url
      );
    } catch (error) {
      throw new Error(
        error instanceof Error
          ? error.message
          : "Image upload failed"
      );
    } finally {
      setUploading(false);
    }
  };

  /*
  |--------------------------------------------------------------------------
  | ADD / UPDATE PROJECT
  |--------------------------------------------------------------------------
  */

  const saveProject = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    const token = getToken();

    if (!token) {
      navigate("/admin");
      return;
    }

    if (!name.trim()) {
      alert("Please enter a project name.");
      return;
    }

    if (!location.trim()) {
      alert("Please enter a location.");
      return;
    }

    if (!description.trim()) {
      alert("Please enter a description.");
      return;
    }

    setSaving(true);

    try {
      /*
       * First upload new images to Cloudinary.
       */
      const newImageUrls = await uploadImages();

      /*
       * Combine:
       *
       * Existing images
       * +
       * Newly uploaded images
       */
      const allImages = [
        ...images,
        ...newImageUrls,
      ];

      const projectData = {
        name: name.trim(),
        category,
        location: location.trim(),
        year: Number(year),
        description: description.trim(),
        images: allImages,
        featured,
      };

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
        throw new Error(
          data.error || "Failed to save project"
        );
      }

      alert(
        editingId
          ? "Project updated successfully!"
          : "Project added successfully!"
      );

      clearForm();

      await loadProjects();
    } catch (error) {
      alert(
        error instanceof Error
          ? error.message
          : "Something went wrong"
      );
    } finally {
      setSaving(false);
    }
  };

  /*
  |--------------------------------------------------------------------------
  | EDIT PROJECT
  |--------------------------------------------------------------------------
  */

  const editProject = (project: Project) => {
    setEditingId(project._id);

    setName(project.name);
    setCategory(project.category);
    setLocation(project.location);
    setYear(project.year);
    setDescription(project.description);

    // Existing Cloudinary URLs
    setImages(project.images || []);

    // Clear files selected for a previous operation
    setSelectedFiles([]);

    setFeatured(project.featured);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /*
  |--------------------------------------------------------------------------
  | DELETE PROJECT
  |--------------------------------------------------------------------------
  */

  const deleteProject = async (id: string) => {
    const token = getToken();

    if (!token) {
      navigate("/admin");
      return;
    }

    const confirmed = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (!confirmed) {
      return;
    }

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

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Failed to delete project"
        );
      }

      alert("Project deleted successfully!");

      await loadProjects();
    } catch (error) {
      alert(
        error instanceof Error
          ? error.message
          : "Delete failed"
      );
    }
  };

  /*
  |--------------------------------------------------------------------------
  | LOGOUT
  |--------------------------------------------------------------------------
  */

  const logout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");

    navigate("/admin");
  };

  /*
  |--------------------------------------------------------------------------
  | UI
  |--------------------------------------------------------------------------
  */

  return (
    <div className="min-h-screen bg-gray-100">

      {/* HEADER */}
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
            type="button"
            onClick={logout}
            className="rounded border border-white/30 px-4 py-2 hover:bg-white/10"
          >
            Logout
          </button>

        </div>
      </header>

      <main className="mx-auto max-w-7xl p-6">

        {/* ADD / EDIT PROJECT */}
        <section className="mb-8 rounded-lg bg-white p-6 shadow">

          <div className="mb-6 flex items-center justify-between">

            <h2 className="text-2xl font-bold">
              {editingId
                ? "Edit Project"
                : "Add New Project"}
            </h2>

            {editingId && (
              <button
                type="button"
                onClick={clearForm}
                className="rounded border px-4 py-2 hover:bg-gray-100"
              >
                Cancel Edit
              </button>
            )}

          </div>

          <form
            onSubmit={saveProject}
            className="grid gap-4 md:grid-cols-2"
          >

            {/* PROJECT NAME */}
            <div>
              <label className="mb-1 block font-medium">
                Project Name
              </label>

              <input
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                placeholder="Modern Residential House"
                className="w-full rounded border p-3 outline-none focus:border-blue-500"
                required
              />
            </div>

            {/* CATEGORY */}
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
                className="w-full rounded border p-3 outline-none focus:border-blue-500"
              >
                {categories.map((item) => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {/* LOCATION */}
            <div>
              <label className="mb-1 block font-medium">
                Location
              </label>

              <input
                value={location}
                onChange={(e) =>
                  setLocation(e.target.value)
                }
                placeholder="Nandyal, Andhra Pradesh"
                className="w-full rounded border p-3 outline-none focus:border-blue-500"
                required
              />
            </div>

            {/* YEAR */}
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
                className="w-full rounded border p-3 outline-none focus:border-blue-500"
                required
              />
            </div>

            {/* DESCRIPTION */}
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
                className="w-full rounded border p-3 outline-none focus:border-blue-500"
                required
              />

            </div>

            {/* IMAGE UPLOAD */}
            <div className="md:col-span-2">

              <label className="mb-2 block font-medium">
                Project Images
              </label>

              <div className="rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-6 text-center">

                <input
                  id="project-images"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleFileSelection}
                  className="hidden"
                />

                <label
                  htmlFor="project-images"
                  className="inline-block cursor-pointer rounded-lg bg-navy-900 px-6 py-3 font-semibold text-white hover:opacity-90"
                >
                  Select Images
                </label>

                <p className="mt-3 text-sm text-gray-500">
                  Select up to 10 images from your
                  computer.
                </p>

                <p className="text-xs text-gray-400">
                  Maximum 5 MB per image.
                </p>

              </div>

              {/* EXISTING IMAGES */}
              {images.length > 0 && (
                <div className="mt-6">

                  <h3 className="mb-3 font-semibold">
                    Existing Images
                  </h3>

                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">

                    {images.map(
                      (image, index) => (
                        <div
                          key={`${image}-${index}`}
                          className="relative overflow-hidden rounded-lg border bg-white"
                        >

                          <img
                            src={image}
                            alt={`Project image ${index + 1}`}
                            className="h-32 w-full object-cover"
                          />

                          <button
                            type="button"
                            onClick={() =>
                              removeExistingImage(index)
                            }
                            className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-red-600 text-lg font-bold text-white hover:bg-red-700"
                          >
                            ×
                          </button>

                        </div>
                      )
                    )}

                  </div>

                </div>
              )}

              {/* NEW SELECTED IMAGES */}
              {selectedFiles.length > 0 && (
                <div className="mt-6">

                  <h3 className="mb-3 font-semibold">
                    New Images
                  </h3>

                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">

                    {selectedFiles.map(
                      (file, index) => (
                        <div
                          key={`${file.name}-${file.size}-${index}`}
                          className="relative overflow-hidden rounded-lg border bg-white"
                        >

                          <img
                            src={URL.createObjectURL(file)}
                            alt={file.name}
                            className="h-32 w-full object-cover"
                          />

                          <button
                            type="button"
                            onClick={() =>
                              removeSelectedFile(index)
                            }
                            className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-red-600 text-lg font-bold text-white hover:bg-red-700"
                          >
                            ×
                          </button>

                          <div className="truncate p-2 text-xs text-gray-500">
                            {file.name}
                          </div>

                        </div>
                      )
                    )}

                  </div>

                </div>
              )}

            </div>

            {/* FEATURED */}
            <label className="flex items-center gap-2">

              <input
                type="checkbox"
                checked={featured}
                onChange={(e) =>
                  setFeatured(e.target.checked)
                }
              />

              <span>Featured Project</span>

            </label>

            {/* SAVE */}
            <div className="md:col-span-2">

              <button
                type="submit"
                disabled={saving || uploading}
                className="rounded bg-yellow-600 px-6 py-3 font-bold text-white hover:bg-yellow-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {uploading
                  ? "Uploading Images..."
                  : saving
                    ? "Saving Project..."
                    : editingId
                      ? "Update Project"
                      : "Add Project"}
              </button>

            </div>

          </form>
        </section>

        {/* EXISTING PROJECTS */}
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

                  {/* COVER IMAGE */}
                  {project.images?.length > 0 ? (
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
                      {project.category} •{" "}
                      {project.year}
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      {project.location}
                    </p>

                    <p className="mt-3 line-clamp-3 text-gray-600">
                      {project.description}
                    </p>

                    <p className="mt-3 text-sm">
                      <strong>
                        {project.images?.length || 0}
                      </strong>{" "}
                      image(s)
                    </p>

                    <div className="mt-4 flex gap-2">

                      <button
                        type="button"
                        onClick={() =>
                          editProject(project)
                        }
                        className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                      >
                        Edit
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          deleteProject(
                            project._id
                          )
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