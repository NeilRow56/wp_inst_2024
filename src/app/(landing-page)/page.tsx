import LoginButton from '@/components/auth/LoginButton'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Poppins } from 'next/font/google'

const font = Poppins({
  subsets: ['latin'],
  weight: ['600'],
})

export default function Home() {
  // const { userId } = auth()

  // if (userId) redirect('/dashboard')
  return (
    <section className="flex h-screen items-center justify-center bg-background">
      <div className="relative mx-auto w-full max-w-7xl items-center px-5 py-12 md:px-12 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <div className="gap-8">
            <div className="mb-8">
              <span className=" w-auto rounded-full bg-secondary px-6 py-3">
                <span className="text-sm font-medium text-primary">
                  Landing Page
                </span>
              </span>
            </div>

            <h1
              className={cn(
                'text-6xl font-semibold drop-shadow-md',
                font.className
              )}
            >
              🔐 Online Working Papers
            </h1>
            <p className="mx-auto mt-8 max-w-xl text-base text-secondary-foreground lg:text-xl">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et d
            </p>
          </div>

          <div className="mx-auto mt-10 flex max-w-sm justify-center">
            <LoginButton>
              <Button variant="default" size="lg">
                Sign In
              </Button>
            </LoginButton>
          </div>
        </div>
      </div>
    </section>
  )
}
