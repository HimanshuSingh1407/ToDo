import axios from "axios";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { baseURL } from "../utils/constant";

const ToDo = ({text, id, setUpdateUI, setShowPopup, setPopupContent}) => {

  const deleteToDo = () => {
    axios
      .delete(`${baseURL}/delete/${id}`)
      .then((res) => {
        console.log(res.data);
        setUpdateUI((prevState) => !prevState);
      })
      .catch((err) => console.error(err));
  };

  const updateToDo = () => {
    setPopupContent({text, id})
    setShowPopup(true);
  }

  return (
    <div className="toDo">
      {text}
      <div className="icons">
        <FaEdit className="icon" onClick={updateToDo}/>
        <MdDelete className="icon" onClick={deleteToDo} />
      </div>
    </div>
  );
};

export default ToDo;
