import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';

const UserItem = ({name, onAction}) =>{
    
    return(
        <tr>
            <td>{name}</td>
            <td>
                <Button variant="link" name='edit' onClick={onAction}>Edit</Button>
                <span>@</span>
                <Button variant="link" name='delete' onClick={onAction}>Delete</Button>
            </td>
        </tr>
    );
}

export default UserItem;