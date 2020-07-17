import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Search from "./components/searchBox/searchbox"
import friends from "./friends.json";
import FriendList from "./components/friendsList/FriendList"
import FriendListHeader from "./components/friendsListHeader/FriendListHeader"
class App extends Component{

  state = {
    friends,
    searchFriends:""
  };

filterByName = ()=>{
  const { friends, searchFriends}=this.state
  if (searchFriends === ""){
    return [...friends];
  }
  return friends.filter((friend)=>{
    return friend.name.toLowerCase().includes(searchFriends.toLowerCase())
  })
}
  render(){
    return (
      <>
        <Header />
        <Search setFriendsName={(friendName)=>{this.setState({searchFriends:friendName})}}/>
        <FriendListHeader />
        <table className="table table-striped">
        <tbody>
        {this.filterByName().map(friend => {
          return <FriendList
            key={friend.id}
            name={friend.name}
            image={friend.image}
            date={friend.dateIntroduced}
            gender={friend.gender}
          />
        })}

        </tbody>
        </table>
       
      </>
    );
  }
  
}

export default App;
