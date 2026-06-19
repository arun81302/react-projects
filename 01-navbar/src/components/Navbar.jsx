



function Navbar() {
  return (
    <nav>
      <ul className="bg-amber-300 flex justify-around py-2">
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Widgets</a></li>
        <li className="relative group"><a href="#">Apps</a>
        <ul className="absolute hidden group-hover:block hover:bg-amber-700 px-3">
          <li className="hover:bg-amber-950 hover:text-white"><a href="#">Calender</a></li>
          <li className="hover:bg-amber-950 hover:text-white" ><a  href="#">Notes</a></li>
          <li className="hover:bg-amber-950 hover:text-white" ><a href="#">Tasks</a></li>
        </ul>
        </li>
      </ul>
      
    </nav>
  )
}


export default Navbar