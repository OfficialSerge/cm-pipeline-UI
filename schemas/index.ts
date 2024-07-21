import { z } from 'zod'

// ignore validating form till later
// this app is no production app!
export const appSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  name: z.string(),
  title: z.string(),
  outputDirectory: z.string(),
  inputDirectory: z.string(),
  resolution: z.number().min(0).max(5).step(0.0001),
  kCoreValue: z.number().min(0).max(5).step(1),
})
