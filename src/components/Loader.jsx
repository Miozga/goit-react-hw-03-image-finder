import { ThreeDots } from 'react-loader-spinner';
import '../styles.css';

const Loading = () => (
  <div className="Loader">
    <ThreeDots color="#3f51b5" height={80} width={80} />
  </div>
);

export default Loading;
