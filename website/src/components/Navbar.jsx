import './Navbar.css';
function Navbar(){
    return(
        <div className="navbar">
            <div className="nav-item-div"><span className="nav-item">Tutorial</span></div>
            <div className="nav-item-div"><span className="nav-item">Exercises</span></div>
            <div className="nav-item-div"><span className="nav-item">Certification</span></div>
            <div className="nav-item-div"><span className="nav-item">Services</span></div>
        </div>
    );
}
export default Navbar;