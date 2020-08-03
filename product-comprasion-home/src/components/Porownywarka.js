import React from "react";

const Porownywarka = (props) => {
  if (props.isCompared) {
    return (
      <>
        <div className="col-md-3 col-4">
          <div className="product-grid4">
            <div className="product-image4">
              <a id={"link-" + props.id} href={props.link}>
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
              <div className="m-height">
                <p>{props.rozdzielczosc_matrycy}</p>
              </div>
              <div className="m-height">
                <p>{props.rozdzielczosc_video}</p>
              </div>
              <div className="m-height">
                <p>{props.max_rozdzielczosc_zdjec}</p>
              </div>
              <div className="m-height">
                <p>{props.obiektyw}</p>
              </div>
              <div className="m-height">
                <p>{props.kat_widzenia_obiektywu}</p>
              </div>
              <div className="m-height">
                <p>{props.niewidoczny_oswietlacz_ir}</p>
              </div>
              <div className="m-height">
                <p>{props.zacieg_oswietlacza_ir}</p>
              </div>
              <div className="m-height">
                <p>{props.ekran}</p>
              </div>
              <div className="m-height">
                <p>{props.format_nagran_video}</p>
              </div>
              <div className="m-height">
                <p>{props.zasilanie}</p>
              </div>
              <div className="m-height">
                <p>{props.rejestracja_dzwieku}</p>
              </div>
              <div className="m-height">
                <p>{props.znakowanie_zdjec}</p>
              </div>
              <a href="#scroll_here">
                <button
                  className="hideElement"
                  value={props.id}
                  onClick={props.click}
                >
                  urkyj
                </button>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};
export default Porownywarka;
