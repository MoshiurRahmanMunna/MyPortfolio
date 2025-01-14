

const Nav = () => {
  return (
    <nav className="flex justify-between items-center p-4">
        <header>
            <h1 className="flex text-center ml-3">My Portfolio</h1>
        </header>
         <div className="flex text-center gap-8 mr-20 mt-5">
          <a href="#">Home</a>
          <a href="#">Skills</a>
          <a href="#">Projects</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
         </div>
    </nav>
  )
}

export default Nav