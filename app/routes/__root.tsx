import {
  HeadContent,
  Outlet,
  createRootRoute,
  Scripts,
} from '@tanstack/react-router'
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
      <html>
        <head>
          <HeadContent />
        </head>
        <body>
          {children}
          <Scripts />
        </body>
      </html>
    </ClerkProvider>
  )
}
