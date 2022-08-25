import ReactImageMagnify from "react-image-magnify";
import "./App.css";
import { Gallery } from "./components/gallery/Gallery";

function App() {
  return (
    <div style={{ width: "380px" }}>
      <Gallery
        sources={[
          "/images/rg2_1.jpg",
          "/images/rg2_2.jpg",
          "/images/rg2_3.jpg",
        ]}
        generator={(source, i) => (
          <ReactImageMagnify
            key={i}
            smallImage={{
              alt: "",
              width: 380,
              height: 380,
              isFluidWidth: false,
              src: source,
            }}
            largeImage={{
              src: source,
              width: 850,
              height: 850,
            }}
            enlargedImagePosition={"over"}
          />
        )}
      />
    </div>
  );
}

export default App;
