export default function usePortfolio() {
  const { get, getOne } = useKairos()

  function normalizeProject(item: any) {
    return {
      slug: item.slug,
      titulo: item.titulo,
      descripcion: item.descripcion,
      'descripcion-corta': item['descripcion-corta'],
      ano: item.periodo,
      miniatura: item.miniatura,
      categoria: { slug: item.relations?.Categoria?.[0]?.data?.slug },
    }
  }

  async function getAllProjects() {
    try {
      const data = await get<any>('proyectos')
      if (!data?.length)
        return { status: 'error', message: 'No data', data: null }
      return {
        status: 'ok',
        message: 'ok',
        data: data.map((p: any) => ({ slug: p.slug })),
      }
    } catch {
      return { status: 'error', message: 'Unknown error', data: null }
    }
  }

  async function getRecentProjects() {
    try {
      const data = await get<any>('proyectos', {
        itemsPerPage: '5',
        orderBy: 'periodo',
        sort: 'DESC',
        populate: 'Categoria',
      })

      if (!data?.length)
        return { status: 'error', message: 'No data', data: null }
      return { status: 'ok', message: 'ok', data: data.map(normalizeProject) }
    } catch {
      return { status: 'error', message: 'Unknown error', data: null }
    }
  }

  async function getCategoriesWithProjects() {
    try {
      const projects = await get<any>('proyectos', {
        itemsPerPage: '100',
        orderBy: 'created_at',
        sort: 'DESC',
        populate: 'Categoria',
      })
      if (!projects?.length)
        return { status: 'error', message: 'No data', data: null }

      // Relación n:n: cada proyecto se agrupa en TODAS sus categorías embebidas.
      const byCategory = new Map<string, any>()
      for (const p of projects) {
        for (const { data: cat } of p.relations?.Categoria ?? []) {
          if (!byCategory.has(cat.slug)) {
            byCategory.set(cat.slug, {
              slug: cat.slug,
              nombre: cat.nombre,
              descripcion: cat.descripcion,
              proyecto: [],
            })
          }
          byCategory.get(cat.slug).proyecto.push(normalizeProject(p))
        }
      }
      return { status: 'ok', message: 'ok', data: [...byCategory.values()] }
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

  return {
    getAllProjects,
    getRecentProjects,
    getCategoriesWithProjects,
    getProjectBySlug,
  }
}
