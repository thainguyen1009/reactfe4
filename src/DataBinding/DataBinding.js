import React, { Component } from 'react'

export default class DataBinding extends Component {

    hocVien = {
        ma: 1,
        hoTen: 'Nguyen Van T',
        hinhAnh: 'https://picsum.photos/200'
    }


    // Phương thức renderImg do mình tạo ra
    renderImg() {
        return <img src="https://picsum.photos/200" />
    }
    // Phương thức render của react Component
    render() {
        let title = 'hello fe41';
        return (
            <div>
                <div className="container">
                    <div className="card text-left">
                        <img width={200} height={200} className="card-img-top" src={this.hocVien.hinhAnh} alt />
                        <div className="card-body">
                            <h4 className="card-title">{this.hocVien.hoTen}</h4>
                            <p className="card-text">{this.hocVien.ma}</p>
                        </div>
                    </div>
                </div>
                {/* {Binding biến} */}
                <h1>{title}</h1>
                <input value={title} />
                {/* {Binding phương thức} */}
                {this.renderImg()}
            </div>
        )
    }
}
