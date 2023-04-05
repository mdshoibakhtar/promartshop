import { camera } from "./mockData"


export const Camera = () => {
    const data = camera.data
    return (
        <div className="container-fluid mt-5">

            <div className="row">
                <div className=" maximum-width m-auto">
                    <h3 className="fw-bold mar">Camera & Accessories</h3>
                    <div className="row">
                        {data.map((value) => {
                            return <div className="col-md-2" key={value.id}>
                                <img src={value.mobImg} alt="no img found" />
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}