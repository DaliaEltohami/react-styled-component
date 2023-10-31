import React from "react";
import { HeaderSection, Logo, Nav, Image } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Button } from "./styles/Button.styled";
import { Flex } from "./styles/Flex.styled";

export default function Header() {
  return (
    <HeaderSection>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg"></Logo>
          <Button>Try It Free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <Button $color="#fff" $bg="#ff0099">
              Get Started For Free
            </Button>
          </div>
          <Image src="./images/illustration-mockups.svg"></Image>
        </Flex>
      </Container>
    </HeaderSection>
  );
}
