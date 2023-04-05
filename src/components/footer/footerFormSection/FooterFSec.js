import { Button } from "react-bootstrap"

export const FooterForm = () => {
    return (
        <div className="cntainer-fluid bgColor px-5">
            <div className="maximum-width m-auto p-5">
                <div className="row ">
                    <div className="col md-6">
                        <h2 class="fw-bold mar">Get Expert Tips In Your Inbox</h2>
                        <p>Subscribe to our newsletter and stay updated.</p>
                    </div>
                    <div className="col md-6  d-flex aligin-item-center">
                        <div className="row w-100">
                            <div className="col-md-11 m-auto d-flex justify-content-end">
                                <div className="w-100 ">
                                    <form className="w-100">
                                        <input placeholder="write your email here " className="emailInp w-75 px-4 py-2" />
                                        <Button className="btn-dark mx-2 px-2 py-2">Suscribe</Button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}