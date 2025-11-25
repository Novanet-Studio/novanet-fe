# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Meta Pixel (Facebook)

To enable Meta Pixel (Facebook Pixel) tracking, set the `META_PIXEL_ID` environment variable for your runtime. Example using a `.env` file:

```bash
# .env
META_PIXEL_ID=your_pixel_id_here
```

The project includes a client plugin `plugins/metaPixel.client.ts` that initializes the pixel and tracks page views automatically. Use the composable `useMetaPixel()` to send events from components:

```ts
const { track, trackCustom } = useMetaPixel()
track('Purchase', { value: 9.99, currency: 'USD' })
trackCustom('MyCustomEvent', { foo: 'bar' })
```
