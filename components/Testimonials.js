import React from "react";

import styled from "styled-components";

import NextLink from "next/link";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Wrapper = styled.div`
  padding-top: 10rem;
  h1 {
    margin-bottom: 2rem;
  }
`;

const ItemWrapper = styled.div`
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  .quote {
    font-size: 1.6rem;
    margin-bottom: 0;
  }

  @media (max-width: 650px) {
    .quote {
      font-size: 1.35rem;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .founder-section {
    margin-top: 1rem;
    padding: 1rem;
    /* display: flex; */
  }

  img {
    border-radius: 50%;
    max-height: 100px;
    max-width: 100px;
    height: auto;
    width: auto;
    margin-bottom: 0.5rem;
  }

  .name {
    font-weight: 700;
  }
`;

const Testimonials = ({ testimonials }) => {
  return (
    <Wrapper>
      <h1>What Our Portfolio Says</h1>
      <Carousel
        autoPlay={true}
        showThumbs={false}
        swipeable={true}
        interval={5000}
        transitionTime={1000}
        infiniteLoop={true}
        showStatus={false}
        showArrows={false}
      >
        {testimonials.map((testimonial, i) => (
          <ItemWrapper key={i}>
            <NextLink href={`/portfolio/${testimonial.slug}`}>
              <a>
                <p className="quote">"{testimonial.quote}"</p>
                <div className="founder-section">
                  <div>
                    <img src={testimonial.founderPhoto} alt="" />
                  </div>
                  <div>
                    <p className="name">{testimonial.founderName}</p>
                    <p className="title">
                      {testimonial.title}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </a>
            </NextLink>
          </ItemWrapper>
        ))}
      </Carousel>
    </Wrapper>
  );
};

export default Testimonials;
