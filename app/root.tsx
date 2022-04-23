import { useEffect, useState } from 'react';
import {
  json,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
  useTransition,
} from 'remix';

import { H1, NProgress, ThemeProvider } from '~/components';
import { configApp } from '~/configs';
import { commitSession, getSession } from '~/sessions';

import type { LinksFunction, LoaderFunction, MetaFunction } from 'remix';

import styles from '~/styles/app.css';

export const links: LinksFunction = () => {
  return [
    {
      rel: 'shortcut icon',
      href: '/favicons/favicon.ico',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicons/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicons/favicon-16x16.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/favicons/apple-touch-icon.png',
    },
    {
      rel: 'mask-icon',
      href: '/favicons/safari-pinned-tab.svg',
      color: '#0081f1',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
    {
      href: 'https://fontbit.io',
      rel: 'preconnect',
    },
    {
      href: 'https://fontbit.io/css2?family=Lato&display=swap',
      rel: 'stylesheet',
    },
    {
      rel: 'stylesheet',
      href: styles,
    },
  ];
};

export const meta: MetaFunction = () => {
  return {
    charset: 'utf-8',
    viewport: 'width=device-width,initial-scale=1',
    title: 'Rewinds - Remix Tailwind Starter Kit - by @mhaidarhanif',
    description:
      'Rewinds is a Remix starter kit with Tailwind CSS family of libraries',
    name: 'Rewinds',
    url: 'https://rewinds.mhaidarhanif.com/',
    route: '',
    color: '#ffffff',
    ogImageAlt: 'Rewinds - Remix Tailwind Starter Kit',
    ogImageType: 'image/jpeg',
    ogImageUrl: 'assets/opengraph/rewinds-og.jpg',
    twiterImageUrl: 'assets/opengraph/rewinds-og.jpg',
    fbAppId: '',
    locale: 'en_US',
  };
};

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'));
  const themeFromSession = await session.get('theme');

  // Only parse if theme string exist
  const themeParsed = themeFromSession
    ? JSON.parse(themeFromSession)
    : configApp?.theme;

  const data = {
    user: await session.get('user'),
    theme: themeParsed,
    error: await session.get('error'),
  };

  return json(data, {
    headers: {
      'Set-Cookie': await commitSession(session),
    },
  });
};

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

interface DocumentProps {
  children: React.ReactNode;
}

export function Document({ children }: DocumentProps) {
  const data = useLoaderData();
  const transition = useTransition();

  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (transition.state === 'idle') setIsTransitioning(false);
    else setIsTransitioning(true);
  }, [transition.state]);

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>

      <body className="scroll-smooth">
        <ThemeProvider specifiedTheme={data?.theme}>
          <NProgress isAnimating={isTransitioning} />
          {children}
        </ThemeProvider>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <Document>
      <H1>Remix Caught</H1>

      <div>
        <p>Status: {caught.status}</p>
        <pre>
          <code>{JSON.stringify(caught.data, null, 2)}</code>
        </pre>
      </div>
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Document>
      <H1>Remix Error</H1>

      <div>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    </Document>
  );
}
