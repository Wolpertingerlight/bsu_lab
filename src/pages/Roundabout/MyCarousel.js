import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Roundabout.css';
const dataDigitalBestSeller = [
    {
        id: 1,
        title: 'Mario Kart™ 8 Deluxe',
        price: '$59.99',
        category: 'Nintendo Switch',
        linkImg:
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/m/mario-kart-8-deluxe-switch/hero?_a=AJADJWI0',
    },
    {
        id: 2,
        title: 'TRIANGLE STRATEGY™',
        price: '$59.99',
        category: 'Nintendo Switch',
        linkImg:
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/t/triangle-strategy-switch/hero?_a=AJADJWI0',
    },
    {
        id: 3,
        title: 'Pokémon™ Legends: Arceus',
        price: '$59.99',
        category: 'Nintendo Switch',
        linkImg:
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/p/pokemon-legends-arceus-switch/hero?_a=AJADJWI0',
    },
    {
        id: 4,
        title: 'Super Mario™ 3D World + Bowser’s Fury',
        price: '$59.99',
        category: 'Nintendo Switch',
        linkImg:
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/s/super-mario-3d-world-plus-bowsers-fury-switch/hero?_a=AJADJWI0',
    },
    {
        id: 5,
        title: 'Cuphead',
        price: '$19.99',
        category: 'Nintendo Switch',
        linkImg:
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/c/cuphead-switch/hero?_a=AJADJWI0',
    },
    {
        id: 6,
        title: 'Minecraft',
        price: '$29.99',
        category: 'Nintendo Switch',
        linkImg:
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/m/minecraft-switch/hero?_a=AJADJWI0',
    },
    {
        id: 7,
        title: 'Mario + Rabbids® Kingdom Battle',
        price: '$59.99',
        category: 'Nintendo Switch',
        linkImg:
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/m/mario-plus-rabbids-kingdom-battle-switch/hero?_a=AJADJWI0',
    },
    {
        id: 8,
        title: 'Unravel Two',
        price: '$59.99',
        category: 'Nintendo Switch',
        sale: 63, //percent
        linkImg:
            'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/u/unravel-two-switch/hero?_a=AJADJWI0',
    },
];
function MyCarousel() {
    const [defaultImage, setDefaultImage] = useState({});
    const settings = {

        
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const buttons = {
        marginLeft: "45%",
        marginTop: "2%",
    }
    const handleErrorImage = (data) => {
        setDefaultImage((prev) => ({
            ...prev,
            [data.target.alt]: data.target.alt,
            linkDefault: 'images/defaultImage.jpg',
        }));
    };
    const start = () => {
        settings.autoplay = true;

    }
    const stop = () => {
        settings.autoplay = false;
    }
    return (
        <div>
            <Slider {...settings}>
                {dataDigitalBestSeller.map((item) => (
                    <div className="card">
                        <div className="card-top">
                            <img
                                src={
                                    defaultImage[item.title] === item.title
                                        ? defaultImage.linkDefault
                                        : item.linkImg
                                }
                                alt={item.title}
                                onError={handleErrorImage}
                            />
                            <h1>{item.title}</h1>
                        </div>
                        <div className="card-bottom">
                            <h3>{item.price}</h3>
                            <span className="category">{item.category}</span>
                        </div>
                    </div>
                ))}
            </Slider>
            <div style={buttons}>
                <button onClick={start}>Старт</button>
                <button onClick={stop}>Стоп</button>
            </div>
        </div>
    );
}

export default MyCarousel;