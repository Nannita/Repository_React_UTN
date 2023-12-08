import '../styles/galeria.css';

const GaleriaPage = (props) => {
    return (
        <main className="holder">
            <h2>Algunos de nuestros articulos destacados</h2>
            <section>
            <img src="images/gallery_img01.png" alt="img 1" />
            <img src="images/gallery_img02.png" alt="img 2" />
            <img src="images/gallery_img03.png" alt="img 3" />
            <img src="images/gallery_img04.jpg" alt="img 4" />
            <img src="images/gallery_img05.png" alt="img 5" /> 
            <img src="images/gallery_img06.jpg" alt="img 6" />
            <img src="images/gallery_img07.jpg" alt="img 7" />
            </section>
        </main>
    );
}

export default GaleriaPage;