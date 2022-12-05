import ImageSlider from "./ImageSlider";
import "./Slides.css";
function Slides() {
    const slides = [
        {url: 'images/slide_1.jpg', title: '1'},
        {url: 'images/slide_2.jpg', title: '2'},
        {url: 'images/slide_3.jpg', title: '3'},
        {url: 'images/slide_4.jpg', title: '4'},
    ];
    const containerStyle = {
        width: "700px",
        height: "480px",
        margin: "0 auto"
    }
    return (
        <div style={containerStyle}>
            <ImageSlider slides={slides}/>
        </div>
    )
}

export default Slides;