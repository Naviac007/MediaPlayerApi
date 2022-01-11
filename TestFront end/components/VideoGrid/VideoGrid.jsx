import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./video-grid.css";
const data = [
    {
        thumbnail: 'https://source.unsplash.com/290x163/?new&zealand',

        title: 'Home - Day30 - Journey | 30 Days of Yoga With XMASS',
    },
    {
        thumbnail: 'https://source.unsplash.com/290x163/?new&zealand',

        title: 'Home - Day30 - Journey | 30 Days of Yoga With XMASS',

    },
    {
        thumbnail: 'https://source.unsplash.com/290x163/?new&zealand',

        title: 'Home - Day30 - Journey | 30 Days of Yoga With XMASS',

    },
    {
        thumbnail: 'https://source.unsplash.com/290x163/?new&zealand',

        title: 'Home - Day30 - Journey | 30 Days of Yoga With XMASS',

    },
    {
        thumbnail: 'https://source.unsplash.com/290x163/?new&zealand',

        title: 'Home - Day30 - Journey | 30 Days of Yoga With XMASS',

    }
    ,
    {
        thumbnail: 'https://source.unsplash.com/290x163/?new&zealand',

        title: 'Home - Day30 - Journey | 30 Days of Yoga With XMASS',

    },
    {
        thumbnail: 'https://source.unsplash.com/290x163/?new&zealand',

        title: 'Home - Day30 - Journey | 30 Days of Yoga With XMASS',

    },
    {
        thumbnail: 'https://source.unsplash.com/290x163/?new&zealand',

        title: 'Home - Day30 - Journey | 30 Days of Yoga With XMASS',

    },
    {
        thumbnail: 'https://source.unsplash.com/290x163/?new&zealand',

        title: 'Home - Day30 - Journey | 30 Days of Yoga With XMASS',

    },
    {
        thumbnail: 'https://source.unsplash.com/290x163/?new&zealand',

        title: 'Home - Day30 - Journey | 30 Days of Yoga With XMASS',

    }
    ,
    {
        thumbnail: 'https://source.unsplash.com/290x163/?new&zealand',

        title: 'Home - Day30 - Journey | 30 Days of Yoga With XMASS',

    },
    {
        thumbnail: 'https://source.unsplash.com/290x163/?new&zealand',

        title: 'Home - Day30 - Journey | 30 Days of Yoga With XMASS',

    },
    {
        thumbnail: 'https://source.unsplash.com/290x163/?new&zealand',

        title: 'Home - Day30 - Journey | 30 Days of Yoga With XMASS',

    },
    {
        thumbnail: 'https://source.unsplash.com/290x163/?new&zealand',

        title: 'Home - Day30 - Journey | 30 Days of Yoga With XMASS',

    },
    {
        thumbnail: 'https://source.unsplash.com/290x163/?new&zealand',

        title: 'Home - Day30 - Journey | 30 Days of Yoga With XMASS',

    }
    ,
    {
        thumbnail: 'https://source.unsplash.com/290x163/?new&zealand',

        title: 'Home - Day30 - Journey | 30 Days of Yoga With XMASS',

    },
    {
        thumbnail: 'https://source.unsplash.com/290x163/?new&zealand',

        title: 'Home - Day30 - Journey | 30 Days of Yoga With XMASS',

    },
    {
        thumbnail: 'https://source.unsplash.com/290x163/?new&zealand',

        title: 'Home - Day30 - Journey | 30 Days of Yoga With XMASS',

    },
    {
        thumbnail: 'https://source.unsplash.com/290x163/?new&zealand',

        title: 'Home - Day30 - Journey | 30 Days of Yoga With XMASS',

    },
    {
        thumbnail: 'https://source.unsplash.com/290x163/?new&zealand',

        title: 'Home - Day30 - Journey | 30 Days of Yoga With XMASS',

    }
    ,
    {
        thumbnail: 'https://source.unsplash.com/290x163/?new&zealand',

        title: 'Home - Day30 - Journey | 30 Days of Yoga With XMASS',

    },
    {
        thumbnail: 'https://source.unsplash.com/290x163/?new&zealand',

        title: 'Home - Day30 - Journey | 30 Days of Yoga With XMASS',

    },
    {
        thumbnail: 'https://source.unsplash.com/290x163/?new&zealand',

        title: 'Home - Day30 - Journey | 30 Days of Yoga With XMASS',

    },
    {
        thumbnail: 'https://source.unsplash.com/290x163/?new&zealand',

        title: 'Home - Day30 - Journey | 30 Days of Yoga With XMASS',

    },
    {
        thumbnail: 'https://source.unsplash.com/290x163/?new&zealand',

        title: 'Home - Day30 - Journey | 30 Days of Yoga With XMASS',

    }
]
export default class VideoGrid extends Component {

    componentDidMount = () => {
        console.log('test')
    }

    renderVideo = (video) => {
        const { isSmall } = this.props;

        return (
            <Link className="text-link" to={"/watch/" + video.title}>
                <div class="video" >

                    <img class="thumbnail" src={video.thumbnail} alt="" />
                    {!isSmall && <>

                        <p class="title">{video.title}</p>

                    </>}
                    {!!isSmall && <div>
                        <p class="title">{video.title}</p>

                    </div>}


                </div>
            </Link>)
    }
    render() {
        const { headerTitle, isSmall } = this.props;


        return (
            <section class={`videos ${isSmall ? 'small-mode' : ''}`}>
                {headerTitle && <h2>{headerTitle}</h2>}
                {data.map(this.renderVideo)}
            </section>
        );
    }
}
