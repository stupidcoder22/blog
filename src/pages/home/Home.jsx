import Header from "../../Header/Header";
import { Post } from "../../Post/Post";
import Sidebar from "../../Sidebar/Sidebar";
import "./home.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Post />
        <Sidebar />
      </div>
    </>
  );
}
