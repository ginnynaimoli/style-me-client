import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { login } from '../redux/apiCalls'
import { mobile } from '../responsive'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("https://img.freepik.com/free-photo/cute-woman-with-red-lipstick-looks-into-camera-poses-with-white-big-bags-after-good-shopping_197531-17594.jpg?w=2000") center no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
`
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled{
    color: gray;
    cursor: not-allowed
  }
`
const Reg = styled(Link)`
  margin: 5px 0px;
  font-size: 12px;
  color: black;
  text-decoration: underline;
  cursor: pointer;
`
const Error = styled.span`
  color: red;
`

const Login = () => {
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')
  const dispatch = useDispatch()
  const { isFetching, error } = useSelector(state => state.user)
  
  const handleLogin = (e) => {
    e.preventDefault()
    login(dispatch, { username, password })
  } 

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input type="email" placeholder='Username' onChange={e => setUsername(e.target.value)}/>
          <Input type="password" placeholder='Password' onChange={e => setPassword(e.target.value)}/>
          
          <Button onClick={handleLogin} disabled={isFetching}>LOG IN</Button>
          {error && <Error>Oops! Something went wrong</Error>}
          <Reg>FORGOT PASSWORD?</Reg>
          <Reg to='/register'>CREATE A NEW ACCOUNT</Reg>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login