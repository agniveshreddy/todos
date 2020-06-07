import React, { PureComponent } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import UserItem from './UserItem.jsx';
import TodoModal from 'components/TodoModal';
import './users.scss';

class Users extends PureComponent {

    constructor(props) {
        super(props);

        this.state={
            showModal: false
        }
    }

    setShowModal(showModal){
        this.setState({showModal});
    }
    
    render(){
        const {users} = this.props
        const {showModal} = this.state;
        return (
            <div className='users'>
                <Container>
                    <Row>
                        <Button 
                            variant='primary'
                            onClick={this.setShowModal.bind(this,true)}>
                            Create User
                        </Button>
                    </Row>
                    <Row>
                        <Table hover>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(user =>{
                                    return <UserItem 
                                        name={user}
                                        onAction={()=>{}}/>
                                })}
                            </tbody>
                        </Table>
                    </Row>
                </Container>
                <TodoModal 
                    show={showModal}
                    heading='Create User'
                    onClose={this.setShowModal.bind(this,false)}
                />
            </div>  
        );
    }
}

export default Users;