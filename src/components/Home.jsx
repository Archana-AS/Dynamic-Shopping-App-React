import React, { useState } from 'react'
import Navbar from './Navbar'

const Home = () => {

  const [data, changeData] = useState(
    [
      {
        "name": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "url": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
      },
      {
        "name": "Mens Casual Premium Slim Fit T-Shirts",
        "url": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
      },
      {
        "name": "Mens Cotton Jacket",
        "url": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
      },
      {
        "name": "Mens Casual Slim Fit",
        "url": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
      },
      {
        "name": "Solid Gold Petite Micropave ",
        "url": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
      },
      {
        "name": "White Gold Plated Princess",
        "url": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"
      },
      {
        "name": "Pierced Owl Rose Gold Plated Stainless Steel Double",
        "url": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg"
      },
      {
        "name": "WD 2TB Elements Portable External Hard Drive - USB 3.0",
        "url": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"
      },
      {
        "name": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        "url": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"
      },
      {
        "name": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        "url": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg"
      },
      {
        "name": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        "url": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg"
      },
      {
        "name": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
        "url": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"
      },
      {
        "name": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coat",
        "url": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg"
      }
    ]
  )



  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <div className="row g-3">
              {
                data.map(

                  (value, index) => {

                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                      <div class="card" >
                        <img src={value.url} class="card-img-top" alt="..."/>
                        <div class="card-body">
                          <p class="card-text">{value.name}</p>
                        </div>
                      </div>

                      
                    </div>
                  }
                )
              }
            </div>

          </div>
        </div>
      </div>




    </div>
  )
}

export default Home