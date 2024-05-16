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
  filterByCategory: (categoryId: string, selector?: string) => void;
  removeFilters: () => void;
}

const simpleQuery = `
query Projects {
  proyectos {
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

  const graphql = useStrapiGraphQL();

  const getCategories = async () => {
    try {
      isLoading.value = true;
      const response = await graphql<any>(simpleQuery);

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
  };
}
