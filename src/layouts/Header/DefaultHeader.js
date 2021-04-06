import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap'
import { ROUTE_HOME, ROUTE_POSTS, ROUTE_PROFILE, ROUTE_USERS } from '../../api/routes';

export const DefaultHeader = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Link className="navbar-brand" to={ROUTE_HOME}>Logo</Link>
            <Nav className="mr-auto">
                <Link to={ROUTE_HOME} className="nav-link">Home</Link>
                <Link to={ROUTE_PROFILE} className="nav-link">Profile</Link>
                <Link to={ROUTE_USERS} className="nav-link">Users</Link>
                <Link to={ROUTE_POSTS} className="nav-link">Posts</Link>
            </Nav>
        </Navbar>
    )
}