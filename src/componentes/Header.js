import React from 'react'
import {Navbar,Icon,NavItem} from 'react-materialize'
function Header() {
    
    return(
        <Navbar
  alignLinks="right"
  brand={<a className="brand-logo" href="#">Logo</a>}
  id="mobile-nav"
  menuIcon={<Icon>menu</Icon>}
  options={{
    draggable: true,
    edge: 'left',
    inDuration: 250,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200,
    preventScrolling: true
  }}
>
  <NavItem >
    Getting started
  </NavItem>
  <NavItem >
    Components
  </NavItem>
</Navbar>
    )
}

export default Header;