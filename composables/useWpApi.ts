export default () => {


  const config = useRuntimeConfig()

  const wpUri = config.public.wpUri

  const get = async<T>(endpoint: string) => {
    return useFetch<T>(`${wpUri}/wp-json/wp/v2/${endpoint}`)
  }


  // 获取所有文章


  const getPosts = async<T>(categories?: number, page: number = 1, perPage: number = 9) => {
    let query = `posts?_embed&per_page=${perPage}&page=${page}`
    if (categories) {
      query += `&categories=${categories}`
    }
    return get<T>(query)
  }


  // 获取单篇文章

  const getPost = async<T>(slug: string) => {
    return get<T>(`posts?slug=${slug}&_embed`)
  }

  // 获取所有分类


  const getCategories = async<T>() => {
    return get<T>('categories')
  }


  // 获取单个分类

  const getCategory = async (slug: string) => {
    return get(`categories?slug=${slug}`)
  }

  return {
    get, getPost, getPosts, getCategories, getCategory
  }

}