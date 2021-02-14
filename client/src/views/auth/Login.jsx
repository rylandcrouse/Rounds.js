import { observer } from 'mobx-react-lite';
import React, {useContext, useEffect} from 'react';
import Auth from '../../utils/api/auth';
import useInput from '../../utils/hooks/useInput';
import { Container, Formy } from "./styled";
import {context} from './../../index';
import {Redirect} from 'react-router-dom';


const Login = observer(() => {
    const store = useContext(context);

    const [form, setForm] = useInput({
        email: '',
        password: ''
    })

    const handleEnter = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            store.auth.login(form);
        }
    }

    // if success, go to 2FA step
    if (store.auth.matchEmail) return <Redirect to='/match' />

    return (
        <Container>
            <Formy onKeyPress={e => handleEnter(e)}>
            <Formy.Group controlId="formBasicEmail">
                    <Formy.Label>Email address</Formy.Label>
                    <Formy.Control name='email' value={form.email} onChange={e => setForm(e)} type="email" placeholder="Enter email" />
                    <Formy.Text className="text-muted">

                    </Formy.Text>
                </Formy.Group>

                <Formy.Group controlId="formBasicPassword">
                    <Formy.Label>Password</Formy.Label>
                    <Formy.Control name='password' value={form.password} onChange={e => setForm(e)} type="password" placeholder="Password" />
                </Formy.Group>
            </Formy>
        </Container>
    )
})

export default Login
