import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";

function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <MenuIcon />
        <img
          className='header__logo'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRTP5biS4Ni9KSicXxzO081B6Y1voCXjBQNiw&usqp=CAU'
          alt=''
        />
      </div>

      <div className='header__input'>
        <input placeholder='Search' type='text' />
        <SearchIcon className='header__inputButton' onClick={handleSearch()} />
      </div>

      <div className='header__icons'>
        <VideoCallIcon className='header__icon' />
        <AppsIcon className='header__icon' />
        <NotificationsIcon className='header__icon' />
        <Avatar />
      </div>
    </div>
  );
}

function handleSearch() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = e => {
    e.preventDefault();
    props.onSubmit(searchTerm);
  };

  return (
    <div className='searchBar'>
      <form onSubmit={handleSearch}>
        <input
          type='text'
          id='input'
          onChange={e => setSearchTerm(e.target.value)}
        />
        <Button type='submit' onSubmit={props.onSubmit} />
      </form>
    </div>
  );
}

export default handleSearch;

export default Header;
