
import Content_details from "../components/content-details";
import Navbar from "../components/navbar";
import MainBody from "../components/mainbody";
import { useParams } from 'react-router-dom';
export default function Details() {
    const { ingredient } = useParams();
    return (
        <div className="container-fluid p-0">
            <Navbar />
            <MainBody />
            <Content_details ingredient={ingredient} />
        </div>
    );
}