import { leddata } from "./mockData"

export const LedTv = () => {
    const ledData = leddata.data
    return (
        <div className="container-fluid">

            <div className="row">
                <div className="  maximum-width m-auto">
                    <div className="row my-5">
                        {ledData.map((value) => {
                            return <div className="col-md-3" key={value.id}>
                                <figure>
                                    <img src={value.img} width={100 + "%"} alt="no img found" />
                                </figure>
                                <h5 className="fw-bold">{value.brandName}</h5>
                                <figcaption>{value.title}</figcaption>
                            </div>
                        })}


                    </div>
                </div>
            </div>
        </div>
    )
}