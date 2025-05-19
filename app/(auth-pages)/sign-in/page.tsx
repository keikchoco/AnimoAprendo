import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='flex grow p-10 pb-10'>
      <div className="m-auto w-fit">
        <SignIn appearance={{
          layout: {
            logoImageUrl: '/images/AnimoAprendoGreenTransparent.png',
            logoPlacement: 'inside',
            unsafe_disableDevelopmentModeWarnings: true,
          }
        }} />
      </div>
    </div>)

}


