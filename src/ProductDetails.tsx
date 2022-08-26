import React, { useEffect, useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import { useParams, useResolvedPath } from "react-router-dom";
import { getRobot } from "./api/robotInformation";
import { Breadcrumbs } from "./components/content/Breadcrumbs";
import { Description } from "./components/content/Description";
import { Navigation } from "./components/content/Navigation";
import { Section } from "./components/content/Section";
import { FeatureList } from "./components/FeatureList";
import { Gallery } from "./components/gallery";
import { Container, Grid } from "./components/layout";
import { ProductShowcase } from "./components/ProductShowcase";
import { Table } from "./components/table/Table";

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
      <Section title="Features">
        <Grid>
          <Description width="40%">
            {robot.description.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </Description>
          <FeatureList features={robot.features} />
        </Grid>
      </Section>
      <Section title="Specifications">
        {Object.values(robot.specs).map(({ title, entries }, i) => (
          <Table
            key={i}
            title={title}
            columns={2}
            entries={Object.values(entries)}
          />
        ))}
      </Section>
      <Section title="Downloads">
        <Grid>
          {robot.downloads.map(({ icon, title, description }, i) => (
            <Grid key={i}>
              <img width="56px" height="80px" src={icon} alt={icon} />
              <p>
                <strong>{title}</strong>
                <br />
                {description}
              </p>
            </Grid>
          ))}
        </Grid>
      </Section>
      <Section title="Videos">
        <Grid>
          {robot.videos.map((url, i) => (
            <video
              key={i}
              src={url}
              controls={true}
              autoPlay={false}
              width={`${maxWidth / 2 - 25}px`}
            />
          ))}
        </Grid>
      </Section>
    </Container>
  );
}
