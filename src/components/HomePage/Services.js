import React, { Component } from "react";
import { ProductConsumer } from "../../context";
import styled from "styled-components";
class componentName extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          return (
            <ServicesWrapper className="py-5">
              <div className="container">
                <div className="row">
                  {value.servicesData.map(item => (
                    <div
                      className="col-10 mx-auto my-3 text-center col-sm-6 col-md-4"
                      key={item.id}
                    >
                      <div className="service-icon">{item.icon}</div>.
                      <div className="mt-3 text-capitalize">
                        <h5>{item.title}</h5>
                      </div>
                      <div className="mt-3">{item.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ServicesWrapper>
          );
        }}
      </ProductConsumer>
    );
  }
}
const ServicesWrapper = styled.section`
  background: rgba(95, 183, 234, 0.5);
  .service-icon {
    font-size: 2.5rem;
    color: (--primaryColor);
  }
  .p {
    color: var(--darkGrey);
  }
`;
export default componentName;
