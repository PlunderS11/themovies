import { useParams } from 'react-router-dom';
import DetailComponent from '../components/detail/DetailComponent';

function Detail() {
    const { category, id } = useParams();

    return <DetailComponent category={category} id={id} />;
}

export default Detail;
