import { Button, Navbar, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";


export default function Header() {
    return (
        <Navbar className="border-b-2">
            <Link to="/" className="font-semibold text-sm sm:text-xl dark:text-white whitespace-nowrap self-center">
                <span className="bg-gradient-to-r from-indigo-900 via-purple-950 to-red-900 px-2 py-1 rounded-lg text-red">Saharan&apos;s Blog</span>

            </Link>


            <form>
                <TextInput
                    type="text"
                    placeholder="Search..."
                    rightIcon={AiOutlineSearch}
                    className="lg:inline hidden" />
            </form>

            <Button className="lg:hidden w-12 h-10" color="grey" pill>
                <AiOutlineSearch />
            </Button>
            <Navbar.Collapse>
                <div className="flex">
                    {/* This is the div that contains the buttons for Sign In and Dark Mode. */}
                    <Button className="sm:inline hidden w-12 h-10" color="grey" pill>
                        <FaMoon />
                    </Button>
                    <Link to="/signin" >
                        <Button gradientDuoTone="purpleToRed">Sign In</Button>
                    </Link>
                    <Navbar.Link >
                        <Link to="/" > Home </Link>
                        <Link to="/about" > About </Link>
                        <Link to={"/projects"} > Projects </Link>
                    </Navbar.Link>
                </div>
            </Navbar.Collapse>


        </Navbar>
    )
}
