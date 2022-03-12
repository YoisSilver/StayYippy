import React from 'react'
import { Fragment } from 'react'
import Image from 'next/image'
import img1 from '../assets/venice.jpg'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Cards() {

    const title = "test text";
    const location = "yoooooooooooo, no tell motel, hmmm land";
    const description = `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
    
    `;
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <Fragment>
            <div className='my-own-custom-container'>
                <Carousel responsive={responsive}
                    showDots={false}
                    swipeable={true}
                    draggable={false}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    transitionDuration={30000}
                // arrows={false} renderButtonGroupOutside={true}
                >
                    <div className="big-card">
                        <Image src={img1} alt='img1' className='image'></Image>
                        <h2 className="title">{title}</h2>
                        <p className="location">{location}</p>
                        <p className="description">{description}</p>
                    </div>
                    <div className="big-card">
                        <Image src={img1} alt='img1' className='image'></Image>
                        <h2 className="title">{title}</h2>
                        <p className="location">{location}</p>
                        <p className="description">{description}</p>
                    </div>
                    <div className="big-card">
                        <Image src={img1} alt='img1' className='image'></Image>
                        <h2 className="title">{title}</h2>
                        <p className="location">{location}</p>
                        <p className="description">{description}</p>
                    </div>
                    <div className="big-card">
                        <Image src={img1} alt='img1' className='image'></Image>
                        <h2 className="title">{title}</h2>
                        <p className="location">{location}</p>
                        <p className="description">{description}</p>
                    </div>
                    <div className="big-card">
                        <Image src={img1} alt='img1' className='image'></Image>
                        <h2 className="title">{title}</h2>
                        <p className="location">{location}</p>
                        <p className="description">{description}</p>
                    </div>
                    <div className="big-card">
                        <Image src={img1} alt='img1' className='image'></Image>
                        <h2 className="title">{title}</h2>
                        <p className="location">{location}</p>
                        <p className="description">{description}</p>
                    </div>
                    <div className="big-card">
                        <Image src={img1} alt='img1' className='image'></Image>
                        <h2 className="title">{title}</h2>
                        <p className="location">{location}</p>
                        <p className="description">{description}</p>
                    </div>
                    <div className="big-card">
                        <Image src={img1} alt='img1' className='image'></Image>
                        <h2 className="title">{title}</h2>
                        <p className="location">{location}</p>
                        <p className="description">{description}</p>
                    </div>
                </Carousel>
            </div>
            <div className="small-card"></div>
        </Fragment>
    )
}
