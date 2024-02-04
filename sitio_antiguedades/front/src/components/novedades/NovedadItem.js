import React from 'react';

const NovedadItem = (props) => {
    const { title, subtitle, imagen, body } = props;
    console.log(props);
    return(
        <div className="novedades">
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
            <img src={imagen} />
            <div dangerouslySetInnerHTML={{ __html: body }} />
            <hr />  
        </div>
    );    
}

export default NovedadItem; 