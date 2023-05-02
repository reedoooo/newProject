import React, { useState, useEffect, useCallback } from "react";
import { Box, Flex, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

const Carousel = ({ images, autoPlayInterval = 5000 }) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const prevSlide = useCallback(() => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }, [current, length]);

  const nextSlide = useCallback(() => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }, [current, length]);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  const handleKeyNavigation = useCallback(
    (e) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    },
    [prevSlide, nextSlide]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyNavigation);
    const autoPlay = setInterval(nextSlide, autoPlayInterval);

    return () => {
      document.removeEventListener("keydown", handleKeyNavigation);
      clearInterval(autoPlay);
    };
  }, [handleKeyNavigation, nextSlide, autoPlayInterval]);

  const variants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      position="relative"
      className="carousel-container"
    >
      <IconButton
        onClick={prevSlide}
        icon={<ChevronLeftIcon />}
        className="carousel-navigation"
        left="0"
      />
      {images.map((image, index) => (
        <Box key={index} className="carousel-slide">
          <motion.div
            className={`carousel-image ${current === index ? "active" : ""}`}
            style={{ backgroundImage: `url(${image})` }}
            variants={variants}
            initial="enter"
            animate={current === index ? "center" : "exit"}
            transition={{ duration: 0.5 }}
          />
        </Box>
      ))}
      <IconButton
        onClick={nextSlide}
        icon={<ChevronRightIcon />}
        className="carousel-navigation"
        right="0"
      />
      <Flex position="absolute" bottom="5%" justifyContent="center" width="100%">
        {images.map((_, index) => (
          <Box
            key={index}
            onClick={() => goToSlide(index)}
            className={`carousel-pagination ${
              current === index ? "active" : ""
            }`}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default Carousel;
