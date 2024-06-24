import { Navbar } from '../components'

export default function LayoutComponent({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <span className="text-2xl">Desarrollo Next</span>
      {children}
    </>
  )
}
