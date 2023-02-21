import {Link} from 'react-router-dom';



export default function NoPageFound(){
    return (
        <div>
            <h1>The page you're looking for was not found.</h1>
            <Link to='/'>Go back to the homepage.</Link>
        </div>
    )

}