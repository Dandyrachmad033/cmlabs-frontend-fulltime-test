
import Content_sub_details from "../components/content-sub-details";
import Navbar from "../components/navbar";
import MainBody from "../components/mainbody";
import { useParams } from 'react-router-dom';

export default function Sub_Details() {
    const { ingredient, idmeal } = useParams();
    return (
        <div className="container-fluid p-0">
            <Navbar />
            <Content_sub_details ingredient={ingredient} idmeal={idmeal} />
        </div>
    );
}