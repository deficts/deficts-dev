import Container from './container'

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="py-1 flex flex-col lg:flex-row items-center">
          <h3 className="font-bold tracking-tighter leading-tight text-center mb-3 w-full">
            Created with ❤️
          </h3>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
