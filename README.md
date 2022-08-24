# ⏪ Rewinds — Remix Tailwind Starter Kit

![tailwindcss v3](https://img.shields.io/badge/tailwindcss-v3-0F172A?logo=tailwindcss&style=flat&labelColor=38bdf8&logoColor=ffffff)

Rewinds is a Remix starter kit with Tailwind CSS v3 family of libraries and the TypeScript ecosystem.

This is an example demo to combine the best Tailwind-related ecosystem such as [Tailwind CSS](https://tailwindcss.com), [Headless UI](https://headlessui.dev), [Radix UI](https://radix-ui.com) + [`tailwindcss-radix`](https://tailwindcss-radix.vercel.app), [Reach UI](https://reach.tech), [Vechai UI](https://vechaiui.com), and more. Therefore this repo is kind of over-engineered to have high flexibility and cover a lot of use cases for different projects/products.

Check out the repo and visit the live demo:

- [mhaidarhanif/rewinds](https://github.com/mhaidarhanif/rewinds)
- [rewinds.mhaidarhanif.com](https://rewinds.mhaidarhanif.com)
- [rewinds.vercel.app](https://rewinds.vercel.app)
- [rewinds.dev](https://rewinds.dev) (Soon)

You can deploy this yourself. Just put attention to [setup the environment variables](#environment-variables) on Vercel or any of the deployment target you choose beforehand.

For recommended and alternative stack selections, they are mostly listed and detailed in [the Catamyst Stack](https://a.catamyst.com/stack) documentation.

Depending on your configuration, the app might need [GraphCMS](https://graphcms.com) to serve the content for [the blog articles example](https://rewinds.mhaidarhanif.com/blog). Otherwise you can remove or swap the blog content source from anywhere else.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mhaidarhanif/rewinds/tree/main)
[![Clone project](https://graphcms.com/button)](https://app.graphcms.com/clone/573c72908a25476eaf3373c7fe105233)

## Screenshots

> ⚠️ The repo is ongoing active development so a lot of things might change quickly.

<div style="max-width: 720px;">

[![Home Light](public/assets/screenshots/home-light.png)](https://rewinds.mhaidarhanif.com)

[![Home Dark](public/assets/screenshots/home-dark.png)](https://rewinds.mhaidarhanif.com)

</div>

## What's inside

More into what we can do or what you get. The complete features are listed in [the about page](https://rewinds.mhaidarhanif.com/about). While the complete examples are listed in [the examples page](https://rewinds.mhaidarhanif.com/examples).

- [x] Remix as the web framework
- [x] React as the UI library
- [x] TypeScript as the programming language
  - [x] Absolute import such as `~/components`, `~/configs`, `~/libs`, `~/types`, `~/utils`
  - [x] Auto order import with Prettier and ESLint
- [x] Tailwind CSS using Vechai UI as the base components
  - [x] Various examples that use Headless UI and Radix UI
- [x] Multiple themes switcher and persist theme with a session cookie
  - [ ] Not yet with system theme auto detect
- [x] Commonly used pages/routes with contents
- [x] Ready to use components that highly customizable
- [x] Form submission with either Remix Form or React Hook Form
- [x] Data fetching with REST API or GraphQL
- [x] Nested routes use cases
- [ ] Optimistic UI on form submit
- [ ] Storybook for components development
- [x] VS Code recommended settings, extensions, and snippets
- [x] GitHub template for issues and pull requests
- [x] Only focus on the frontend styling and project structure, without particular in testing and database
  - Just a bit of backend integration through Remix loader for REST API and GraphQL
  - For the full stack integration with database and testing, check out the official [Remix Stacks](ttps://remix.run/stacks) instead.

## Stacks

More into what is being used. The complete stacks are listed in [the about page](https://rewinds.mhaidarhanif.com/about).

- [x] VS Code
- [x] TypeScript v4.7
  - [x] Type checking is enforced after type inference
- [x] Node.js v14-v17
- [x] npm v8
  - Not Yarn because v1 & v2 difference
  - Not pnpm just because of familiarity
- [x] React v17
  - Not v18 yet because of incompatibility with Vechai UI at the moment
  - Might upgrade to v18 soon after checking with Remix and solve the issue with Vechai UI
  - Otherwise if you don't need Vechai UI for handling multiple themes of Tailwind CSS, you can use React v18 with Remix v1.6.8
- [x] Remix v1.6.x
- [x] Tailwind CSS v3.1.x
- [x] PostCSS v8
- [x] Fonts
  - [x] Google Fonts
  - [x] Fontbit CDN
- [x] Icons
  - [x] React Icons
  - [x] Heroicons v1
  - [x] Font Awesome
  - [x] Phospor Icons
  - [ ] Iconify
- [x] Styled the headless unstyled components
  - [x] Headless UI v1.6 — Unstyled accessible UI components
  - [x] Radix UI v0 — Unstyled accessible UI components
    - [x] Tailwind Radix
  - [x] Reach UI v0 — Unstyled accessible UI components
  - [x] Vechai UI v0 — React Tailwind CSS components
  - [ ] Downshift — Primitives to build simple, flexible, WAI-ARIA compliant React autocomplete/combobox or select dropdown components
  - [ ] React Aria v3 — Library of React Hooks that provides accessible UI primitives for your design system
  - [ ] Ariakit (v2) — Toolkit for building accessible web apps with React
    - [ ] Reakit (v1) — Toolkit for building accessible UIs
- [x] NProgress — Navigation progress
- [x] React Hook Form — Complex client side form handling
- [x] React Lazyload
- [x] Markdoc for Markdown parser
  - [x] For other RichText, can also use [RichText from GraphCMS](app/components/rich-text/rich-text-graphcms.tsx)
  - [ ] Alternatively can also use Marked
- [x] Prism.js for code syntax highlighting
  - [ ] Alternatively can also use Highlight.js
- [x] CSS classname utility with `clsx` or `cx`, aliased as `classx`
- [x] GraphQL query/mutate with `graphql-request` and `urql`
- [x] REST API request with `fetch` and `axios`
- [x] ESLint v8
  - [x] `eslint-config-airbnb`
  - [x] `eslint-config-prettier`
- [x] Stylelint v14
- [x] Prettier v2
  - [x] `prettier-plugin-tailwindcss`
- [x] Git hooks with Husky to lint staged files
  - [x] `eslint`, `stylelint`, `prettier`, `typecheck`
- [x] Deployment to Vercel
- [ ] Internationalization with i18next

> ⚠️ Make sure to not using React v18 yet as there's an issue with Vechai UI and Reach UI. Unless you want to remove them for now.

## Development

### Clone repo

Choose either way:

a. Click [Use this template button on GitHub](https://github.com/mhaidarhanif/rewinds/generate).

b. Clone directly:

```sh
git clone https://github.com/mhaidarhanif/rewinds my-rewinds-project
```

c. Clone with a clean Git history:

```sh
npx degit https://github.com/mhaidarhanif/rewinds my-rewinds-project
```

### Install dependencies

To run your Remix app locally, make sure your project's local dependencies are installed:

```sh
npm install
# Can still use yarn or pnpm, just be aware of the lock file
```

### Environment variables

If you've run `npm install`, the `postinstall` script should copy the example `.env` automatically. Otherwise you can manually copy the `.env.example` into `.env`:

```sh
cp -i .env.example .env
# `-i` or `--interactive` will prompt before overwrite
```

Then edit `.env` as you prefer.

> ⚠️ Make sure to setup the environment variables here, on Vercel, or on your preferred deployment target. Otherwise the app will break on production. That's why I already put some preset strings in the `.env.example` which you can copy directly.

Important variables:

- `SESSION_SECRET`
  - Session secret for persisting the themes on browser sessions
  - You can use `openssl rand -base64 32` to generate a secret/key and use it
- `REST_ENDPOINT`
  - Primary REST API endpoint to be used with `fetch` or `axios`
- `GRAPHQL_ENDPOINT`
  - Primary GraphQL API endpoint to be used with `graphql-request` or `urql`

If you don't need some of these, you can remove them in the `.env`, `app/utils/env.server.ts`, and all `getEnvServer()` function calls.

Afterwards, run the Remix development server with the `dev` script. This will watch and compile for both the Tailwind styles and Remix app.

```sh
npm run dev
```

You can also use the `d` script for a quick way. This will compile Tailwind styles once and only watch the Remix app changes.

```sh
npm run d
```

Finally, open up [http://localhost:3000](http://localhost:3000) and you should be ready to go!

Note if you're used to using the `vercel dev` command provided by [Vercel CLI](https://vercel.com/cli) instead, you can also use that, but it's not needed. Although it can help with the Environment variables setup (no need to use `.env` file).

> ℹ️ Depending on your computer processing power, the first Tailwind compilation might take around ~3 seconds. Although Tailwind CSS v3 already has Just-in-Time engine enabled by default.

- https://tailwindcss.com/blog/just-in-time-the-next-generation-of-tailwind-css
- https://tailwindcss.com/docs/upgrade-guide#migrating-to-the-jit-engine

### Environment variables using Doppler

If you want to use [Doppler](https://doppler.com) to manage the environment variables, use the `dev:doppler` script. Therefore you won't need the `.env` file to be edited manually.

```sh
npm run dev:doppler
# doppler run -- npm run dev
```

### Project structure

Keep in mind that the structure is designed for scalability for medium-large project. If your project scope is too simple or too small, Rewinds might be a bit too much to handle.

- `.husky`
- `.vscode`
- `api`
- `app`
  - `components`: custom and aliased components
  - `configs`
  - `contents`
  - `data`
  - `features`
  - `graphql`
  - `hooks`
  - `layouts`
  - `libs`: Wrapper for `node_modules`
  - `routes`: Remix routes
  - `styles`
    - `out.css`: Tailwind output file
  - `types`
  - `utils`
  - `entry.client.tsx`
  - `entry.server.tsx`
  - `root.tsx`
  - `other-root-routes.server.ts`
- `public`
- `styles`
  - `global.css`: Tailwind input file
- `.gitignore`
- `package.json`
  - `.commitlintrc`
  - `.editorconfig`
  - `.eslintignore`
  - `.eslintrc`
  - `.lintstagedrc`
  - `.npmrc`
  - `.nvmrc`
  - `.prettierignore`
  - `.prettierrc`
  - `.stylelintrc`
  - `tsconfig.json`
  - `vercel.json`
- `README.md`
- `remix.config.js`
  - `.env`
  - `.env.example`
  - `postcss.config.js`
  - `tailwind.config.js`
  - `remix.env.d.ts`
  - `tsconfig.json`
- `server.js`

There are also some code you can customize with your own branding by editing all the things that commented with `EDITME` by using search in your editor.

Especially:

- `README.md`
- `LICENSE`
- `package.json`
- `.github` and its contents
- `site.webmanifest`

Also when using this starter kit, you might want to remove most of the code in:

- `app`
  - `data`: custom data
  - `contents`: custom contents
  - `routes`: custom routes

Other than those you might want to keep them.

### Configuration for SEO

To refresh the site preview cache for each sites, they usually have their own validators:

- `sitemap.xml` and `robots.txt`: Google Search Console
- Facebook: Open Graph Sharing Debugger
- Telegram: Webpage Bot
- Twitter: Twitter Card Validator
- LinkedIn: LinkedIn Post Inspector

## Build

Make sure that it can build just fine:

```sh
npm run build
```

For more complementing the build:

```sh
npm run build
npm run lint
```

## Lint

Make sure to lint the code with both ESLint and Stylelint:

```sh
npm run lint
```

Or individually:

```sh
npm run eslint
npm run stylelint
npm run prettier
npm run typecheck
```

## Deployment

After having run the `create-remix` command and selected "Vercel" as a deployment target, you only need to [import your Git repository](https://vercel.com/new) into Vercel, and it will be deployed.

Or you can click the buttons in the introduction.

If you'd like to avoid using a Git repository, you can also deploy the directory by running [Vercel CLI](https://vercel.com/cli):

```sh
npm i -g vercel
vercel
```

It is generally recommended to use a Git repository, because future commits will then automatically be deployed by Vercel, through its [Git Integration](https://vercel.com/docs/concepts/git).

> ⚠️ Make sure to setup the environment variables in the project settings.

## Notes

### Remix

If you have older way of importing from `remix` package prior to `remix@1.4.3` or `remix@1.6.0`, you can [use the `migrate` script](https://github.com/remix-run/remix/releases/tag/v1.6.0) to change the import statements.

```sh
npx @remix-run/dev migrate
```

Before:

```jsx
import { json, redirect } from "remix";
```

After:

```jsx
import { json, redirect } from "@remix-run/node";
```

### Vechai UI

Edit `tailwind.config.js` to remove custom colors to reduce the stylesheet build size. `cssBase` is still required to get the default Tailwind CSS colors into Vechai UI themes.

```diff
module.exports = {
  // ...
  theme: {
    extend: {
      colors: {
-       info: colors.blue,
-       success: colors.green,
-       warning: colors.yellow,
-       error: colors.red,
      },
    },
  },
  plugins: [
    // ...
   require('@vechaiui/core')({
     cssBase: true,
-    colors: ['info', 'success', 'warning', 'error'],
   }),
  ],
};
```

### ConvertKit

1. Sign up a new account on ConvertKit
2. Edit your profile information
3. Get the API Key to be used as `CONVERTKIT_API_KEY`
4. Create a Subscribe Form
5. Get the Form ID to be used as `CONVERTKIT_FORM_ID`

Tips:

- Setup the Mailing Address: https://help.convertkit.com/en/articles/2502494-alternatives-for-your-physical-address

### Other references

- [Bulletproof React - A simple, scalable, and powerful architecture for building production ready React applications](https://github.com/alan2207/bulletproof-react)
- [Why we use Tailwind CSS as our primary framework | Clean Commit](https://cleancommit.io/blog/why-we-use-tailwind-css-as-our-primary-framework)
- [An Honest Look at Tailwind as an API for CSS | thoughtbot, inc.](https://thoughtbot.com/blog/an-honest-look-at-tailwind-as-an-api-for-css)
- [Styling Best Practices I Use With Tailwind CSS | theodorusclarence.com](https://theodorusclarence.com/blog/tailwindcss-best-practice)
- [Fix roperty does not exist on type 'never' in TypeScript | bobbyhadz](https://bobbyhadz.com/blog/typescript-property-does-not-exist-on-type-never)
