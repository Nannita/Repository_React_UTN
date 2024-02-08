import React from 'react';

const NovedadItem = (props) => {
    const { title, subtitle, imagen, body } = props;
    console.log(props);
    return(
        <div className="novedades">
            <h2>{title}</h2>
            <hr />
            <h4>{subtitle}</h4>
            <img src={imagen} />
            <div dangerouslySetInnerHTML={{ __html: body }} />
              
        </div>
    );    
}

export default NovedadItem; 