import React from 'react'
import 'C:/Users/kesar/OneDrive/Desktop/3-2/project-3/website/project3/src/components/Home_components/Homecss/New_products.css'
import grid2 from 'C:/Users/kesar/OneDrive/Desktop/3-2/project-3/website/project3/src/images/grid 2.png';
import grid3 from 'C:/Users/kesar/OneDrive/Desktop/3-2/project-3/website/project3/src/images/grid 3.png'
import grid4 from 'C:/Users/kesar/OneDrive/Desktop/3-2/project-3/website/project3/src/images/grid 4.png'



function New_products() {

  const products = [
    {id: 1, title: 'bag', price: '100/-' ,imageUrl: grid2},
    {id: 5, title: 'cdbxxbgdhdhdhdhddhdhdhdhdhdddar', price: '100/-' ,imageUrl: grid4},
    {id: 2, title: 'bag', price: '100/-' ,imageUrl: grid2},
    {id: 3, title: 'bag', price: '100/-' ,imageUrl: grid3},
    {id: 4, title: 'bag', price: '100/-' ,imageUrl: grid2},
  ]
  return (
    <div className='New-produ'>
      <div className='Title'>
        <span className='new'>NEW P</span>RODUCTS
      </div>
      <div className='produ_list'>
        <ul className='list'>
          {products.map(product =>
          <li key={product.id} className='product_item'>
            <div className='imag_box'>
              <img className='images' src={product.imageUrl} alt={product.title}/>
            </div>
            <div className='product_details'>
                <p className='product_name'>{product.title}</p>
                <p className='price'>
                  {product.price}
                </p>
            </div>
            
          </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default New_products