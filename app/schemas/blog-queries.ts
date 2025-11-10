const getRecentArticlesQuery = `
        query {
          articulos(
            pagination: { limit: 5 }
            sort: ["fecha:DESC", "updatedAt:DESC"]
          ) {
            id
            slug
            titulo
            fecha
            tag
            descripcion
            descripcionCorta
            imagen {
              id
              url
            }
          }
        }
      `;

const getArticleBySlugQuery = `
        query GetArticleBySlug($slug: String!) {
          articulos(filters: { slug: { eq: $slug } }, pagination: { limit: 1 }) {
            id
            slug
            titulo
            fecha
            tag
            descripcion
            imagen {
              id
              url
            }
          }
        }
      `;

const getAllArticlesQuery = `
        query {
          articulos(pagination: { limit: -1 }, sort: ["fecha:desc"]) {
            id
            slug
            titulo
            fecha
            tag
            descripcion
            imagen {
              id
              url
            }
          }
        }
      `;

export { getRecentArticlesQuery, getArticleBySlugQuery, getAllArticlesQuery };
