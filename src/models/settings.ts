import { z } from 'zod'
import { timeConfigScheme } from './time'

export const settingsScheme = z.object({
  timeFormat: timeConfigScheme.optional()
})

export type Settings = z.infer<typeof settingsScheme>
