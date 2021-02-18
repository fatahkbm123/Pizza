import React from "react";
import { Container, Typography } from "@material-ui/core";

function Footer() {
  return (
    <div style={{ boxShadow: "0 0 5px #3F51B5" }}>
      <Container style={{ padding: "20px" }}>
        <Typography style={{ fontWeight: "400", textAlign: "center" }}>
          Copyright &copy; 2021 Fatah. All Right Reserved.
        </Typography>
      </Container>
    </div>
  );
}

export default Footer;
