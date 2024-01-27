
import Content from "../components/content";
import MainBody from "../components/mainbody";
import Navbar from "../components/navbar";


export default function Home() {
    return (
        <div className="container-fluid p-0">
            <Navbar />
            <MainBody />
            <Content />
        </div>

    );
}