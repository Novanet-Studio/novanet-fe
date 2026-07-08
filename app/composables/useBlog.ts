export default function useBlog() {
  const { get, getOne } = useKairos()

  function normalize(item: any) {
    return {
      slug: item.slug,
      titulo: item.titulo,
      fecha: item.fecha,
      tag: item.tag,
      descripcion: item.descripcion,
      descripcionCorta: item['descripcion-corta'],
      imagen: item.imagen,
    }
  }

  async function getRecentArticles() {
    try {
      const data = await get<any>('articulos', { limit: '5', sort: 'fecha:DESC' })
      if (!data?.length) return { status: 'error', message: 'No data', data: null }
      return { status: 'ok', message: 'ok', data: data.map(normalize) }
    } catch {
      return { status: 'error', message: 'Unknown error', data: null }
    }
  }

  async function getArticleBySlug(_slug: string) {
    try {
      const item = await getOne<any>('articulos', _slug)
      if (!item) return { status: 'error', message: 'No data', data: null }
      return { status: 'ok', message: 'ok', data: [normalize(item)] }
    } catch {
      return { status: 'error', message: 'Unknown error', data: null }
    }
  }

  async function getAllArticles() {
    try {
      const data = await get<any>('articulos', { sort: 'fecha:DESC' })
      if (!data?.length) return { status: 'error', message: 'No data', data: null }
      return { status: 'ok', message: 'ok', data: data.map(normalize) }
    } catch {
      return { status: 'error', message: 'Unknown error', data: null }
    }
  }

  return { getRecentArticles, getAllArticles, getArticleBySlug }
}
