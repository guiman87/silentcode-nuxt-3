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
export interface Contact {
  web?: String
  email?: String
  address?: String
  phone?: String
}
