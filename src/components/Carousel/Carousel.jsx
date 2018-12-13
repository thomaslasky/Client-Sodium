import React, { Component } from "react";
import "./Carousel.css";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

import withText from "../../withText.hoc";
class CarouselHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
    this.length = 3;
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  componentDidMount() {
    this.setState();
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === this.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? this.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
    const items = [
      {
        src: this.props.imageHomeCarousel1
          ? this.props.imageHomeCarousel1
          : null,
        altText: this.props.captionHomeCarousel1,
        caption: this.props.captionHomeCarousel1
      },
      {
        src: this.props.imageHomeCarousel2
          ? this.props.imageHomeCarousel2
          : null,
        altText: this.props.captionHomeCarousel2,
        caption: this.props.captionHomeCarousel2
      },
      {
        src: this.props.imageHomeCarousel3
          ? this.props.imageHomeCarousel3
          : null,
        altText: this.props.captionHomeCarousel3,
        caption: this.props.captionHomeCarousel3
      }
    ];
    if (items[0].src == null || items[1].src == null || items[2].src == null) {
      return null;
    }
    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption
            captionText={item.caption}
            captionHeader={item.caption}
          />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </Carousel>
    );
  }
}

export default withText(CarouselHome);
