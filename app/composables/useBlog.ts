import { cleanGraphQLResponse } from "~/utils/functions";

export default function () {
  async function getRecentArticles() {
    try {
      const graphql = useStrapiGraphQL();

      const { data: articles, error } = await graphql<any>(`
        query {
          articulos(
            pagination: { limit: 5 }
            sort: ["fecha:DESC", "updatedAt:DESC"]
          ) {
            data {
              id
              attributes {
                slug
                titulo
                fecha
                tag
                descripcion
                imagen {
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
        data: cleanGraphQLResponse(articles.articulos.data),
      };
    } catch (e) {
      return {
        status: "error",
        message: "Unknown error",
        data: null,
      };
    }
  }

  async function getArticleBySlug(_slug: any) {
    try {
      const graphql = useStrapiGraphQL();

      const { data: articles, error } = await graphql<any>(`
        query {
          articulos(filters: { slug: { eq: "${_slug}" } }, pagination: { limit: 1 }) {
           data {
              id
              attributes {
                slug
                titulo
                fecha
                tag
                descripcion
                imagen {
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
        data: cleanGraphQLResponse(articles.articulos.data),
      };
    } catch (e) {
      return {
        status: "error",
        message: "Unknown error",
        data: null,
      };
    }
  }

  async function getAllArticles() {
    try {
      const graphql = useStrapiGraphQL();

      const { data: articles, error } = await graphql<any>(`
        query {
          articulos(pagination: { limit: -1 }, sort: ["fecha:desc"]) {
            data {
              id
              attributes {
                slug
                titulo
                fecha
                tag
                descripcion
                imagen {
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
        data: cleanGraphQLResponse(articles.articulos.data),
      };
    } catch (e) {
      return {
        status: "error",
        message: "Unknown error",
        data: null,
      };
    }
  }

  return { getRecentArticles, getAllArticles, getArticleBySlug };
}
