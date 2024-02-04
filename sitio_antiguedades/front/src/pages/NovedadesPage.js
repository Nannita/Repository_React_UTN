import '../styles/novedades.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from '../components/novedades/NovedadItem';


const NovedadesPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);

            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };

        cargarNovedades();
    }, []);


    return (
        <section className="holder">
            <h2>Catalogo: </h2>
            <hr />
            <p>
            <div className="novedades">
                
                <div className="info">
                    <p> {loading ? (
                        <p>Cargando...</p>
                    ) : (
                        novedades.map(item => <NovedadItem key={item.id}
                            title={item.titulo} subtitle={item.subtitulo}
                            imagen={item.imagen} body={item.cuerpo} />)
                    )}</p>
                </div>
            </div>
            </p>
            {/* <h2>Catalogo</h2>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                novedades.map(item => <NovedadItem key={item.id}
                    title={item.titulo} subtitle={item.subtitulo}
                    imagen={item.imagen} body={item.cuerpo} />)
            )} */}

        </section>
    );
}

export default NovedadesPage;