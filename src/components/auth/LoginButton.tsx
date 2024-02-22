'use client'

import { useRouter } from 'next/navigation'

type LoginButtonProps = {
  children: React.ReactNode
  mode?: 'modal' | 'redirect'
  asChild?: boolean
}

const LoginButton = ({
  children,
  mode = 'redirect',
  asChild,
}: LoginButtonProps) => {
  const router = useRouter()

  const onClick = () => {
    router.push('/auth/login')
  }

  // mode is current set above to the default of 'redirect' as we do not yet have modal
  if (mode === 'modal') {
    return <span>TODO: Implement modal</span>
  }
  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  )
}

export default LoginButton
