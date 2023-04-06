import {
    audios
} from "./mockData";

export const AudiosVideos = () => {
    const data = audios.data
    return (
        <div className="container-fluid mt-5">

            <div className="row">
                <div className=" maximum-width m-auto">
                    <h3 className="fw-bold mar">Audio & Video</h3>
                    <div className="row">
                        {data.map((value) => {
                            return <div className="col-md-2 col-lg-4 col-xl-2 cam-width" key={value.id}>
                                <img src={value.mobImg} alt="no img found" />
                            </div>

                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}