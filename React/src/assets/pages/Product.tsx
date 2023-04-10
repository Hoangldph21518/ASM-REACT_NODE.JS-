import React from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  height: '360px',
  color: '#fff',
  lineHeight: '190px',
  textAlign: 'center',
  background: '#364d79',
  width: '100%',
};
const Product = (props) => {

  const removeProduct = (_id) => {
    props.onRemove(_id)
}
  return (
    
    <div>
      <div>
        {props.products.map((item) => {
          return <div key={item.id}>
      <Carousel autoplay>
            <div>
              <h3 style={contentStyle}>{item.name}</h3>
            </div>
            <div>
              <h3 style={contentStyle}>{item.price}</h3>
            </div>
            <div>
              <h3 style={contentStyle}>{item.categoryId}</h3>
            </div>
            <div>
              <h3 style={contentStyle}>{item.des}</h3>
            </div>
  </Carousel>
  </div>
        })}
      </div>

        {props.products.map((item) => {
            return  <div key={item.id}>
                        <h2>{item.name}</h2>
                        <button onClick={() => removeProduct(item._id)}>Remove</button>
                    </div>
        })}
    </div>
  )
}
export default Product