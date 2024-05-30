import Link from "next/link"

function Navbar() {
  return (
    <header className="text-gray-600 body-font  md: px-12 py-2 w-full  z-50  ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row  bg-stone-50  items-center fixed top-1">
        <Link href={"/"} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24" data-darkreader-inline-stroke="" style={{}}>
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Tailblocks</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">

          <Link href={"/"} className="mr-5 hover:text-gray-900">Homepage</Link>
          <Link href={"/products"} className="mr-5 hover:text-gray-900">Products</Link>
        </nav>
       <div  className="flex items-center space-x-3 text-sm">
        <Link href={"/shop-cart"}>
        <button className=" button  inline-flex items-center bg-blue-600  text-white   hover:bg-transparent  hover:border-blue-600 rounded text-base mt-4 md:mt-0">Shop Card
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24" data-darkreader-inline-stroke="" style={{}}>
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
        </Link>
    
        <button className="  button inline-flex items-center  bg-blue-600  text-white  border-transparent ml-2  focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Signin
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24" data-darkreader-inline-stroke="" style={{}}>
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
       </div>
      </div>
    </header>
  )
}

export default Navbar