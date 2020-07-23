import React from "react";

const Fotopulapka = (props) => {
  return (
    <>
      <div className="col-md-3 col-4">
        <div className="product-grid4">
          <div className="product-image4">
            <a id={"link-" + props.object_id} href={props.link}>
              <img className="pic-1" src={props.foto_src1} />
              <img className="pic-2" src={props.foto_src2} />
            </a>
          </div>
          <div className="product-content" data-price={props.price}>
            <h3 className="title">
              <a href={props.link}>{props.name}</a>
            </h3>
            <div className="price">
              {props.price}
              <span>{props.price_before}</span>
            </div>
            <a href="#scroll_here">
              <button value={props.object_id}>porównaj</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fotopulapka;
