import React from "react";
import { Container, Typography } from "@material-ui/core";

function Footer() {
  return (
    <div
      style={{ boxShadow: "0 -2px 5px rgba(0,0,0,.5)", background: "#333333" }}
    >
      <Container style={{ padding: "20px" }}>
        <Typography
          style={{ fontWeight: "400", textAlign: "center", color: "white" }}
        >
          Copyright &copy; 2021 Fatah. All Right Reserved.
        </Typography>
      </Container>
    </div>
  );
}

export default Footer;
