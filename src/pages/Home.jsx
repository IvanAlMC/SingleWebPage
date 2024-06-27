import { Link } from '../Link'

export default function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p>Que mas parcero, esta en la pagina de !Bienvenida¡, ando haciendo un React Router</p>
      <Link to='/about'>Ir a Sobre nosotros</Link>
    </>
  )
}