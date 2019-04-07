import React, { Component } from 'react';
import { connect } from 'react-redux';
import { find as _find } from 'lodash';
import Button from './Button';
import ProductQuantityBox from './ProductQuantityBox';
import ProductAtrributes from './ProductAtrributes';
const imageDirectory = process.env.IMAGE_DIRECTORY;



class ProductHero extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: null,
      color: null,
      size: null,
      price: '',
      quantity: 1,
      subtotal: '',
      currentImage: 1
    }
  }

  componentDidMount() {
    const { slug, getAllAttributes } = this.props;
    getAllAttributes(slug)
  }

  onSelectAttribute = (attribute, type) => {
    switch (type) {
      case 'color': return this.setState({ color: attribute })
      case 'size': return this.setState({ size: attribute })
      default: return ''
    }
  }

  increaseQuantity = () => {
    this.setState((prevState) => (
      { quantity: prevState.quantity + 1 }
    ), () => {
    });
  }

  reduceQuantity = () => {
    const { quantity } = this.state;
    if (quantity > 1) {
      this.setState((prevState) => (
        { quantity: prevState.quantity - 1 }
      ), () => {
      });
    }
  }

  toggleImage = (key) => {
    this.setState({
      currentImage: key
    })
  }

  addItemToCart = () => {
    const { addItemToCart, product, cartItems, updateItemInCart } = this.props;
    const { quantity, color, size } = this.state;
    const attribute = [size, color].toString()
    const id = product.product_id
    const item = {
      id: id,
      quantity,
      attributes: attribute,
      product: product
    }
    const activeEntry = _find(cartItems, { id });
    if (activeEntry) {
      return updateItemInCart(activeEntry, quantity)
    }
    return addItemToCart(item)
  }
  render() {
    const { quantity, currentImage } = this.state;
    const { product, attributes } = this.props;
    let colorAttributes = []
    let sizeAttributes = [];
    attributes && attributes.filter((attribute) => {
      if (attribute.attribute_name === 'Color') {
        return colorAttributes.push(attribute)
      }
      return sizeAttributes.push(attribute)
    })

    return (
      <div className="product-hero">
        <div className="container">
          <div className="product-wrapper">
            <div className="row">
              <div className="col-6">
                <img src={`${imageDirectory}${currentImage === 1 ? product.thumbnail : product.image_2}`} />

                <div className="row image-thumbnails">
                  <div className="image__box">
                    <div className="instagram__box" style={{ backgroundImage: `url(${`${imageDirectory}${product.image}`})` }} onClick={() => this.toggleImage(1)}>
                    </div>
                  </div>
                  <div className="image__box">
                    <div className="instagram__box" style={{ backgroundImage: `url(${`${imageDirectory}${product.image_2}`})` }} onClick={() => this.toggleImage(2)}>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <h1 className="name">{product.name}</h1>
                <div className="d-flex">
                  <p className={`price ${product.discounted_price !== "0.00" ? 'strike' : ''}`}>${product.price}</p>
                  { !product.discounted_price === "0.00" && <p className="price discount pl-3">${product.discounted_price}</p>}
                </div>

                <h3 className="mt-3 mb-3">PRODUCT DETAILS</h3>
                <p className="product-description mb-3">{product.description}</p>

                {attributes && <ProductAtrributes sizeAttributes={sizeAttributes} colorAttributes={colorAttributes} attributes={attributes} onSelectAttribute={this.onSelectAttribute} />}

                <ProductQuantityBox quantity={quantity} increaseQuantity={this.increaseQuantity} reduceQuantity={this.reduceQuantity} />
                <div className="mt-5">
                  <Button text="ADD TO CART" onClick={this.addItemToCart} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    attributes: state.attribute.attributes,
    cartItems: state.cart.cartItems
  };
}

const mapDispatchToProps = (dispatch) => {
  return ({
    getAllAttributes: (productId) => dispatch({ type: 'GET_PRODUCT_ATTRIBUTES', productId }),
    addItemToCart: (item) => dispatch({ type: 'ADD_ITEM_TO_CART', item }),
    updateItemInCart: (activeEntry, quantity) => dispatch({ type: 'INCREMENT_CART_ITEM_QUANTITY', activeEntry, quantity })
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductHero);