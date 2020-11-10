import React from "react";
import SidebarRow from "./SidebarRow"
import "./Sidebar.css";
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import TimelineIcon from '@material-ui/icons/Timeline';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import VisibilityIcon from '@material-ui/icons/Visibility';



function Sidebar(){
    return(
        <div className="sidebar">
            <SidebarRow Icon={HomeIcon} title="Home"/>
            <SidebarRow Icon={WhatshotIcon} title="Trending"/>
            <SidebarRow Icon={SubscriptionsIcon} title="Subscription"/>
            <SidebarRow Icon={LocalLibraryIcon} title="Library"/>
            <SidebarRow Icon={TimelineIcon} title="History"/>
            <SidebarRow Icon={VideoLibraryIcon} title="Your Videos"/>
            <SidebarRow Icon={WatchLaterIcon} title="Watch Later"/>
            <SidebarRow Icon={ThumbUpAltIcon} title="Liked Videos"/>
            <SidebarRow Icon={VisibilityIcon} title="Show More"/>
            
            


        </div>


    );
}
export default Sidebar;