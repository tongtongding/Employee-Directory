import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Search from "./components/search/Search"
import friends from "./friends.json";
import FriendList from "./components/friendsList/FriendList"
import FriendListHeader from "./components/friendsListHeader/FriendListHeader"


class App extends Component {

  state = {
    friends,
    sort:"descend"
  };

  filterByName = (searchFriends) => {
  
    let filtered = friends.filter((friend) => {
      return friend.name.toLowerCase().includes(searchFriends.toLowerCase())
    })
    this.setState({friends:filtered})
  };

  sortByName = () => {
    if (this.state.sort === "descend"){
      let friendsAscend = this.state.friends.sort((a,b)=>
      a.name > b.name ? 1 : -1
      )
      this.setState({friends:friendsAscend,sort:"ascend"})
    }else{
      let friendsDescend = this.state.friends.sort((a,b)=>
      a.name < b.name ? 1 : -1
      )
      this.setState({friends:friendsDescend,sort:"descend"})
    }
  };


  render() {
    return (
      <>
        <Header />
        <Search filterByName = {this.filterByName} />
        <table className="table table-striped">
        <FriendListHeader sortByName={this.sortByName}/>
          <tbody>
            {this.state.friends.map(friend => {
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
