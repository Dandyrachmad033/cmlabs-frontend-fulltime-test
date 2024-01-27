

export default function MainBody() {
    return (
        <div className="container-fluid p-3" style={{ backgroundColor: "#fbfbfb" }}>
            <div className="d-flex justify-content-center" style={{ marginTop: "20px" }}>
                <img src="/images/fried-rice.png" alt="ramen" style={{ maxWidth: "64px", maxHeight: "64px", marginRight: "20px" }} />
                <img src="/images/rice.png" alt="ramen" style={{ maxWidth: "64px", maxHeight: "64px", marginRight: "20px" }} />
                <img src="/images/ramen.png" alt="ramen" style={{ maxWidth: "64px", maxHeight: "64px" }} />
            </div>
            <div className="d-flex justify-content-center" style={{ marginTop: "20px" }}>
                <h4>mealapp API website</h4>
            </div>
            <div className="d-flex justify-content-center" style={{ marginTop: "10px" }}>
                <h1>See All The Delicious Food</h1>
            </div>


        </div>
    );
}