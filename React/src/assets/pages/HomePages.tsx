import {useNavigate} from "react-router-dom"
import { Card } from 'antd';
import './styleHome.css'
import { Link, useParams } from 'react-router-dom';

const { Meta } = Card;
const HomePages: React.FC = (props) => {
  // const navigate= useNavigate();
  // const {id : _id} = useParams();
  return (
    <div className='home'>
      <div className='banner'>{<img alt="example" src="https://bigbeerclub.vn/images/news/items/img1/bigbeerclub-uong3-tang1.jpg" />}</div>
      {props.products.map((items) => {
        return <div className='product1'>
          <Link to={`products/${items._id}`}>
          <Card
            hoverable
            style={{ width: 440 }}
            cover={<img alt="example" src="https://bigbeerclub.vn/images/news/items/img1/bigbeerclub-uong3-tang1.jpg" />}>
          {items.name}
          </Card>
          </Link>
        </div>
      })}
    </div>
  )
}

export default HomePages