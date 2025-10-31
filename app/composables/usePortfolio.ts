import {
  getAllProjectsQuery,
  getCategoriesWithProjectsQuery,
  getProjectBySlugQuery,
  getRecentProjectsQuery,
} from "~/schemas/portafolio-queries";

export default function () {
  const graphql = useStrapiGraphQL();

  async function getAllProjects() {
    try {
      const { data: projects, error } = await graphql<any>(getAllProjectsQuery);

      if (error.value) {
        return { status: "error", message: "GraphQL error", data: error.value };
      }

      return { status: "ok", message: "succesfull", data: projects.proyectos };
    } catch (e) {
      return { status: "error", message: "Unknown error", data: null };
    }
  }

  async function getRecentProjects() {
    try {
      const { data: projects, error } = await graphql<any>(
        getRecentProjectsQuery
      );

      if (error || !projects.proyectos) {
        return { status: "error", message: "GraphQL error", data: error.value };
      }

      return {
        status: "ok",
        message: "succesfull",
        data: projects.proyectos,
      };
    } catch (e) {
      return { status: "error", message: "Unknown error", data: null };
    }
  }

  async function getCategoriesWithProjects() {
    try {
      const { data: categories, error } = await graphql<any>(
        getCategoriesWithProjectsQuery
      );

      if (error || !categories.categorias) {
        return { status: "error", message: "GraphQL error", data: error.value };
      }

      return {
        status: "ok",
        message: "succesfull",
        data: categories.categorias,
      };
    } catch (e) {
      return { status: "error", message: "Unknown error", data: null };
    }
  }

  async function getProjectBySlug(_slug: string) {
    try {
      const variables = { slug: _slug };
      const { data: projects, error } = await graphql<any>(
        getProjectBySlugQuery,
        variables
      );

      if (error || !projects.proyectos || projects.proyectos.length === 0) {
        return { status: "error", message: "GraphQL error", data: error.value };
      }

      return {
        status: "ok",
        message: "succesfull",
        data: projects.proyectos,
      };
    } catch (e) {
      return { status: "error", message: "Unknown error", data: null };
    }
  }

  return {
    getAllProjects,
    getRecentProjects,
    getCategoriesWithProjects,
    getProjectBySlug,
  };
}
