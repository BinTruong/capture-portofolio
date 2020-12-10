import styled from "styled-components";
import { About } from "../styles";

const FaqSection = () => {
  return (
    <FAQ>
      <h2>
        Any question <span>FAQ</span>
      </h2>
      <div className="questions">
        <h4>How do I start?</h4>
        <div className="answers">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel,
            accusamus!
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="questions">
        <h4>Daily Schedule</h4>
        <div className="answers">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel,
            accusamus!
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="questions">
        <h4>Different Payment Methods</h4>
        <div className="answers">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel,
            accusamus!
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="questions">
        <h4>What Products do you offer?</h4>
        <div className="answers">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel,
            accusamus!
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
    </FAQ>
  );
};

const FAQ = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .questions {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answers {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
