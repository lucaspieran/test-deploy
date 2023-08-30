export interface Case {
  title: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  locations: string
  industry: string
  employees: string
  challenge: string
  headerImg?: { data?: { attributes?: { url?: string } } }
  logo?: { data?: { attributes?: { url?: string } } }
  bodyImg: { data?: { attributes?: { url?: string } } }
  quoteAuthorImg?: { data?: { attributes?: { url?: string } } }
  solution: string
  ingeniaWay: IngeniaWay
  drivers: string
  products: string
  quoteText: string
  quoteAuthor: string
  quoteAuthorRole: string
  locale: string
  name: string
  ingenialWayText: string
}

export interface IngeniaWay {
  tasks: Task[]
}

export interface Task {
  id: string
  description: string
  subtasks?: string[]
}

export interface Case {
  id: number
  attributes: Attributes
}

export interface Attributes {
  name: string
  title: string
  body: string
  logo?: { data?: { attributes?: { url?: string } } }
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  locale: string
}

export interface Positions {
  id?: number
  attributes?: AttributesPosition
}

export interface AttributesPosition {
  name: string
  title: string
  description: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  locale: string
  role_description: string
  knowledge: string
  skills: string
}

export interface Note {
  id: number
  attributes: {
    title: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    locale: string
    name: string
    author: string
    body: string
    news?: boolean
    body_box: string
    author_role: string
    description: string
    link_article: string
    img: { data?: { attributes?: { url?: string } } }
    body_img: any
    header_img: { data?: { attributes?: { url?: string } } }
    author_img: { data?: { attributes?: { url?: string } } }
  }
}

export interface Course {
  id: number
  attributes: {
    name: string
    title: string
    img: { data?: { attributes?: { url?: string } } }
    description: string
    video: string | null
    createdAt: string
    updatedAt: string
    publishedAt: string
    locale: string
    data: any | null
    description_course: string
    quote: string | null
    quote_author: string | null
  }
}
