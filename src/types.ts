export interface IPerson {
  firstName: string
  lastName: string
  occupation: string
}

export type People = {
  people: IPerson[]
}

export interface IPlace {
  name: string
}

export type Places = {
  places: IPlace[]
}
