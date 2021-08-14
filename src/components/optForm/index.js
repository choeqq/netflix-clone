import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Container, Input, Button, Text, Break } from "./styles/optForm";

export default function OptForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

OptForm.Input = function OptFromInput({ ...restProps }) {
  return <Input {...restProps} />;
};

OptForm.Button = function OptFromButton({ to, children, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Button {...restProps}>
        {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
      </Button>
    </ReactRouterLink>
  );
};

OptForm.Text = function OptFromText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
OptForm.Break = function OptFromBreak({ ...restProps }) {
  return <Break {...restProps} />;
};
