import React, { Component } from 'react'
import AppWrapper from '../AppWrapper/AppWrapper'
import './watch-page.css';
import { withRouter, useParams } from "react-router-dom";

const video = {

    title: 'Home - Day30 - Journey | 30 Days of Yoga With XMASS',
    channel: 'Future World Videos',
    details: '2K views - 11 hours ago'
}



const comments = [
    {

        auther: 'Navpreet',
        text: 'Some comment that was made',
    },
    {

        auther: 'Hrishikesh',
        text: 'Some comment that was made',
    },
    {

        auther: 'Hrithik',
        text: 'Some comment that was made',
    },
    {

        auther: 'Navpreet',
        text: 'Some comment that was made',
    },
    {
        auther: 'Hrishikesh',
        text: 'Some comment that was made',
    },
    {
        auther: 'Hrithik',
        text: 'Some comment that was made',
    }
]
class WatchPage extends Component {
    onVideoClick = () => {
        this.props.history.push('/watch')
    }


    render() {

        return (
            <AppWrapper hideSidebar={true}>

                <div className='watch_page'>
                    <div className='video_container'>
                        <div className='player'>

                        </div>
                        <div className='info'>
                            <div className='tags'>
                                #tag #tag
                            </div>
                            <h2>{this.props.match.params.id} </h2>

                        </div>
                        <div className='desciption'>
                            Test description Test description Test description
                            Test descriptionTest descriptionTest descriptionTest descriptionTest description
                            Test description Test description Test description Test description Test description
                        </div>

                        <div className='comments'>
                            {
                                comments.map(item =>
                                (<div className='comment'>
                                    <div>
                                        <p class="author">{item.auther}</p>
                                        <p className='text'>{item.text}</p>
                                    </div>

                                </div>)
                                )
                            }


                        </div>
                    </div>


                </div>
            </AppWrapper>
        )
    }

}

export default withRouter(WatchPage)