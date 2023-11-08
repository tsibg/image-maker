## SDXL Image Generator
 This project uses SDXL model on [Replicate](https://replicate.com) to generate images based on a prompt.
 Uses NextJS App Router, experimental Server Actions and [Replicate SDK](https://github.com/replicate/replicate-javascript).
 
![Site preview](public/site-preview.png)

Live Preview: https://image-maker-mu.vercel.app/

Note: I used this project for playground for the experimental [Server Actions](https://nextjs.org/docs/app/api-reference/functions/server-actions) and foundation for a project with Replicate SDK.

Update: Upgraded to NextJS 14 to use now-stable Server Actions. Refactored code for easier reuse.

## Getting Started

1. Create `.env` with your [Replicate API Token](https://replicate.com/account/api-tokens)

```
REPLICATE_API_TOKEN="<YOUR API TOKEN>"
```

2. Npm Install
```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

### Project structure
Based on NextJS [App Router](https://nextjs.org/docs/app)

`src/config/replicate.config.js` - Config for default input and model params

`src/app/actions/replicate.js` - Server Actions for Replicate SDK

`src/app/(generator)` - Generator functionality

`src/app/(generator)/ui` - Client components

`src/app/(generator)/page.js` - Entry point

`src/app/(generator)/images/[id]/page.js` - Generated Image result


### Improvement ideas
- Polling of image progress with client-side HTTP requests and Route Handlers, instead of Server Actions.
- Handle non-existing images (The replicate source image is available for limited time)
