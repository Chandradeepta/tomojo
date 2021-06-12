import React from "react";
import Carousel from "react-multi-carousel";
import { Adjust, ArrowRight } from "@material-ui/icons";
import { Box } from "@material-ui/core";

const CustomDot = ({ onMove, index, onClick, active }) => {
  return (
    <li className={active ? "active" : "inactive"} onClick={() => onClick()}>
      <Adjust fontSize="small" />
    </li>
  );
};

export default function AutoSwipe(props) {
  const { showDots, showArrows, xl, lg, md, sm } = props;
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: xl,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: lg,
      paritialVisibilityGutter: 160
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: md,
      paritialVisibilityGutter: 160
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: sm,
    },
  };
  return (
    <Box width="100%">
      <Carousel
        responsive={responsive}
        infinite
        showDots={showDots}
        arrows={showArrows}
        customDot={<CustomDot />}
        itemClass="image-class"
      >
        {props.children}
      </Carousel>
    </Box>
  );
}
