import React from 'react'

function Sunscribe() {
    return (
        <>
            <div style={{ backgroundColor: "#fafafa" }} className='pb-5 pt-5'>
                <div className="row m-5">
                    {/* <div className="col-md-1"></div> */}
                    <div className="col-md-12 mt-5 " style={{ marginLeft: "300px" }}>
                        <form >
                            <p><b>sign up for updates:</b></p>
                            <div className='d-flex align-items-between w-100'>
                                <input className=' ps-2' type="text " placeholder='email address' style={{ width: "50%" }} />
                                <button className='ms-5 btn border border-dark'>submit</button>
                            </div>                    
                            <p className='mt-3'>by signing up you agree to our <a href="">terms</a>.</p>
                        </form>
                    </div>
                    {/* <div className="col-md-1"></div> */}
                </div>
            </div>
        </>
    )
}

export default Sunscribe
