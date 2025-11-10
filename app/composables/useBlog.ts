import {
  getAllArticlesQuery,
  getArticleBySlugQuery,
  getRecentArticlesQuery,
} from "~/schemas/blog-queries";

export default function () {
  const graphql = useStrapiGraphQL();

  async function getRecentArticles() {
    try {
      const { data: articles, error } = await graphql<any>(
        getRecentArticlesQuery
      );

      if (error || !articles.articulos || articles.articulos.length === 0) {
        return {
          status: "error",
          message: "GraphQL error",
          data: error.value,
        };
      }

      return {
        status: "ok",
        message: "succesfull",
        data: articles.articulos,
      };
    } catch (e) {
      return {
        status: "error",
        message: "Unknown error",
        data: null,
      };
    }
  }

  async function getArticleBySlug(_slug: string) {
    try {
      const query = getArticleBySlugQuery;

      const variables = { slug: _slug };
      const { data: articles, error } = await graphql<any>(query, variables);

      if (error || !articles.articulos || articles.articulos.length === 0) {
        return {
          status: "error",
          message: "GraphQL error",
          data: error.value,
        };
      }

      return {
        status: "ok",
        message: "succesfull",
        data: articles.articulos,
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
      const { data: articles, error } = await graphql<any>(getAllArticlesQuery);

      if (error || !articles.articulos || articles.articulos.length === 0) {
        return {
          status: "error",
          message: "GraphQL error",
          data: error.value,
        };
      }

      return {
        status: "ok",
        message: "succesfull",
        data: articles.articulos,
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
