import { format, addMinutes, startOfDay, setMinutes, setSeconds, setMilliseconds } from 'date-fns'


export function getAllTimeSlots(): string[] {
  const slots: string[] = []
  const start = startOfDay(new Date()) 
  for (let i = 0; i < 24 * 2; i++) {
    const time = addMinutes(start, i * 30)
    slots.push(format(time, 'h:mm a')) 
  }
  return slots
}

export function getCurrentTimeSlot(): string {
  const now = new Date()
  const minutes = now.getMinutes()

  const roundedMinutes = minutes < 15 ? 0 : minutes < 45 ? 30 : 0
  if (minutes >= 45) {
    now.setHours(now.getHours() + 1)
  }

  const rounded = setMilliseconds(setSeconds(setMinutes(now, roundedMinutes), 0), 0)
  return format(rounded, 'h:mm a')
}
