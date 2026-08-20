import honorHallRaw from '~~/content/honor-hall.json'

export interface HonorHallLink {
  label: string
  url: string
}

export interface HonorHallEntry {
  name: string
  date: string
  description: string
  links?: HonorHallLink[]
}

export const honorHall = (honorHallRaw as HonorHallEntry[])
  .slice()
  .sort((a, b) => b.date.localeCompare(a.date))
