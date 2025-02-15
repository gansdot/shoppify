import React from 'react';

const products = [
  { dp: "/crackers/bgold_1.png", name: 'BOBY GOLD SPARKLERS 7CM(10pcs)', category: "SPARKLERS", actualprice: 50, discountedprice: 20 },
  { dp: "/crackers/bcrackling_2.png", name: 'BOBBY CRACKLINGS SPARKLERS 7CM(10PCS)', category: "SPARKLERS", actualprice: 50, discountedprice: 25 },
  { dp: "/crackers/4color_3.png", name: '12CM 4 COLOUR SPARKLERS (10PCS)', category: "SPARKLERS", actualprice: 100, discountedprice: 50 },
  { dp: "/crackers/gsparkling_4.png", name: 'GOLD SPARKLERS 15CM(10PCS)', category: "SPARKLERS", actualprice: 150, discountedprice: 75 },
  { dp: "/crackers/gsparkler_5.png", name: 'GOLD SPARKLERS 30CM(5PCS)', category: "SPARKLERS", actualprice: 150, discountedprice: 75 },
  { dp: "/crackers/rsparklers_6.png", name: 'RED SPARKLERS 15CM(10PCS)', category: "SPARKLERS", actualprice: 160, discountedprice: 80 },
  { dp: "/crackers/lsparklers_7.png", name: 'LEMON TREE SPARKLERS 15CM(10PCS)', category: "SPARKLERS", actualprice: 160, discountedprice: 80 },
  { dp: "/crackers/csparklers_8.png", name: 'CRACKLING SPARKLERS 15CM(10PCS)', category: "SPARKLERS", actualprice: 170, discountedprice: 85 },
  { dp: "/crackers/gsparkling_81.png", name: 'CRACKLING SPARKLERS 30CM(5PCS)', category: "SPARKLERS", actualprice: 170, discountedprice: 85 },
  { dp: "/crackers/lavendersparkler_9.png", name: 'LAVENDER SPARKLERS 15CM(10PCS)', category: "SPARKLERS", actualprice: 220, discountedprice: 110 },
  { dp: "/crackers/robincolorsparkler_e_11.png", name: 'ROBIN ELECTRIC SPARKLERS 50CM(5PCS)', category: "SPARKLERS", actualprice: 420, discountedprice: 210 },
  { dp: "/crackers/robincolorsparkler_11.png", name: 'ROBIN COLOUR SPARKLERS 50CM(5PCS)', category: "SPARKLERS", actualprice: 480, discountedprice: 240 },
  { dp: "/crackers/robincolorsparklers_12.png", name: 'ROBIN(5IN1) COLOUR SPARKLERS 75CM(5PCS)', category: "SPARKLERS", actualprice: 750, discountedprice: 375 },

  { dp: "/flowerpots/flower1.png", name: 'THE GREAT SPLENDOUR FOUNTAIN (1PC)', category: "FLOWERPOTS", actualprice: 160, discountedprice: 80 },
  { dp: "/flowerpots/flower2.png", name: 'FLOWERPOT SMALL(10PCS)', category: "FLOWERPOTS", actualprice: 190, discountedprice: 95 },
  { dp: "/flowerpots/flower3.png", name: 'FLOWERPOTS BIG(10PCS)', category: "FLOWERPOTS", actualprice: 320, discountedprice: 160 },
  { dp: "/flowerpots/flower4.png", name: 'FLOWERPOTS SPECIAL (10PCS)', category: "FLOWERPOTS", actualprice: 420, discountedprice: 210 },
  { dp: "/flowerpots/flower5.png", name: 'CHEERS FOUNTAIN (3PCS)', category: "FLOWERPOTS", actualprice: 460, discountedprice: 230 },
  { dp: "/flowerpots/flower6.png", name: 'FLOWERPOTS DELUXE (5PCS)', category: "FLOWERPOTS", actualprice: 560, discountedprice: 280 },
  { dp: "/flowerpots/flower7.png", name: 'JADE FLOWERS FOUNTAIN(5PCS)', category: "FLOWERPOTS", actualprice: 600, discountedprice: 300 },
  { dp: "/flowerpots/flower8.png", name: 'HAPPINESS FOUNTAIN (5PCS)', category: "FLOWERPOTS", actualprice: 620, discountedprice: 310 },
  { dp: "/flowerpots/flower9.png", name: 'JEWEL POTS FOUNTAIN (5PCS)', category: "FLOWERPOTS", actualprice: 620, discountedprice: 310 },
  { dp: "/flowerpots/flower10.png", name: 'SUNDROPS FOUNTAIN (5PCS)', category: "FLOWERPOTS", actualprice: 620, discountedprice: 310 },
  { dp: "/flowerpots/flower11.png", name: 'MONEY PENNY FOUNTAIN (5PCS)', category: "FLOWERPOTS", actualprice: 620, discountedprice: 310 },
  { dp: "/flowerpots/flower12.png", name: 'POPCORN FOUNTAIN (5PCS)', category: "FLOWERPOTS", actualprice: 620, discountedprice: 310 },
  { dp: "/flowerpots/flower13.png", name: 'LASER SHOW FOUNTAIN (3PCS)', category: "FLOWERPOTS", actualprice: 620, discountedprice: 310 },
  { dp: "/flowerpots/flower14.png", name: 'FLOWERPOTS GIANT (10PCS)', category: "FLOWERPOTS", actualprice: 620, discountedprice: 310 },
  { dp: "/flowerpots/flower15.png", name: 'COLOR FOUNTAINS (4PCS)', category: "FLOWERPOTS", actualprice: 620, discountedprice: 310 },

]

const Product = () => {
  return (
    <div className="container h-auto snap-x ...">
      <div className="grid grid-cols-4 gap-8 overflow-x">
        {
          products.map((item) => (

            <div key={item.name} className="card m-2 w-60 shadow">
              <figure>
                <img key={item.name} className='h-40 w-50 object-fill ...' src={item.dp} />
              </figure>
              <div key={item.name} className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p>Actual Price ₹{item.actualprice}</p>
                <p>Discounted Price ₹{item.discountedprice}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Product