import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";
import {InfoOfShop} from '../data';
export default class Contact extends Component {
  render() {
    const {name,img,address,phone,time} = InfoOfShop;
    return (
      <div className="container py-5">

      <div className="row">
        <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
          <h1>Thông tin liên hệ tới Cửa hàng</h1>
        </div>
      </div>

      <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="" />
                </div>

                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">

                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    <span className="text-uppercase">{name}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      Địa chỉ : <span className="text-uppercase">{address}</span>
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    Điện Thoại:
                  </p>
                  <p className="text-muted lead">{phone}</p>
                  <hr/>
                  <p className="text-muted lead">{time}</p>

                </div>
              </div>

    </div>
    );
  }
}
