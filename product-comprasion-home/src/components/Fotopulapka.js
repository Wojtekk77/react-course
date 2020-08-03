import React from "react";

const Fotopulapka = (props) => {
  return (
    <>
      <div className="col-md-3 col-4">
        <div className="product-grid4">
          <div className="product-image4">
            <a id={"link-" + props.id} href={props.link}>
              <img className="pic-1" src={props.foto_src1} alt={props.name} />
              <img
                className="pic-2"
                src={props.foto_src2}
                alt={`${props.name} rewers fotopułapki`}
              />
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
              {props.isCompared ? (
                <button
                  className="hideElement"
                  value={props.id}
                  onClick={props.click}
                >
                  ukryj
                </button>
              ) : (
                <button value={props.id} onClick={props.click}>
                  porownaj
                </button>
              )}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fotopulapka;
