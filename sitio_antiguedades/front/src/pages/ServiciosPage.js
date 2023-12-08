import '../styles/servicios.css';

const ServiciosPage = (props) => {
    return (
        <main className="holder">
            <h2>Servicios</h2>
            <div className="servicio">
                <img src="images/Envios.jpg" alt="Envios" />
                <div className="info">
                    <h4>Envios a domicilio</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi consequuntur aspernatur molestias
                        ratione magnam neque aliquam adipisci magni earum quidem nulla praesentium quae inventore, excepturi
                        tempora repellat vel fuga? Est!</p>
                </div>
            </div>
            <div className="servicio">
                <img src="images/Retirar.jpg" alt="Retirar" />
                <div className="info">
                    <h4>Retirar en nuestra tienda</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi consequuntur aspernatur molestias
                        ratione magnam neque aliquam adipisci magni earum quidem nulla praesentium quae inventore, excepturi
                        tempora repellat vel fuga? Est!</p>
                </div>
            </div>
        </main>
    );
}

export default ServiciosPage;