import '../styles/header.css';

const Header = (props) =>{
    return (
        <header>
            <div className="holder">
            <a href='http://localhost:3000'><img src="images/logo.jpg " width="100 " alt="Logo"/>
            <h1>Antigüedades</h1></a>
            <a className="btn btn-secondary" href='http://localhost:3001/'> Iniciar Sesión <i className='fas fa-sign-in-alt'></i></a>
            </div>
        </header>
    )
}

export default Header;