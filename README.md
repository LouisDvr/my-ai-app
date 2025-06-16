# Sample AI chatbot app

This repo contains a simple AI chatbot app, drafted with Expo and Vercel's AI SDK.

The LLM used is OpenAI's ChatGPT 4o so to have it work, you'll need to generate an OpenAI API key and add it to an environment file (see the operating procedure below). You can change the LLM used by using another provider in the `chat+apis.ts` file. The [AI SDK doc](https://ai-sdk.dev/docs/foundations/providers-and-models) lists the supported providers alongside the package you'll need to use.

# How to start the app?

1. Install the dependencies (this repo uses pnpm)

```
pnpm install
```

2. Create a `.env.local` file at the root of the project

```
touch .env.local
```

3. Generate an OpenAI API key and paste it in your `.env.local` file

```
OPENAI_API_KEY=<you-api-key>
```

4. Start the app

```
pnpm start
```
