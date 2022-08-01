export interface Person {
  initials: { name: String; lastname: String }
  name: String
  lastname: String
}
export interface ResumeItem {
  title?: String
  subtitle?: String
  content?: String
  link?: String
  skills?: Array<String>
}
export interface Skill {
  title?: String
  content?: String
  icon?: String
  viewBox?: String
}
export interface Contact {
  web?: String
  email?: String
  address?: String
  phone?: String
}
export interface MenuItem {
  to?: String
  href?: String
  text?: String
  icon?: String
}

export interface PortfolioItem {
  name?: String
  title?: String
  description?: String
  date?: String
  link?: String
}

export type selectedTheme = 'light' | 'dark'
