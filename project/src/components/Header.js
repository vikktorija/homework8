import Link from "./Links";

function Header(props) {
    const linksElements = props.links.map((link) => {
    return <Link name={link} />
  })

    return (
      <header>
        <nav className='nav-decoration'>
          {linksElements}
        </nav>
      </header>
    )
  }
  
  export default Header;