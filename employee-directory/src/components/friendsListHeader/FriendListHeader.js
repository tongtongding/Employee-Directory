import React from "react";

const FriendListHeader = (props) => {
    return(

   
    <thead>
        <tr>
            <th scope="col">Character</th>
            <th scope="col" onClick={props.sortByName}>Name</th>
            <th scope="col">Date Introduced</th>
            <th scope="col">Gender</th>
        </tr>
    </thead>
   
    )

}

export default FriendListHeader;