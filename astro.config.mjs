import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import { sanityIntegration as sanity } from '@sanity/astro'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind(),
    sanity({
      projectId: 'k7xaxt1p',
      dataset: 'production',
      apiVersion: '2023-11-18',
      useCdn: false
    })
  ]
})
