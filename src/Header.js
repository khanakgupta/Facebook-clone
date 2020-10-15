import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import {Avatar} from '@material-ui/core';
//import AppsIcon from '@material-ui/icons/Apps';
import AddIcon from '@material-ui/icons/Add';
import { IconButton} from '@material-ui/core';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ForumIcon from '@material-ui/icons/Forum';
import { useStateValue} from './StateProvider';




function Header(){
    const [{user}, dispatch] = useStateValue();

    return(
        <div className="header">

            {/*header left part  */}
           <div className="header_left">
               <img 
               src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
               alt=""
               />

               <div className="header_input">
                   <SearchIcon />
                   <input  type="text" placeholder="search Facebook"/>
                </div>
               
           </div>

           {/*header right*/}
           <div className="header_center">
               <div className="header_option header_option--active">
                   <HomeIcon fontSize="large" />
                </div>
                <div className="header_option">
                   <FlagIcon fontSize="large" />
                </div>
                <div className="header_option">
                   <SubscriptionsIcon fontSize="large" />
                </div>
                <div className="header_option">
                   <StorefrontIcon fontSize="large" />
                </div>
                <div className="header_option">
                   <SupervisedUserCircleIcon fontSize="large" />
                </div>


           </div>

            {/*header right */}
           <div className="header_right">
                <div className="header_info">
                   <Avatar  src={user.photoURL}/>
                    <h4>{user.displayName}</h4>

                </div>
                
                <IconButton>
                    <AddIcon />
                </IconButton >
                <IconButton>
                    <ForumIcon />
                </IconButton >
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton >
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton >

            </div>



        </div>

    );
}

export default Header;