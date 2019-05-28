import React from "react";
import Dinero from "dinero.js";

interface IProps {
  amount?: number;
  currency?: string;
  precision?: number;
  component?: React.ElementType<React.HTMLAttributes<HTMLDivElement>>;
}

const GlobalDinero = Dinero as any;

const ReactDineroJS: React.FC<IProps & React.HTMLProps<HTMLSpanElement>> = ({
  amount = GlobalDinero.defaultAmount,
  currency = GlobalDinero.defaultCurrency,
  precision = GlobalDinero.defaultPrecision,
  component = "span",
  ...rest
}) =>
  React.createElement(
    component,
    rest,
    Dinero({ amount, precision, currency }).toFormat()
  );

export default ReactDineroJS;
