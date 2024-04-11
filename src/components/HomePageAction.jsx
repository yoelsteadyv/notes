import { HiPencil } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

function HomePageAction() {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 right-0 mb-4 mr-4 bg-black w-12 h-12 rounded-full flex items-center justify-center z-30">
      <button
        className="action"
        type="button"
        title="Tambah"
        onClick={() => navigate("/notes/new")}
      >
        <HiPencil className="text-white text-2xl" />
      </button>
    </div>
  );
}

export default HomePageAction;
