import "./single.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Singlepost } from "../../Components/singlePost/Singlepost";

export const Single = () => {
  return (
    <div className="single">
      <Singlepost />
      <Sidebar />
    </div>
  );
};
