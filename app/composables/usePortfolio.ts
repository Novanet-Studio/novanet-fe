export default function usePortfolio() {
  const { get, getOne } = useKairos()

  function normalizeProject(item: any) {
    return {
      slug: item.slug,
      titulo: item.titulo,
      descripcion: item.descripcion,
      descripcionCorta: item['descripcion-corta'],
      ano: item.periodo,
      miniatura: item.miniatura,
      categoria: { slug: item['categoria-slug'] },
    }
  }

  async function getAllProjects() {
    try {
      const data = await get<any>('proyectos')
      if (!data?.length) return { status: 'error', message: 'No data', data: null }
      return { status: 'ok', message: 'ok', data: data.map((p: any) => ({ slug: p.slug })) }
    } catch {
      return { status: 'error', message: 'Unknown error', data: null }
    }
  }

  async function getRecentProjects() {
    try {
      const data = await get<any>('proyectos', { itemsPerPage: '5', orderBy: 'created_at', sort: 'DESC' })
      if (!data?.length) return { status: 'error', message: 'No data', data: null }
      return { status: 'ok', message: 'ok', data: data.map(normalizeProject) }
    } catch {
      return { status: 'error', message: 'Unknown error', data: null }
    }
  }

  async function getCategoriesWithProjects() {
    try {
      const [cats, projects] = await Promise.all([
        get<any>('categorias'),
        get<any>('proyectos'),
      ])
      if (!cats?.length) return { status: 'error', message: 'No data', data: null }
      const data = cats.map((cat: any) => ({
        slug: cat.slug,
        nombre: cat.nombre,
        descripcion: cat.descripcion,
        proyecto: (projects ?? [])
          .filter((p: any) => p['categoria-slug'] === cat.slug)
          .map(normalizeProject),
      }))
      return { status: 'ok', message: 'ok', data }
    } catch {
      return { status: 'error', message: 'Unknown error', data: null }
    }
  }

  async function getProjectBySlug(_slug: string) {
    try {
      const item = await getOne<any>('proyectos', _slug)
      if (!item) return { status: 'error', message: 'No data', data: null }
      return { status: 'ok', message: 'ok', data: [normalizeProject(item)] }
    } catch {
      return { status: 'error', message: 'Unknown error', data: null }
    }
  }

  return { getAllProjects, getRecentProjects, getCategoriesWithProjects, getProjectBySlug }
}
