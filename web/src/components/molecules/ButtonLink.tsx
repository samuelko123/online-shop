import React, { ReactNode } from "react";
import { useNavigate } from "react-router";

import { Button } from "../atoms/Button";

export const ButtonLink = ({
  href,
  children,
}: {
  href: string,
  children: ReactNode,
}) => {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate(href)} role="link">
      {children}
    </Button>
  );
};
