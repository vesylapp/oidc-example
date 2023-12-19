import { serve } from '@hono/node-server'
import { readFileSync } from 'fs'
import { Hono } from 'hono'
import { fetch } from 'undici'

const clientId = 'acme-client'
const baseUrl = 'https://auth.test.vesyl.com/'
const redirectUri = 'https://vesyl.local/callback'

const app = new Hono()

app.get('/', (ctx) => {
  const html = readFileSync(__dirname + '/../public/index.html', 'utf8')
  return ctx.html(html)
})

app.get('/callback', async (ctx) => {
  const code = ctx.req.query('code') || ''

  const response = await fetch(`${baseUrl}/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      code,
      client_id: clientId,
      redirect_uri: redirectUri,
      grant_type: 'authorization_code',
    }),
  })

  if (!response.ok) {
    return ctx.status(response.status)
  }

  const data = await response.json()
  return ctx.json(data)
})

console.log('🚀 Server ready at http://localhost:3000')

serve(app)
