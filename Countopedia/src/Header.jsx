import logo from './Images/react.png'
function Header() {
    return(
        <div className='pt-3 pl-2'>
            <img src={logo} alt="" style={{height: "35px", verticalAlign: "top"}}/>
            <span className="h2 pt-4 text-white-50">React - CountOpedia</span>
        </div>
    )
}
export default Header;