const getAllProjectsQuery = `
        query {
          proyectos(pagination: { limit: -1 }) {
            slug
          }
        }
      `;

const getRecentProjectsQuery = `
        query {
          proyectos(
            pagination: { limit: 5 }
            sort: ["ano:DESC", "updatedAt:DESC"]
          ) {
            id
            slug
            titulo
            descripcion
            descripcionCorta
            ano
            miniatura {
              id
              url
            }
            categoria {
              id
              slug
              nombre
            }
          }
        }
      `;

const getCategoriesWithProjectsQuery = `
        query {
          categorias {
            id
            nombre
            slug
            descripcion
            proyecto {
              id
              slug
              titulo
              miniatura {
                id
                url
              }
            }
          }
        }
      `;

const getProjectBySlugQuery = `
        query GetProjectBySlug($slug: String!) {
          proyectos(filters: { slug: { eq: $slug } }, pagination: { limit: 1 }) {
            id
            slug 
            titulo
            descripcion
            descripcionCorta
            ano
            miniatura {
              id
              url
            }
            categoria {
              id
              slug
              nombre
            }
          }
        }
      `;

export {
  getAllProjectsQuery,
  getRecentProjectsQuery,
  getCategoriesWithProjectsQuery,
  getProjectBySlugQuery,
};
