import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import ListTodos from './components/ListTodos'
import FinishedTodos from './components/ListTodos/FinishedTodos'
import UnfinishedTodos from './components/ListTodos/UnfinishedTodos'
import { useAppDispatch } from './redux/app/hooks'
import { getTodos } from './redux/features/todo/todoSlices'

const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
`
const ContentRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 4em;

  padding: 1em 20%;
`
const App = () => {
  const dispatch = useAppDispatch()

    useEffect(()=> {
        dispatch(getTodos())
    },[])

  return (
    <AppStyled>
      <Header />
      <ContentRow>
        <FinishedTodos />
        <UnfinishedTodos />
      </ContentRow>
    </AppStyled>
  )
}

export default App
