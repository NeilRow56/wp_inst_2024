import type { Session, User } from 'next-auth'
import type { JWT } from '@auth/core/jwt'

declare module 'next-auth/jwt' {
  interface JWT {
    id: string
    firstName?: string | null
  }
}

declare module 'next-auth' {
  interface Session {
    user: User & {
      firstName?: string | null
    }
  }

  interface User {
    firstName?: string | null
  }
}
