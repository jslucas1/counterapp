//Stateless Functional Component since we don't need to handle state, do complex process with multiple methods etc.

const NavBar = ({totalCounters}) => {
    return (
        <nav className = "navbar navbar-light bg-light">
            <a className = "navbar=brand" href="#">
                Navbar{" "}
                <span className="badge badge-pill badge-secondary">
                    {totalCounters}
                </span>
            </a>
        </nav>);
};


export default NavBar;