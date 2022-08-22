import Header from '../../../components/Layout/components/Header';
import Slider from './SlideBar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header></Header>
            <div className="container">
                <Slider></Slider>
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
