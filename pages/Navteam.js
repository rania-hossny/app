import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navteam = () => {
    return (
        <div>
             <div className="text-center">
                <h2 style={{fontWeight: "bold",fontFamily: "arial",fontSize: "2.5rem"}}>Team name</h2>
                <Link style={{fontSize: "20px", textDecoration: "none"}} className="mr-3" to="/Teamcontent/:id">Posts</Link>
                <Link style={{fontSize: "20px", textDecoration: "none"}} to="/files">Files</Link>
                </div>
            {/* <Nav variant="pills" defaultActiveKey="#first" className="navteam">
             <Nav.Link href="#disabled" disabled>
             Team Name
        </Nav.Link>
                <Nav.Item>
                    <Nav.Link href="/Teamcontent/:id">Posts</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/files">Files</Nav.Link>
                </Nav.Item>
                </Nav> */}
        </div>
    )
}

export default Navteam
