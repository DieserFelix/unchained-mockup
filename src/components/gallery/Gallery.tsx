import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Thumbnails } from ".";
import "./Gallery.css";

interface Props {
  sources: string[];
  generator: (source: string, index: number) => React.ReactNode;
  thumbWidth?: number;
}

export function Gallery(props: Props) {
  const { sources, generator } = props;
  const thumbWidth = props.thumbWidth ?? 75;
  return (
    <Slider
      dots={true}
      autoplay={false}
      slidesToShow={1}
      arrows={false}
      customPaging={(i) => {
        return (
          <img
            draggable={false}
            src={sources[i]}
            width={`${thumbWidth}px`}
            height={`${thumbWidth}px`}
            alt={sources[i]}
          />
        );
      }}
      appendDots={(dots) => <Thumbnails>{dots}</Thumbnails>}
    >
      {sources.map((source, i) => generator(source, i))}
    </Slider>
  );
}
