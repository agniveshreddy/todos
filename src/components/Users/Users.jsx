import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import UserItem from './UserItem.jsx';
import TodoModal from 'components/TodoModal';
import {addUser, deleteUser} from 'actions/userActions';
import './users.scss';


class Users extends PureComponent {

    constructor(props) {
        super(props);
        this.state={
            showModal: false,
            modalName: '',
        }
    }

    setShowModal(showModal, modalName){
        this.setState({showModal, modalName});
    }

    onSave(actionName, userName){
        const {dispatch} = this.props
        if(actionName === 'add')
            dispatch(addUser(userName, 2000));
        this.setState({showModal: false});
    }

    onAction(e){
        console.log('action name: '+ e.target.name);
        console.log('action name: '+ e.target.key);
    }
    
    render(){
        const {users} = this.props
        const {showModal, modalName} = this.state;
        return (
            <div className='users'>
                <Container>
                    <Row>
                        <Button 
                            variant='primary'
                            onClick={this.setShowModal.bind(this,true, 'add')}>
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
                                {users.map((user,i) =>{
                                    return <UserItem 
                                        key={'user'+i}
                                        name={user}
                                        onAction={this.onAction.bind(this)}/>
                                })}
                            </tbody>
                        </Table>
                    </Row>
                </Container>
                <TodoModal 
                    show={showModal}
                    modalName={modalName}
                    heading='Create User'
                    onClose={this.setShowModal.bind(this,false)}
                    onSave={this.onSave.bind(this)}
                />
            </div>  
        );
    }
}
const mapStateToProps = users => users;

export default connect(mapStateToProps)(Users);