import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid d-flex justify-content-center">
            <h1 className="display-1" >{props.title}</h1>
            
        </div>
    </nav>
  )
};

Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string
};

Navbar.defaultProps = {
    title: 'Set Title Here',
    aboutText: 'About Text Here'
}


