import React from 'react'
import Navbar from './Navbar'

const Add = () => {
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xl-6">
                            <label htmlFor="" className="form-label">Title</label>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xl-6">
                            <label htmlFor="" className="form-label">Image</label>
                            <input type="file" name="" id="" className="form-control" />
                        </div>

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xl-12">
                            <label htmlFor="" className="form-label">Description</label>
                            <textarea name="" id="" cols="30" rows="10" className="form-control"></textarea>
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xl-6">
                            <label htmlFor="" className="form-label">Category</label>
                            <select name="" id="" className="form-control">
                                <option value="Electronics">Electronics</option>
                                <option value="Grocery">Grocery</option>
                                <option value="Fashion">Fashion</option>
                                <option value="Toys">Toys</option>
                            </select>
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xl-6">
                            <label htmlFor="" className="form-label">Price</label>
                            <input type="number" className="form-control" />
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xl-6">
                            <button className="btn btn-success">Submit</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>



    </div>
  )
}

export default Add