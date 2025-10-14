import { cleanGraphQLResponse } from "~/utils/functions";

export default function () {
  async function getAllProjects() {
    try {
      const graphql = useStrapiGraphQL();

      const { data: projects, error } = await graphql<any>(`
        query {
          proyectos(pagination: { limit: -1 }) {
            data {
              attributes {
                slug
              }
            }
          }
        }
      `);

      if (error) {
        return {
          status: "error",
          message: "GraphQL error",
          data: error.value,
        };
      }

      return {
        status: "ok",
        message: "succesfull",
        data: projects.proyectos.data,
      };
    } catch (e) {
      return {
        status: "error",
        message: "Unknown error",
        data: null,
      };
    }
  }

  async function getRecentProjects() {
    try {
      const graphql = useStrapiGraphQL();

      const { data: projects, error } = await graphql<any>(`
        query {
          proyectos(
            pagination: { limit: 5 }
            sort: ["ano:DESC", "updatedAt:DESC"]
          ) {
            data {
              id
              attributes {
                slug
                titulo
                descripcion
                ano
                miniatura {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                categoria {
                  data {
                    attributes {
                      slug
                      nombre
                    }
                  }
                }
              }
            }
          }
        }
      `);

      if (error) {
        return {
          status: "error",
          message: "GraphQL error",
          data: error.value,
        };
      }

      return {
        status: "ok",
        message: "succesfull",
        data: cleanGraphQLResponse(projects.proyectos.data),
      };
    } catch (e) {
      return {
        status: "error",
        message: "Unknown error",
        data: null,
      };
    }
  }

  async function getCategoriesWithProjects() {
    try {
      const graphql = useStrapiGraphQL();

      const { data: categories, error } = await graphql<any>(`
        query {
          categorias {
            data {
              id
              attributes {
                nombre
                slug
                proyecto {
                  data {
                    id
                    attributes {
                      slug
                      titulo
                      miniatura {
                        data {
                          attributes {
                            url
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `);

      if (error) {
        return {
          status: "error",
          message: "GraphQL error",
          data: error.value,
        };
      }

      return {
        status: "ok",
        message: "succesfull",
        data: cleanGraphQLResponse(categories.categorias.data),
      };
    } catch (e) {
      return {
        status: "error",
        message: "Unknown error",
        data: null,
      };
    }
  }

  async function getProjectBySlug(_slug: any) {
    try {
      const graphql = useStrapiGraphQL();

      const { data: projects, error } = await graphql<any>(`
        query {
          proyectos(filters: { slug: { eq: "${_slug}" } }, pagination: { limit: 1 }) {
            data {
              id
              attributes {
                slug 
                titulo
                descripcion
                ano
                miniatura {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                categoria {
                  data {
                    attributes {
                      slug
                      nombre
                    }
                  }
                }
              }
            }
          }
        }
      `);

      if (error) {
        return {
          status: "error",
          message: "GraphQL error",
          data: error.value,
        };
      }

      return {
        status: "ok",
        message: "succesfull",
        data: cleanGraphQLResponse(projects.proyectos.data),
      };
    } catch (e) {
      return {
        status: "error",
        message: "Unknown error",
        data: null,
      };
    }
  }

  return {
    getAllProjects,
    getRecentProjects,
    getCategoriesWithProjects,
    getProjectBySlug,
  };
}
