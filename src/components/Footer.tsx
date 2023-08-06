import { IFooter } from "../models";


export function Footer({ footer }: { footer: IFooter[] }) {

  return (
    <div className="Footer">

      <div className="footer-box">
        {
          footer.map(el =>
            <div className="footer" key={el.id}>
              <img src={el.image} alt="" />
              
              <div className="info">
                <p>{el.descr}</p>

                <div className="contacts">
                  <p>&#9742; {el.phone}</p>
                  <p>&#128231; {el.mail}</p>
                  <p>&#128526; {el.address}</p>
                </div>
              </div>
            </div>
          ).shift()
        }
        {
          footer.map(el =>
            <div className="footer" key={el.id}>
              <h3>{el.title}</h3>

              <div className="info">
                <a>{el.subtitle}</a>
                <a>{el.descr2}</a>
                <a>{el.subtitle2}</a>
                <a>{el.descr3}</a>
                <a>{el.info}</a>
                <a>{el.subtitle3}</a>
                <a>{el.descr4}</a>
                <a>{el.info2}</a>
              </div>
            </div>
          )
        }
      </div>

      <h4 className="allrights">© Copyright Qode Interactive. This demo is a part of the <span>Bridge theme</span>. <br />
        © All rights reserved. Developed by <span>Sarkis Sanoyan</span>.</h4>
    </div>
  )
}


