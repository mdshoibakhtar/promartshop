import { Link } from "react-router-dom"
import { mob } from "./mockData"

export const MobileAcceocries = () => {
    const data = mob.data
    return (
        <div className="container-fluid mt-5">

            <div className="row">
                <div className=" maximum-width m-auto">
                    <h3 className="fw-bold mar">Mobile & Accessories</h3>
                    <div className="row">
                        {data.map((value) => {
                            return <div className="col-md-2 col-lg-4 col-xl-2 col-4 cam-width" key={value.id}>
                                <Link to={value.comPagesLink}>
                                    <img src={value.mobImg} alt="no img found" />
                                </Link>
                            </div>

                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}