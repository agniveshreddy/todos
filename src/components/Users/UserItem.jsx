import React from 'react';
import Button from 'react-bootstrap/Button';

const UserItem = ({name, onAction}) =>{
    return(
        <tr>
            <td>{name}</td>
            <td>
                <Button variant="link">Edit</Button>
                <span>@</span>
                <Button variant="link">Delete</Button>
            </td>
        </tr>
    );
}

export default UserItem;