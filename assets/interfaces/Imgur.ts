/* eslint-disable camelcase */
// noinspection SpellCheckingInspection
export interface ImgurResponseData {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly datetime: number
  readonly type: string
  readonly animated: boolean
  readonly width: number
  readonly height: number
  readonly size: number
  readonly bandwidth: number
  readonly section: string
  readonly link: string
  readonly favourite: boolean
  readonly nsfw: boolean
  readonly vote: string
  readonly in_gallery: boolean
  readonly gifv?: string
  readonly mp4?: string
  readonly mp4_size?: number
  readonly looping?: boolean
  readonly deletehash?: string
  readonly name?: string
}
