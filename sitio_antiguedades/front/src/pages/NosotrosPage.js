import '../styles/nosotros.css';

const NosotrosPage = (props) => {
    return (
        <main className="holder">
            <div className="historia">
                <h2>Historia</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, modi. Temporibus, officia tempore dolores
                    ipsum architecto quas similique, harum, possimus minus ratione ad ab laborum officiis qui accusantium
                    aut aspernatur.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur odio suscipit aspernatur rerum
                    distinctio dolorum ipsa placeat maxime, mollitia similique qui eaque sapiente atque beatae aut molestiae
                    dolor earum incidunt?</p>
            </div>
            <div className="staff">
                <h2>Staff</h2>
                <div className="personas">
                    <div className="persona">
                        <img src="images/nosotros1.jpg" alt="Persona 1"/>
                            <h5>Juan Gomez</h5>
                            <h6>Gerente General</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore necessitatibus nisi, saepe
                                commodi quasi odit deleniti laborum fugit hic, praesentium laudantium adipisci, non quisquam
                                nulla iure molestias? Voluptas, magnam quaerat.</p>
                    </div>
                    <div className="persona">
                        <img src="images/nosotros2.jpg" alt="Persona 2"/>
                            <h5>Juan Gomez</h5>
                            <h6>Gerente General</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore necessitatibus nisi, saepe
                                commodi quasi odit deleniti laborum fugit hic, praesentium laudantium adipisci, non quisquam
                                nulla iure molestias? Voluptas, magnam quaerat.</p>
                    </div>
                    <div className="persona">
                        <img src="images/nosotros3.jpg" alt="Persona 3"/>
                            <h5>Juan Gomez</h5>
                            <h6>Gerente General</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore necessitatibus nisi, saepe
                                commodi quasi odit deleniti laborum fugit hic, praesentium laudantium adipisci, non quisquam
                                nulla iure molestias? Voluptas, magnam quaerat.</p>
                    </div>
                    <div className="persona">
                        <img src="images/nosotros4.jpg" alt="Persona 4"/>
                            <h5>Juan Gomez</h5>
                            <h6>Gerente General</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore necessitatibus nisi, saepe
                                commodi quasi odit deleniti laborum fugit hic, praesentium laudantium adipisci, non quisquam
                                nulla iure molestias? Voluptas, magnam quaerat.</p>
                    </div>
                    
                </div>
            </div>
        </main>
    );
}

export default NosotrosPage;