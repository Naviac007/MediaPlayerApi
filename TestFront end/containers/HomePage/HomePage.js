import React, { Component } from 'react'
import AppWrapper from '../AppWrapper/AppWrapper'
import VideoGrid from '../../components/VideoGrid/VideoGrid'
import { useNavigate  } from "react-router-dom";
import Header from '../../components/Header/Header'
import SmallSidebar from '../../components/SmallSidebar/SmallSidebar'
import MainSidebar from '../../components/MainSidebar/MainSidebar'
class HomePage extends Component {

    onVideoClick = () => {
        this.props.history.push('/watch')
    }
    render() {
        return (
            <>
            <Header   />
            <div>
            <SmallSidebar />
             <VideoGrid onVideoClick={this.onVideoClick} headerTitle='Recommended' />
             </div>
             </>
        )
    }

}

export default HomePage