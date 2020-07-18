import React from "react";


const Search = (props)=>{
  
       return (
               <form>
               
                   <div className="form-group">
                   <input onChange={(event)=>{props.filterByName(event.target.value)}} type="text" className="form-control" placeholder="Search"/>
                   </div>
               </form>     
       )
};

export default Search;
