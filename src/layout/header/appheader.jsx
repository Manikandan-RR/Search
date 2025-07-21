import { Link } from "react-router-dom"

export const AppHeader = ({ search, setSearch }) => {


    return (
        <>
            <div style={{ paddingBottom: "75px" }}>
                <nav className="navbar navbar-expand-lg bg-body-tertiary shadow fixed-top w-100">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="home">MKR</Link>
                        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="home"><i className="bi bi-house-fill" style={{ fontSize: "1rem", color: "orange" }}></i>
                                        &nbsp;Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="user"><i className="bi bi-house-fill" style={{ fontSize: "1rem", color: "pink" }}></i>
                                        &nbsp;User Page</Link>
                                </li>

                            </ul>
                            <form onSubmit={(e)=>e.preventDefault()} className="d-flex" role="search">
                                <input className="form-control me-2" style={{ width: '500px' }} type="search" placeholder="Search Products..." aria-label="Search" onChange={(e) => setSearch(e.target.value)} />
                                <button className="btn btn-warning" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </>

    )
}