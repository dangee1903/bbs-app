export interface Meta {
  pagination: Pagination
}

export interface Pagination {
  total: number
  count: number
  per_page: number
  current_page: number
  total_pages: number
  links: Links
}

export interface Links {
  next: string
}
