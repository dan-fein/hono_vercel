import { Hono } from 'hono'
import { handle } from 'hono/vercel'

// export const config = {
//   runtime: 'edge'
// }

const app = new Hono().basePath('/api')

app.get('/', (c) => {
  return c.json({ message: "Congrats! You've deployed Hono to Vercel" })
})

export default handle(app)
