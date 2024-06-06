// import strapiMapper from 'smapper';
// import { GetCategories } from '~/graphql/queries';
import type { Ref } from 'vue';

interface Params {
  ordered?: boolean;
}

interface Result {
  projects: Ref<any[]>;
  projectsResult: Ref<any[]>;
  categoryActive: Ref<string>;
  isLoading: Ref<boolean>;
  total: Ref<number>;
  pageCount: Ref<number>;
  filterByCategory: (categoryId: string, selector?: string) => void;
  resetFilters: () => void;
  fetchProjects: (page: number, pageSize: number) => void;
}

const query = (page = 1, pageSize = 10) => `
query Projects {
  proyectos(pagination: { page: ${page}, pageSize: ${pageSize} }) {
    data {
      id
      attributes {
        titulo
        descripcion
        slug
        miniatura {
          data {
            attributes {
              url
              alternativeText
            }
          }
        }

        categoria {
          data {
            id
            attributes {
              slug
            }
          }
        }
      }
    }

    meta {
      pagination {
        total
        pageCount
      }
    }
  }
}
`;

const queryByCategoryId = `
query Projects($slug: String!) {
	proyectos(filters: { categoria: { slug: { eq: $slug } } }) {
		data {
			id
			attributes {
				titulo
				descripcion
				slug
				miniatura {
					data {
						attributes {
							url
							alternativeText
						}
					}
				}

				categoria {
					data {
						id
						attributes {
							slug
						}
					}
				}
			}
		}
	}
}
`;

export default function useProjects(params?: Params): Result {
  const projects = useState<any[]>('projects', () => []);
  const projectsResult = useState<any[]>('projectsResult', () => []);
  const categoryActive = useState('categoryActive', () => 'all');
  const isLoading = useState<boolean>('isCategoriesLoading', () => false);
  const total = useState<number>('total', () => 0);
  const pageCount = useState<number>('pageCount', () => 0);

  const graphql = useStrapiGraphQL();

  const getCategories = async () => {
    try {
      isLoading.value = true;
      const response = await graphql<any>(query());

      if (params?.ordered) {
        const ordered = response.data.proyectos.data.sort(
          (a: any, b: any) => Number(a.id) - Number(b.id),
        );
        projects.value = ordered;
        projectsResult.value = ordered;
        return;
      }

      projects.value = response.data.proyectos.data;
      projectsResult.value = response.data.proyectos.data;
      total.value = response.data.proyectos.meta.pagination.total;
      pageCount.value = response.data.proyectos.meta.pagination.pageCount;
    } catch (error) {
      console.log(error);
      projects.value = [];
    } finally {
      isLoading.value = false;
    }
  };

  const fetchProjects = async (page = 1, pageSize = 10) => {
    try {
      isLoading.value = true;
      const response = await graphql<any>(query(page, pageSize));

      if (page > 1) {
        projects.value = [...projects.value, ...response.data.proyectos.data];
        projectsResult.value = [
          ...projects.value,
          ...response.data.proyectos.data,
        ];
        total.value = response.data.proyectos.meta.pagination.total;
        pageCount.value = response.data.proyectos.meta.pagination.pageCount;
        return;
      }

      projects.value = response.data.proyectos.data;
      projectsResult.value = response.data.proyectos.data;
      total.value = response.data.proyectos.meta.pagination.total;
      pageCount.value = response.data.proyectos.meta.pagination.pageCount;
    } catch (error) {
      console.log(error);
      projects.value = [];
    } finally {
      isLoading.value = false;
    }
  };

  const filterByCategory = async (slug: string, selector = '') => {
    try {
      categoryActive.value = slug;

      if (slug === 'all') {
        projectsResult.value = projects.value;
        return;
      }

      const filtered = await graphql<any>(queryByCategoryId, {
        slug,
      });

      projectsResult.value = projects.value.filter(
        (project) => project.attributes.categoria.data.attributes.slug === slug,
      );

      if (filtered.data.proyectos.data.length > 0) {
        projectsResult.value = filtered.data.proyectos.data;
      }

      if (!selector) return;

      setTimeout(() => {
        document.querySelector(selector)?.scrollIntoView({
          behavior: 'smooth',
        });
      }, 1000);
    } catch (error) {
      projectsResult.value = projects.value;
    }
  };

  const resetFilters = () => {
    categoryActive.value = 'all';
    getCategories();
  };

  onMounted(() => {
    getCategories();
  });

  return {
    projects,
    categoryActive,
    projectsResult,
    isLoading,
    filterByCategory,
    resetFilters,
    fetchProjects,
    total,
    pageCount,
  };
}
