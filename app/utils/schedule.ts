import events from '~~/content/events.json'

export interface ScheduleEvent {
  date: string
  time: string
  title: string
  detail: string
  where: string
  kind: string
  datetime?: string
}

const typedEvents = events as ScheduleEvent[]

export const hasSchedule = typedEvents.length > 0
export const nextEvent: ScheduleEvent | null = typedEvents[0] ?? null
