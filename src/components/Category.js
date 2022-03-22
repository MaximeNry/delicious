import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiNoodles, GiChopsticks } from 'react-icons/gi'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import React from 'react'

function Category() {
  return (
    <List>
      <NavLink to={'/cuisine/Italian'}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </NavLink>
      <NavLink to={'/cuisine/Americain'}>
        <FaHamburger />
        <h4>Americain</h4>
      </NavLink>
      <NavLink to={'/cuisine/Thai'}>
        <GiNoodles />
        <h4>Thai</h4>
      </NavLink>
      <NavLink to={'/cuisine/Japanese'}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </NavLink>
    </List>
  )
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 0rem 2rem;
`

export default Category