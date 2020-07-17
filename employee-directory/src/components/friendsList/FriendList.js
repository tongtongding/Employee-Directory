import React from "react";
import "./FriendList.css";


const FriendList = (props) => {
    return (
        <>
            <tr>
                <td>
                    <img
                        alt={props.name}
                        src={props.image}
                    />
                </td>
                <td>{props.name}</td>
                <td>{props.date}</td>
                <td>{props.gender}</td>
            </tr>
        </>
    );
};

export default FriendList;
