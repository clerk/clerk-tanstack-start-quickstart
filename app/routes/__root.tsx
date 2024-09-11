import { Outlet, ScrollRestoration, createRootRoute } from '@tanstack/react-router'
import { Body, Head, Html, Meta, Scripts } from '@tanstack/start'
import type * as React from 'react'
import { ClerkProvider } from '@clerk/tanstack-start'

export const Route = createRootRoute({
  component: () => {
    return (
      <RootDocument>
        <Outlet />
      </RootDocument>
    )
  },
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <Html>
        <Head>
          <Meta />
        </Head>
        <Body>
          {children}
          <ScrollRestoration />
          <Scripts />
        </Body>
      </Html>
    </ClerkProvider>
  )
}
