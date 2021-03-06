import React from 'react';
import ProductList from '../../Components/ProductList/ProductList.js';
import './Chanel19.scss';
import Nav from '../../Components/Nav/Nav.js';
import Footer from '../../Components/Footer/Footer.js';

class Chanel19 extends React.Component {
  constructor() {
    super();
    this.state = {
      Chanel19List: [],
    };
  }

  componentDidMount() {
    fetch('http://10.58.0.55:8000/products/chanel-19')
      .then((res) => res.json())
      .then((res) => this.setState({ Chanel19List: res.bag_info }));
  }

  render() {
    //console.log(this.props);
    return (
      <>
        <Nav />
        <div className="total">
          <div className="list_box">
            <div className="list_grid">
              {this.state.Chanel19List.map((info, index) => (
                <ProductList
                  key={index}
                  listName={info.bag_name}
                  listMaterial={info.texture}
                  listPrice={info.bag_price}
                  listImg={info.bag_img}
                  listCode={info.bag_code}
                  history={this.props}
                />
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Chanel19;
