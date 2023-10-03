CORDITE
==

## Install

Copy necessary .env variables to your local repo.
- [Neon PG](https://vercel.com/cordite-team/cordite)
- [GoogleAuth](https://console.cloud.google.com/iam-admin/settings?project=cordite-400623)
- [Cloudinary](https://console.cloudinary.com/console/c-c948318a8484880032a89041fda66c)


run `pnpm install`

## Run locally

```
pnpm watcher
```

```
pnpm dev
```

## Git Cheatsheet

**Checkout an existing branch**

Used to switch to git branch 
```
git checkout <branch_name>
```
**Checkout a new branch**
```
git checkout -b <branch_name>
```
**Pull the latest commit**

This will pull the latest code for you existing branch from the server. _You should do this before you begin writing any code, every time you checkout a branch_

```
git pull
```

Make sure your branch has any new files that you created.

```
git add .
```

Commit your changes, along with a message explaining what they are. You should keep your message short, about a dozen words or so.

```
git commit -m "Changed the menu styles in Layout.tsx"
```

Send your changes to the repository

```
git push
```

You shouldn't really do this locally, this should be handled via [pull request](https://github.com/fleetwood/cordite/pulls), but if you have to merge, this will merge the specified branch (`branch_name`) into your current branch.

```
git merge branch_name
```

## Directory

**components/**

This is the directory for your react components.

**components/containers**

These are the views for rendering Prisma Models (see [schema.prisma](/prisma/schema.prisma))

**components/forms**

For `<form>` functionality, such as inputs, select, text, etc.

**components/ui**

These are the generic components that are repurposed in various areas throughout the site, such as buttons, [Dialogs](/components/ui/dialogs/), [Cards](/components/ui//Card.tsx), etc


**context**

For context providers, the most important of which is the [UserCpntext](/context/UserContext.tsx)

**hooks**

Hooks are repurposable code that perform state-management and utility functionality. These in particular are very helpful to be familiar with.
- [useAuth](/hooks/useAuth.ts)
- [useDebug](/hooks/useDebug.ts)
- [useRocketQuery](/hooks/useRocketQuery.ts)

**pages**

In NextJS, the pages directory is a special directory that creates all the routes on your site. So the `levels.tsx` page creates a route to `http://localhost/levels`  Next automatically transpiles `*.tsx` files into javascript, inlcuding creating bundles of code that packages all of your `imports` and `tailwind` styles into the page.

Beneath the **pages** directory is an **api** subdirectory. The api is a special directory that create will not render html, but instead creates a backend api for the site. For example, [api/me.ts](/pages/api/me.ts) is a route that will query Prisma for the current logged-in user, while [api/stat/exp/all.ts](/pages/api/stat/exp/all.ts) will query for all [Expressions](/prisma/entities/statExp.ts) in the database.

Furthermore, in the api directories you might see pages that look like this: [/api/stat/exp/[id].ts](/pages/api/stat/exp/[id].ts)  In this case `[id]` is a special page name that says "_this is a dynamic route_", meaning it can change.
- http://localhost/api/stat/exp/1234
- http://localhost/api/stat/exp/5678
- http://localhost/api/stat/exp/ACDE-FGH-123456

If you look at the handler for this page: 
```
const request = async (req: NextApiRequest, res: NextApiResponse) =>
  useApi(res, 'api/stat/exp/[id]', PrismaStatExp.find(req.query.id.toString()))
export default request
```

...notice `req.query.id` ?  That's because the dynamic portion of the route, `[id]` is being passed as a property to the request. If you used `[slug].ts` for the page name, then that would expose the slug property to the request, `req.query.slug`.

More on prisma entities later.

## Tailwind and DaisyUI

[Tailwind](https://tailwindcss.com/docs) is a css framework that immensely speeds up development and code maintainability. [DaisyUI](https://daisyui.com) is a theming library that also includes a sizable chunk of outstanding components. Many of the `classNames` you'll see are daisy classes, such as `text-primary`, `text-secondary`, etc, while the more "basic" are probably tailwind, `p-4`, `flex flex-col` and others. 

The `grid` and `flex` systems can be confusing. Read about it and try it out yourself. You'll only learn it by doing. If you need help on how to use Tailwind styles, the docs really are the best place to go, but you can also find some [good cheatsheets](https://nerdcave.com/tailwind-cheat-sheet) to help you out.

The colors are determined by a `Daisy` theme, which can be changed in [tailwind.config.js](/tailwind.config.js)

```
daisyui: {
  themes: [
    {
      corditeDark: {
        primary: '#A2A881',
        secondary: '#7A8538',
        accent: '#83781B',
        neutral: '#2b3440',
        'base-100': '#121212',
        info: '#2ACBCB',
        success: '#7AC465',
        warning: '#EDE556',
        error: '#781919',
      },
    }
  ],
  ...
}
```

You can also extend Tailwind/Daisy in this file, but probably better to get help. It can also be frustrating to get correct.



## Stack
### NextJS 13.5.3

### Prisma 5.3.1

### Typescript 5.2.2

### Tailwind 3.3.3

### React Query Toolkit 3.39.3

#### Also
- axios 1.5.1
- daisyUI 3.8.2
- dayjs 1.11.10
- headlessui/react 1.7.17
- next-auth 4.23.1
- react-dropzone 14.2.3

---
