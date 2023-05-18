import { PropTypes} from 'prop-types';
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs( category );

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && ( <h2>Cargando...</h2>)
            }

            <div className="card-grid">
                {
                    images.map( (  image ) => (
                        <GifItem 
                            key={ image.id }
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    );
};

//Es necesario especificar los proptypes en cada componente para evitar errores de código y mejorar la solución de los mismos

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}