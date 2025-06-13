// components/SideNav.tsx
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

type SideNavProps = {
  isNavOpen: boolean;
  setIsNavOpen: (open: boolean) => void;
};

const SideNav = ({ isNavOpen, setIsNavOpen }: SideNavProps) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-[#333] shadow-md z-50 transform transition-transform duration-300 ease-in-out ${isNavOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
    >
      <div className="flex justify-between items-center p-4 ">
        {/* border-b border-orange-700 */}
        <h3 className="text-white font-semibold text-lg">Fire & White</h3>
        <button onClick={() => setIsNavOpen(false)}>
          <AiOutlineClose size={24} color="#EADDDD" />
        </button>
      </div>

      <nav className="p-4 flex flex-col space-y-4 text-xl">

       <Link className="text-white" to="/episodes" onClick={() => setIsNavOpen(false)}>Episodes</Link>
        <div className="text-gray-500">Blog(Coming Soon)</div>
        {/* <Link className="text-gray-900" to="/blog" onClick={() => setIsNavOpen(false)}>Blog(Coming Soon)</Link> */}
        <div className="text-gray-500">About(Coming Soon)</div>
        {/* <Link to="/login" onClick={() => setIsNavOpen(false)}>Login</Link>
        <Link to="/signup" onClick={() => setIsNavOpen(false)}>Sign Up</Link> */}
      </nav>
    </div>
  );
};

export default SideNav;
