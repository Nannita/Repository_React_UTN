 import '../styles/home.css';

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <div id="carouselExampleIndicators" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                            className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="images/home_img1.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="images/home_img2.jpeg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="images/home_img3.jpg" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Anterior</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Siguiente</span>
                    </button>
                </div>
            </div>
            <br />
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi iste voluptatem magnam sit sed
                        unde perspiciatis incidunt molestiae! Distinctio atque placeat doloribus officia suscipit? Rerum
                        nemo assumenda unde voluptates officia!
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum quis quod optio hic? Iure nulla
                        eius, veritatis iste repellat possimus quas facilis dolor. Maxime veniam laboriosam beatae
                        blanditiis vero recusandae!
                    </p>
                </div>
                <div className="cuadro">

                    <div className="atencion">
                        <span className="cita">Por cualquier consulta puede comunicarse con nosotros <a
                            href="contacto">aqui</a>.</span>
                        <span className="autor">Juan Perez - antiguedades.com</span>
                    </div>
                </div>
            </div>
            <br />
            <h4>Podes visitarnos y ver nuestros articulos, sin compromiso.</h4>
            <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe width="820" height="284" id="gmap_canvas"
                    src="https://maps.google.com/maps?q=agronomia%2C+buenos+aires&t=&z=15&ie=UTF8&iwloc=&output=embed"
                   ></iframe>                 
                </div>
            </div>

        </main>
    );
}

export default HomePage;