import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="NotFound">
            <h1>Error 404: Page Not Found</h1>
            <Link to="/">Back to homepage</Link>
        </div>
    );
}
 
export default NotFound;