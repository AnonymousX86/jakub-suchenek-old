export interface HomeImage {
  readonly id: number
  readonly title: string
  readonly link: string
  readonly alt: string
  readonly text: string
}

export interface Photo {
  readonly description: string
  readonly link: string
  readonly thumbnail: string
  readonly width: number
  readonly height: number
}

export interface Project {
  readonly name: string
  readonly description: string
  readonly technology: string
  readonly icon: string[]
  readonly link?: string
}
