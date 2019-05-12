export interface ILanguage {
  item: {
    id: string
    name: string
  }
  position: number
}

export type Languages = {
  languages: ILanguage[]
}

// export interface ILetter {
//   letter: string
// }

// export type Letters = {
//   letters: ILetter[]
// }
