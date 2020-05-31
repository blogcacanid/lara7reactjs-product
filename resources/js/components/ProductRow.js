import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SweetAlert from 'react-bootstrap-sweetalert';

class ProductRow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td width="100" className="text-center">
                    <div className="btn-group">
                        <Link className='btn btn-default btn-sm' title="View Record" to={`/product/${this.props.obj.id}`}><i className="fas fa-eye"></i></Link>
                        <Link className='btn btn-default btn-sm' title="Edit Record" to={`/product/edit/${this.props.obj.id}`}><i className="fas fa-edit"></i></Link>
                        <Link className='btn btn-default btn-sm' title="Delete Record" to={`/product/delete/${this.props.obj.id}`}><i className="fas fa-trash"></i></Link>
                    </div>
                </td>
                <td>{this.props.obj.product_name}</td>
                <td>{this.props.obj.product_price}</td>
            </tr>
        );
    }
}

export default ProductRow;