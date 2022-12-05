import {Component} from "react";
import {render} from "react-dom";
import {CButton, CCard, CCardBody, CCardFooter, CCardImage, CCardText, CCardTitle, CCol, CRow} from "@coreui/react";


console.clear();

let shop = [
    { name: "Samsung 10X500",
        price: 40999,
        info: "product of google",
        img: "https://static.eldorado.ru/photos/mv/Big/30063255bb.jpg"
    },
    {
        name: "IPhone X1000",
        price: 51000,
        info: "product of apple",
        img: "https://ipixel.ru/upload/iblock/f81/p2o5fr5mffxp9670razkqtnaiqor44i1.jpg"
    },
    {
        name: "XiaoMi",
        price: 15999,
        info: "product of microsoft",
        img: "https://www.tradeinn.com/f/13779/137794643/xiaomi-redmi-9a-2gb-32gb-6.53-dual-sim-%D0%A1%D0%BC%D0%B0%D1%80%D1%82%D1%84%D0%BE%D0%BD.jpg"
    },
    {
        name: "HTC",
        price: 23500,
        info: "product of microsoft",
        img: "https://avatars.mds.yandex.net/get-mpic/5209894/img_id7110791517312238397.jpeg/orig"
    }
];




class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            qty: 0
        };
        this.add = this.add.bind(this);
        this.subtract = this.subtract.bind(this);
        this.showInfo = this.showInfo.bind(this);
    }

    add() {
        this.setState({
            qty: this.state.qty + 1
        });
        this.props.handleTotal(this.props.price);
    }

    subtract() {
        this.setState({
            qty: this.state.qty - 1
        });
        this.props.handleTotal(-this.props.price);
    }

    showInfo() {
        this.props.handleShow(this.props.info);
    }



    render() {
        return (



                    <CCard>
                            <CCardImage style={{"width": "300px"}} orientation="top" src={this.props.img} />
                        <CCardBody>
                            <CCardTitle>{this.props.name}</CCardTitle>
                            <CCardText>
                                {this.showInfo}
                            </CCardText>
                        </CCardBody>
                        <CCardFooter>
                           <p>{this.props.price} P</p>
                            <div className="col-6 text-right">
                                <CButton color="dark" className="m-1" onClick={this.add}>
                                    +1
                                </CButton>
                                <CButton color="dark" className="m-1" onClick={this.subtract} disabled={this.state.qty < 1}>
                                    -1
                                </CButton>
                            </div>
                        </CCardFooter>
                    </CCard>


        );
    }
}


class Total extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let total = this.props.total;


        return (
            <div style={{"marginTop": "30px", "backgroundColor":"#F6F6F6","padding": "10px"}}>
                <h3 className="row" style={{ fontWeight: 400 }}>
                    <span className="col-6">Стоимость:</span>
                    <span className="col-6 text-right">{total} Р</span>
                </h3>
            </div>
        );
    }
}


class ProductList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            total: 0,
            productList: ""
        };

        this.createProduct = this.createProduct.bind(this);
        this.calculateTotal = this.calculateTotal.bind(this);
        this.showProduct = this.showProduct.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ productList: shop });
        }, 1000);
    }

    createProduct(product) {
        this.setState({
            products: this.state.productList.push(product)
        });
    }

    calculateTotal(price) {
        this.setState({
            total: this.state.total + price
        });
        console.log(this.state.total);
    }

    showProduct(info) {
        console.log(info);
        alert(info);
    }

    render() {
        if (!this.state.productList) return <p>loading...!!!!</p>;

        var component = this;
        var products = this.state.productList.map(function(product) {
            return (

                    <Product
                        name={product.name}
                        price={product.price}
                        info={product.info}
                        img = {product.img}
                        handleShow={component.showProduct}
                        handleTotal={component.calculateTotal}
                    />

            );
        });

        return (
            <div >
                <div style={{"width":"100%", "display": "grid", "grid-template-columns":"310px 310px 310px 310px","grid-gap": "10px"}}>
                    {products}
                </div>
                <Total total={this.state.total} />
            </div>
        );
    }
}


export default ProductList;




