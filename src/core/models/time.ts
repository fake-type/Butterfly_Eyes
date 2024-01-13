import { z } from 'zod'

export const timeConfigScheme = z.object({
  ishour12: z.boolean().default(false),
  displaySeconds: z.boolean().default(true)
})

export type Clock = z.infer<typeof timeConfigScheme>
