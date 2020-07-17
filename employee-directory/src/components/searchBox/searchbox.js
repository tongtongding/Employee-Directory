import React from "react";


const Search = (props)=>{
  
       return (
               <form>
               
                   <div className="form-group">
                   <input onChange={(event)=>{props.setFriendsName(event.target.value)}} type="text" class="form-control" placeholder="Search"/>
                   </div>
               </form>     
       )
};

export default Search;
