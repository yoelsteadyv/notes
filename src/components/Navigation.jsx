import { Link } from "react-router-dom";
import { VscArchive } from "react-icons/vsc";
import { CgNotes } from "react-icons/cg";

function Navigation() {
  return (
    <>
      <div className="flex bg-black text-white justify-between w-full h-12 ">
        <div className="flex items-center ml-6">
          <CgNotes className="mr-2" />
          <Link to="/">MemoInk</Link>
        </div>
        <div className="flex mr-6 items-center">
          <VscArchive className="mr-2" />
          <Link to="/archive">Archive</Link>
        </div>
      </div>
    </>
  );
}

export default Navigation;
