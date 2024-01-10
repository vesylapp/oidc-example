import { serve } from '@hono/node-server'
import { readFileSync } from 'fs'
import { Hono } from 'hono'
import { fetch } from 'undici'

const clientId = 'acme-client'
const authUrl = 'https://auth.test.vesyl.com'
const apiUrl = 'https://orders-api-test.vesyl.com'
const redirectUri = 'https://vesyl.local/callback'

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

const app = new Hono()

const db: Record<string, any> = {}

app.get('/', (ctx) => {
  const html = readFileSync(__dirname + '/../public/index.html', 'utf8')
  return ctx.html(html)
})

app.get('/callback', async (ctx) => {
  const code = ctx.req.query('code') || ''

  const response = await fetch(`${authUrl}/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      code,
      client_id: clientId,
      redirect_uri: redirectUri,
      grant_type: 'authorization_code',
    }),
  })
  if (!response.ok) return ctx.status(response.status)

  const data: any = await response.json()
  const accessToken = data.access_token

  db.accessToken = accessToken

  return ctx.redirect('/orders')
})

app.get('/orders', async (ctx) => {
  const response = await fetch(`${apiUrl}/v1.0/orders`, {
    headers: { Authorization: `Bearer ${db.accessToken}` },
  })

  if (!response.ok) return ctx.status(response.status)

  const orders = await response.json()

  return ctx.json(orders)
})

console.log('🚀 Server ready at http://localhost:3000')

serve(app)
