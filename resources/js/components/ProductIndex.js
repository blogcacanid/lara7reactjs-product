import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SweetAlert from 'react-bootstrap-sweetalert';
import ProductRow from './ProductRow';
import Pagination from "react-js-pagination";
 
class ProductIndex extends Component {
     
    constructor (props) {
        super(props)
        this.state = {
            products: [],
            msg: null,
            type: null,
            flash:false,
            alert: null,
            activePage: 0,
            itemsCountPerPage: 0,
            totalItemsCount: 0,
            pageRangeDisplayed: 5,
        };
        this.handlePageChange = this.handlePageChange.bind(this);
    }
 
    hideAlert() {
        this.setState({
            alert: null
        });
    }
 
    componentDidMount () {
        axios.get(`http://localhost:8080/api/products_page?page=` + this.state.activePage)
        .then(response => {
            this.setState({
                products: response.data.data,
                activePage: response.data.current_page,
                itemsCountPerPage: response.data.per_page,
                totalItemsCount: response.data.total,
            })
        })  
    }
 
    handlePageChange(pageNumber) {
        axios.get(`http://localhost:8080/api/products_page?page=` + pageNumber)
            .then(response => {
                this.setState({
                    products: response.data.data,
                    activePage: response.data.current_page,
                });
            })
    }

    tableRow() {
        if (this.state.products instanceof Array) {
            return this.state.products.map(function (object, i) {
                return <ProductRow
                    obj={object} st={this.state} key={i} index={i}
                />;
            }, this)
        }
    }

    render () {
        const { products } = this.state
        return (
          <div className='container py-4'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='card'>
                  <div className='card-header'><h3><i className="fas fa-list"></i>&nbsp;Product List</h3></div>
                  <div className='card-body'>
                    <Link className='btn btn-success mb-3' title="Add New Record" to='/product/create'>
                        <i className="fas fa-plus-circle"></i>&nbsp;Add Record
                    </Link>
                    <div className="table-responsive" >
                        <table className="table table-bordered table-striped" style={{fontStyle:'Calibri',fontSize:13}} >
                            <thead>
                                <tr>
                                    <th width="120" className="text-center">Action</th>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.tableRow()}
                            </tbody>
                        </table>
                        {this.state.alert}
                        <Pagination
                            activePage={this.state.activePage}
                            itemsCountPerPage={this.state.itemsCountPerPage}
                            totalItemsCount={this.state.totalItemsCount}
                            pageRangeDisplayed={5}
                            onChange={this.handlePageChange}
                        />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
 
export default ProductIndex