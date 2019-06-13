import React, { Component } from "react";
import { linkData } from "./linkData";
import { socialData } from "./socialLinkData";
import { items } from "./productData";
import { servicesLinkData } from "./servicesLinkData";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
    links: linkData,
    servicesData: servicesLinkData,
    socialIcons: socialData,
    cart: [],
    cartItems: 0,
    cartSubTotal: 0,
    carTax: 0,
    carTotal: 0,
    storeProducts: [],
    filteredProducts: [],
    featuredProducts: [],
    singleProduct: {},
    loading: true,
    devise: "FCFA",
    search: "",
    filterPrice: "0",
    max: 0,
    min: 0,
    shipping: false,
    company: "all"
  };

  componentDidMount() {
    this.setProducts(items);
  }

  setProducts = products => {
    // formater la liste des produits
    let storeProducts = products.map(item => {
      const id = item.sys.id;
      const image = item.fields.image.fields.file.url;
      return { id, ...item.fields, image };
    });

    // formater featured Products
    let featuredProducts = storeProducts.filter(item => item.featured === true);

    // configurer max price

    let maxPrice = Math.max(...storeProducts.map(item => item.price));
    this.setState(
      {
        storeProducts,
        featuredProducts,
        filteredProducts: storeProducts,
        singleProduct: this.getStorageProduct(),
        cart: this.getStorageCart(),
        loading: false,
        max: maxPrice,
        filterPrice: maxPrice
      },
      () => {
        this.addTotals();
      }
    );
  };

  // get Product from storage
  getStorageProduct = () => {
    return localStorage.getItem("singleProduct")
      ? JSON.parse(localStorage.getItem("singleProduct"))
      : {};
  };

  //get cart from storage
  getStorageCart = () => {
    let cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    return cart;
  };

  //getTotals
  getTotals = () => {
    let cartSubTotal = 0;
    let cartItems = 0;
    this.state.cart.forEach(item => {
      cartSubTotal += item.total;
      cartItems += item.count;
    });

    cartSubTotal = parseFloat(cartSubTotal.toFixed(2));
    let carTax = cartSubTotal * 0.18;
    carTax = parseFloat(carTax.toFixed(2));
    let carTotal = carTax + cartSubTotal;
    carTotal = parseFloat(carTotal.toFixed(2));
    return {
      carTax,
      cartItems,
      carTotal,
      cartSubTotal
    };
  };

  //addTotals
  addTotals = value => {
    const { carTax, carTotal, cartItems, cartSubTotal } = this.getTotals();
    this.setState({
      carTax,
      cartItems,
      carTotal,
      cartSubTotal
    });
  };

  // to sync storage
  syncStorage = () => {
    localStorage.setItem("cart", JSON.stringify(this.state.cart));
  };

  // add to cart
  addToCart = id => {
    let tempCart = [...this.state.cart];
    let tempStoreProducts = [...this.state.storeProducts];
    let tempItem = tempCart.find(item => item.id === id);
    if (!tempItem) {
      // creer un nouveau produit
      let tempItem = tempStoreProducts.find(item => item.id === id);
      let total = tempItem.price;
      tempItem = { ...tempItem, count: 1, total };
      tempCart = [...tempCart, tempItem];
    } else {
      tempItem.count += 1;
      tempItem.total = tempItem.count * tempItem.price;
      tempItem.total = parseFloat(tempItem.total.toFixed(2));
    }

    this.setState({ cart: tempCart }, () => {
      this.addTotals();
      this.syncStorage();
      this.openCard();
    });
    /*
   this.setState(()=>{ return {cart:tempCart}},()=>{
    this.addTotals();
    this.syncStorage();
    this.openCard();
  })
  */
  };
  // set single Product
  setSingleProduct = id => {
    let product = this.state.storeProducts.find(item => item.id === id);
    localStorage.setItem("singleProduct", JSON.stringify(product));
    this.setState({
      singleProduct: { ...product },
      loading: false
    });
  };

  handleSidebare = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };
  handleCard = () => {
    this.setState({ cartOpen: !this.state.cartOpen });
  };

  openCard = () => {
    this.setState({ cartOpen: true });
  };

  closeCard = () => {
    this.setState({ cartOpen: false });
  };

  clearCart = () => {
    this.setState({ cart: [] }, () => {
      this.addTotals();
      this.syncStorage();
    });
  };

  removeItem = id => {
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter(item => item.id !== id);
    this.setState({ cart: tempCart }, () => {
      this.addTotals();
      this.syncStorage();
    });
  };

  increment = id => {
    let tempCart = [...this.state.cart];
    let tempItem = tempCart.find(item => item.id === id);
    tempItem.count += 1;
    tempItem.total = tempItem.count * tempItem.price;
    tempItem.total = parseFloat(tempItem.total.toFixed(2));
    this.setState({ cart: tempCart }, () => {
      this.addTotals();
      this.syncStorage();
    });
  };

  decrement = id => {
    let tempCart = [...this.state.cart];
    let tempItem = tempCart.find(item => item.id === id);
    tempItem.count -= 1;

    if (tempItem.count === 0) {
      this.removeItem(id);
    } else {
      tempItem.total = tempItem.count * tempItem.price;
      tempItem.total = parseFloat(tempItem.total.toFixed(2));

      this.setState({ cart: tempCart }, () => {
        this.addTotals();
        this.syncStorage();
      });
    }
  };

  // handle filtering
  handleFiltering = event => {
    const name = event.target.name;
    const value =
      event.target.type === "checked"
        ? event.target.checked
        : event.target.value;

    this.setState(
      {
        [name]: value
      },
      this.sortData
    );
  };

  sortData = () => {
    const {
      search,
      filterPrice,
      shipping,
      company,
      storeProducts
    } = this.state;

    let tempFiltered = [...storeProducts];
    //Company filter
    if (company !== "all") {
      tempFiltered = tempFiltered.filter(item => item.company === company);
    }

    if (shipping) {
      tempFiltered = tempFiltered.filter(item => item.freeShipping === true);
    }

    //Price filter
    tempFiltered = tempFiltered.filter(item => item.price <= filterPrice);

    // text Fielter

    this.setState({
      filteredProducts: tempFiltered
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleCard: this.handleCard,
          openCard: this.openCard,
          closeCard: this.closeCard,
          handleSidebare: this.handleSidebare,
          addToCart: this.addToCart,
          setSingleProduct: this.setSingleProduct,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
          increment: this.increment,
          decrement: this.decrement,
          handleFiltering: this.handleFiltering
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
