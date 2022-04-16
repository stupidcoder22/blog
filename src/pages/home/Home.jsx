import Header from "../../Header/Header";
import { Posts } from "../../posts/Posts";
import Sidebar from "../../Sidebar/Sidebar";
import "./home.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}
