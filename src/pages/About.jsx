import { Link } from '../Link'

export default function AboutPage () {
    return(
      <>
        <h1>About</h1>
        <div>
          <img src="https://scontent.fbog20-1.fna.fbcdn.net/v/t39.30808-6/241635688_3038936926366049_1490320519618307312_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFFNWOHQ2l1Bagwr_Hb2lYHC2Wd8BUOWuYLZZ3wFQ5a5uQWlGYUbSLaCDHIsHD8CU9oaAC4WswoNtmSPSj0Ca3v&_nc_ohc=1Zwz6gUQI74Q7kNvgGqzghG&_nc_zt=23&_nc_ht=scontent.fbog20-1.fna&oh=00_AYDtT-impXMPA1N-I9mVI3b0jBHsNtfGXVlAfdnPtbVzkA&oe=668251C8" alt="La mia foto " />
          <p>Que mas pues.... Soy Ivan y vea que ando haciendo un React Router</p>
        </div>
        <Link to='/'>Ir a Home :3</Link>
      </>
    )
}