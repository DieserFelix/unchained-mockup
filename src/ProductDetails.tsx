import React, { useEffect, useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import { useParams, useResolvedPath } from "react-router-dom";
import { getRobot } from "./api/robotInformation";
import { Breadcrumbs } from "./components/content/Breadcrumbs";
import { Navigation } from "./components/content/Navigation";
import { Gallery } from "./components/gallery";
import { Container, Grid } from "./components/layout";
import { ProductShowcase } from "./components/ProductShowcase";
interface Props {}

export function ProductDetails(props: Props) {
  const params = useParams();
  const robotId = params.robotId ?? "";
  const path = useResolvedPath(robotId);
  const [maxWidth, setMaxWidth] = useState<number>(1000);

  const robot = getRobot(robotId); // usually, this would be an API request (i.e. SWR)

  useEffect(() => {
    document.title = `${robot.name} - Unchained Robotic`;
  }, [robot]);

  return (
    <Container setWidth={setMaxWidth}>
      <Breadcrumbs path={path.pathname} />
      <Navigation
        sections={["Features", "Specifications", "Downloads", "Videos"]}
      />
      <Grid>
        <div style={{ width: "380px" }}>
          <Gallery
            sources={robot.images}
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
        <ProductShowcase robot={robot} />
      </Grid>
    </Container>
  );
}
