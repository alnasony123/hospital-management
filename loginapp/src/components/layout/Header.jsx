import React, { Component } from "react";
import coverpic from "../../images/Hospital-HITN.jpg";
import coverpic02 from "../../images/Dept.-Banner-General-Surgery.png";
import coverpic03 from "../../images/OnlineBooking.png";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer,
} from "mdbreact";

class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        {/* <img src={coverpic} width="100%" height="300px" alt="y?" /> */}

        <MDBContainer>
          <MDBCarousel
            activeItem={1}
            length={3}
            showControls={true}
            showIndicators={true}
            className="z-depth-1"
          >
            <MDBCarouselInner>
              <MDBCarouselItem itemId="1">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src={coverpic}
                    width="500px"
                    height="300px"
                    alt="First slide"
                  />
                  <MDBMask overlay="black-light" />
                </MDBView>
                <MDBCarouselCaption>
                  <h3 className="text-dark">New Life Hospital</h3>
                  <p className="text-dark">You deserve the Best</p>
                </MDBCarouselCaption>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src={coverpic02}
                    width="500px"
                    height="300px"
                    alt="Second slide"
                  />
                  <MDBMask overlay="black-strong" />
                </MDBView>
                <MDBCarouselCaption>
                  <h3 className="h3-responsive ">Best Faculty</h3>
                  <p>With Care & Love</p>
                </MDBCarouselCaption>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="3">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src={coverpic03}
                    width="500px"
                    height="300px"
                    alt="Third slide"
                  />
                  <MDBMask overlay="black-slight" />
                </MDBView>
                <MDBCarouselCaption>
                  <h3 className="h3-responsive ">24/7 Service</h3>
                  <p>Always There For You</p>
                </MDBCarouselCaption>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
        </MDBContainer>
      </div>
    );
  }
}

export default Header;
