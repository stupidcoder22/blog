import Header from "../../Components/Header/Header";
import { Posts } from "../../Components/posts/Posts";
import Sidebar from "../../Components/Sidebar/Sidebar";
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
