import Footer from './footer'
import Meta from './meta'
import { Nav } from './nav'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen ">
        <Nav></Nav>
        <main>{children}</main>
        <Footer></Footer>
      </div>
    </>
  )
}

export default Layout
