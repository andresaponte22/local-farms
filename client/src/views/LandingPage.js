import React from "react";


// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
// import ProductCarousel from "views/index-sections/ProductCarousel.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function LandingPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Who we are?</h2>
                <h5 className="description">
                a group of devs trying to push a change to the farmering industry. 
                Our goal is to draw people attention to local farming to support local farmers and their crops.
                Have people eat healthier and take care of their bodies and overall make better choices with the foods they eat.
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:

                        "url(" + require("assets/img/farmers3.jpg").default + ")",

                    }}
                  >
                    <p className="blockquote blockquote-success">
                    "The farmer is the only man in our economy who buys everything at retail, sells everything at wholesale, and pays the freight both ways." <br></br>
                      <br></br>
                      <small>-John F. Kennedy</small>
                    </p>
                  </div>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:

                        "url(" + require("assets/img/farmers4.jpg").default + ")",

                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:

                        "url(" + require("assets/img/farmers6.jpg").default + ")",
                    }}
                  ></div>
                  <h3>
                    why should you eat local? why should you support the local farmers market you see pop up every summer?
                    is there any upsides to doing this? Well of course!
                  </h3>
                  <p>
                  Locally grown food is full of flavor. When grown locally, the crops are picked at their peak of ripeness versus being harvested early in order to be shipped and distributed to your local retail store. Many times produce at local markets has been picked within 24 hours of your purchase
                  </p>
                  <p>
                  Local food has more nutrients. Local food has a shorter time between harvest and your table, and it is less likely that the nutrient value has decreased. Food imported from far-away states and countries is often older, has traveled and sits in distribution centers before it gets to your store.
                  </p>
                  <p>
                  Local foods promote a safer food supply. The more steps there are between you and your food’s source the more chances there are for contamination. Food grown in distant locations has the potential for food safety issues at harvesting, washing, shipping and distribution.

                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>


        <div className="section section-team text-center">
          <Container>
            <h2 className="title" id="team">Here is our team</h2>
            <div className="team">
              <Row>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"

                      src={require("assets/img/PROFILEPIC.jpg").default}
                    ></img>
                    <h4 className="title">Devesh Patel</h4>
                    <p className="category text-success">Model</p>
                    <p className="description">
                      my guy mad popular with the ladies
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="success"

                      href="https://www.youtube.com/watch?v=xvFZjo5PgG0&ab_channel=DeeckPeeck"

                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="success"

                      href="https://www.youtube.com/watch?v=xvFZjo5PgG0&ab_channel=DeeckPeeck"

                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-instagram"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="success"

                      href="https://www.youtube.com/watch?v=xvFZjo5PgG0&ab_channel=DeeckPeeck"

                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-facebook-square"></i>
                    </Button>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"

                      src={require("assets/img/harviator2.png").default}
                    ></img>
                    <h4 className="title">Jon Harvey</h4>
                    <p className="category text-success">Designer</p>
                    <p className="description">
                      cute old man
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="success"

                      href="https://www.youtube.com/watch?v=xvFZjo5PgG0&ab_channel=DeeckPeeck"

                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="success"

                      href="https://www.youtube.com/watch?v=xvFZjo5PgG0&ab_channel=DeeckPeeck"

                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-linkedin"></i>
                    </Button>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"

                      src={require("assets/img/drez.jpg").default}
                    ></img>
                    <h4 className="title">Andres Aponte</h4>

                    <p className="category text-success">Fashion</p>
                    <p className="description">
                      You can write here details about one of your team members.
                      You can give more details about what they do. Feel free to
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="success"

                      href="https://www.youtube.com/watch?v=xvFZjo5PgG0&ab_channel=DeeckPeeck"

                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-google-plus"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="success"

                      href="https://www.youtube.com/watch?v=xvFZjo5PgG0&ab_channel=DeeckPeeck"

                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-youtube"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="success"

                      href="https://www.youtube.com/watch?v=xvFZjo5PgG0&ab_channel=DeeckPeeck"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/syed.jpg").default}
                    ></img>
                    <h4 className="title">syed ashan</h4>
                    <p className="category text-success">Designer</p>
                    <p className="description">
                      You can write here details about one of your team members.
                      You can give more details about what they do. Feel free to
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="success"
                      href="https://www.youtube.com/watch?v=xvFZjo5PgG0&ab_channel=DeeckPeeck"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="success"
                      href="https://www.youtube.com/watch?v=xvFZjo5PgG0&ab_channel=DeeckPeeck"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-linkedin"></i>
                    </Button>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("../assets/img/playboi.png").default}
                    ></img>
                    <h4 className="title">Patrick 'Playboy' Brodie</h4>
                    <p className="category text-success">i dont know what he does</p>
                    <p className="description">
                      he did nothing to help towards this project. he probably is clueless to what this entire application
                      is but like, he is too good looking not to put in the project so this is a little section for him
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="success"
                      href="https://www.youtube.com/watch?v=xvFZjo5PgG0&ab_channel=DeeckPeeck"

                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>

                    <Button
                      className="btn-icon btn-round"
                      color="success"
                      href="https://www.youtube.com/watch?v=xvFZjo5PgG0&ab_channel=DeeckPeeck"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-linkedin"></i>
                    </Button>

                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"

                      src={require("assets/img/luca.png").default}
                    ></img>
                    <h4 className="title">luca</h4>

                    <p className="category text-success">Fashion</p>
                    <p className="description">
                      You can write here details about one of your team members.
                      You can give more details about what they do. Feel free to
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="success"

                      href="https://www.youtube.com/watch?v=xvFZjo5PgG0&ab_channel=DeeckPeeck"

                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-google-plus"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="success"

                      href="https://www.youtube.com/watch?v=xvFZjo5PgG0&ab_channel=DeeckPeeck"

                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-youtube"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="success"

                      href="https://www.youtube.com/watch?v=xvFZjo5PgG0&ab_channel=DeeckPeeck"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"

                      src={require("assets/img/devon.jpg").default}
                    ></img>
                    <h4 className="title">devon</h4>

                    <p className="category text-success">Fashion</p>
                    <p className="description">
                      You can write here details about one of your team members.
                      You can give more details about what they do. Feel free to
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="success"

                      href="https://www.youtube.com/watch?v=xvFZjo5PgG0&ab_channel=DeeckPeeck"

                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-google-plus"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="success"

                      href="https://www.youtube.com/watch?v=xvFZjo5PgG0&ab_channel=DeeckPeeck"

                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-youtube"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="success"

                      href="https://www.youtube.com/watch?v=xvFZjo5PgG0&ab_channel=DeeckPeeck"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"

                      src={require("assets/img/deep.png").default}
                    ></img>
                    <h4 className="title">Deep Patel</h4>

                    <p className="category text-success">Fashion</p>
                    <p className="description">
                      You can write here details about one of your team members.
                      You can give more details about what they do. Feel free to
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="success"

                      href="https://www.youtube.com/watch?v=xvFZjo5PgG0&ab_channel=DeeckPeeck"

                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-google-plus"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="success"

                      href="https://www.youtube.com/watch?v=xvFZjo5PgG0&ab_channel=DeeckPeeck"

                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-youtube"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="success"

                      href="https://www.youtube.com/watch?v=xvFZjo5PgG0&ab_channel=DeeckPeeck"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>


        <div className="section section-contact-us text-center" id="contact">
          <Container>
            <h2 className="title">Want to work with us?</h2>
            <p className="description">Your project is very important to us.</p>
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <InputGroup
                  className={
                    "input-lg" + (firstFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons users_circle-08"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="First Name..."
                    type="text"
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                  ></Input>
                </InputGroup>
                <InputGroup
                  className={
                    "input-lg" + (lastFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons ui-1_email-85"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email..."
                    type="text"
                    onFocus={() => setLastFocus(true)}
                    onBlur={() => setLastFocus(false)}
                  ></Input>
                </InputGroup>
                <div className="textarea-container">
                  <Input
                    cols="80"
                    name="name"
                    placeholder="Type a message..."
                    rows="4"
                    type="textarea"
                  ></Input>
                </div>
                <div className="send-button">
                  <Button
                    block
                    className="btn-round"
                    color="success"

                    href="https://www.youtube.com/watch?v=xvFZjo5PgG0&ab_channel=DeeckPeeck"

                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    Send Message
                  </Button>
                </div>
              </Col>
              
            </Row>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default LandingPage;
