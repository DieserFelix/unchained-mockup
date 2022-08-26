import { EmailOutlined, GavelOutlined } from "@material-ui/icons";
import { useState } from "react";
import { Robot } from "../api/robotInformation";
import { Button } from "./actions/Button";
import { Hint } from "./content/Hint";
import { Grid } from "./layout";
import "./ProductShowcase.css";

interface Props {
  robot: Robot;
}

const minPrice = (
  variants: {
    name: string;
    price: { value: number; currency: string; vat: boolean };
  }[],
) => {
  const variant = variants.reduce(
    (previous, current) => {
      if (current.price.value < previous.price.value) {
        return current;
      }
      return previous;
    },
    {
      price: {
        value: Number.POSITIVE_INFINITY,
        currency: "",
        vat: false,
      },
    },
  );
  return `${variant.price.currency}${variant.price.value.toFixed(2)}`;
};

const maxPrice = (
  variants: {
    name: string;
    price: { value: number; currency: string; vat: boolean };
  }[],
) => {
  const variant = variants.reduce(
    (previous, current) => {
      if (current.price.value > previous.price.value) {
        return current;
      }
      return previous;
    },
    {
      price: {
        value: Number.NEGATIVE_INFINITY,
        currency: "",
        vat: false,
      },
    },
  );
  return `${variant.price.currency}${variant.price.value.toFixed(2)}`;
};

export function ProductShowcase(props: Props) {
  const { robot } = props;
  const [variant, selectVariant] = useState<string>("");

  return (
    <div className={"showcase"}>
      <h1>{robot.name}</h1>
      <Grid>
        <div className={"specs"}>
          <span>{robot.specs.overview?.entries.weight.name}</span>
          <h2>{robot.specs.overview?.entries.weight.value}</h2>
        </div>
        <div className={"specs"}>
          <span>{robot.specs.overview?.entries.payload.name}</span>
          <br />
          <h2>{robot.specs.overview?.entries.payload.value}</h2>
        </div>
      </Grid>
      <p className="description">{robot.shortDescription}</p>
      <h3>
        {variant
          ? `${robot.variants[variant].price.currency}${robot.variants[
              variant
            ].price.value.toFixed(2)}`
          : `${minPrice(Object.values(robot.variants))}
            -
            ${maxPrice(Object.values(robot.variants))}
            `}
        <span>excl. VAT</span>
      </h3>
      <strong>Variants</strong>
      <select
        onChange={(e) => {
          selectVariant(e.target.value);
        }}
        value={variant}
      >
        <option value="">Choose an option</option>
        {Object.entries(robot.variants).map(([variantId, value]) => (
          <option key={variantId} value={variantId}>
            {value.name}
          </option>
        ))}
      </select>
      <Button
        action={() => selectVariant("")}
        context={"secondary"}
        width={"100%"}
        margin={"20px 0"}
      >
        Clear
      </Button>
      <Button context={"primary"} width={"100%"} margin={"5px 0"}>
        <EmailOutlined /> Enquire Now
      </Button>
      <Hint margin={"20px 0"}>
        <GavelOutlined />
        From 500,00 € a month with lease buy or installment.
        <div style={{ float: "right" }}>
          <strong>Learn more</strong>
        </div>
      </Hint>
    </div>
  );
}
