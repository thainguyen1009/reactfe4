import React, { Component } from 'react'
import BTProductsItem from './BTProductsItem'

export default class BTProductList extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <h3 className="text-center display-4">DANH SÁCH SẢN PHẨM</h3>
                    <div className="row">
                        <div className="col-3">
                            <BTProductsItem />
                        </div>
                        <div className="col-3">
                            <BTProductsItem />
                        </div>
                        <div className="col-3">
                            <BTProductsItem />
                        </div>
                        <div className="col-3">
                            <BTProductsItem />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
