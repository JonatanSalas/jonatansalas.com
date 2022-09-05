import {
  Button,
  Container,
  Navbar,
  Text,
  Grid,
  Avatar,
  Spacer,
  Link,
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hi there 👋! I'm Jonatan Salas</title>
      </Head>
      <Navbar isBordered variant="sticky">
        <Navbar.Brand>
          <Text
            h3
            b
            css={{
              textGradient: "45deg, $blue600 -20%, #00D2B8 50%",
              marginRight: 8,
            }}
          >
            Jonatan Salas
          </Text>
        </Navbar.Brand>
        <Navbar.Content>
          <Navbar.Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/JonatanSalas"
          >
            <FontAwesomeIcon size="lg" icon={faGithub} />
          </Navbar.Link>
          <Navbar.Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/jonatansalas"
          >
            <FontAwesomeIcon size="lg" icon={faLinkedinIn} />
          </Navbar.Link>
          <Navbar.Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/jonatan_salas"
          >
            <FontAwesomeIcon size="lg" icon={faTwitter} />
          </Navbar.Link>
          <Navbar.Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/jonatanesalas"
          >
            <FontAwesomeIcon size="lg" icon={faInstagram} />
          </Navbar.Link>
        </Navbar.Content>
      </Navbar>
      <Container>
        <Grid.Container
          direction="row"
          justify="center"
          alignItems="center"
          alignContent="center"
        >
          <Grid xs={12}>
            <Spacer y={3} />
          </Grid>
          <Grid xs={12} sm={12} md={9.5}>
            <Grid.Container
              direction="row"
              justify="center"
              alignItems="center"
              alignContent="center"
            >
              <Grid xs={12}>
                <Text h1>Hi there 👋!</Text>
              </Grid>
              <Grid xs={12}>
                <Text h1>
                  I'm{" "}
                  <Text
                    span
                    weight="bold"
                    css={{
                      textGradient: "45deg, $blue600 -20%, #00D2B8 50%",
                      marginLeft: 8,
                    }}
                  >
                    Jonatan Salas
                  </Text>
                  , an entrepreneur helping startups with
                  <Text
                    span
                    weight="bold"
                    css={{
                      textGradient: "45deg, $blue600 -20%, #00D2B8 50%",
                      marginRight: 8,
                      marginLeft: 8,
                    }}
                  >
                    BlackBox Vision
                  </Text>
                  in Buenos Aires, working on the next-generation digital
                  products.
                </Text>
              </Grid>
            </Grid.Container>
          </Grid>
          <Grid xs={12} sm={12} md={2.5}>
            <Avatar
              src="/images/profile.jpeg"
              css={{
                size: "$100",
                background:
                  "linear-gradient(45deg, $blue600 -20%, #00D2B8 50%)",
              }}
              color="gradient"
              bordered
            />
          </Grid>
          <Grid xs={12}>
            <Grid.Container direction="row">
              <Grid xs={12}>
                <Spacer y={2} />
              </Grid>
              <Grid xs={12}>
                <Text h4>
                  I've +10 years of 🏗️ building digital products for great
                  startups and companies around the 🌎. After a long running
                  period as employee I decided to quit and build my own company
                  with my very best friend. About 4 years ago I funded BlackBox
                  Vision, a boutique Product Studio, that works with
                  entrepreneurs, startups and companies helping them to build
                  truly amazing digital products.
                </Text>
              </Grid>
              <Grid xs={12}>
                <Text h4>
                  I consider myself a truly nerd 🤓. I've been a ✨ pioneer ✨
                  in the usage of React, React Native, Next.js, Remix.run,
                  Docker, K8S . I 💖 to understand how things work on the deeper
                  levels so I spend time taking a look at the source code of the
                  libraries I use (maybe a bit crazy 🤪).
                </Text>
              </Grid>
              <Grid xs={12}>
                <Text h4>
                  In my spare time, I like to go to explore the wild ⛰️. I also
                  love spending quality time with my family 👨‍👩‍👦 and friends.
                </Text>
              </Grid>
              <Grid xs={12}>
                <Spacer y={2} />
              </Grid>
              <Grid xs={12}>
                <Link href="mailto:jonatan.salas.js@gmail.com?subject=Hello!">
                  <Button
                    animated
                    ripple
                    shadow
                    auto
                    color="gradient"
                    size="xl"
                    css={{
                      background:
                        "linear-gradient(45deg, #00D2B8 -0%, $blue600 50%)",
                    }}
                  >
                    Let's get in Touch
                  </Button>
                </Link>
              </Grid>
              <Grid xs={12}>
                <Spacer y={4} />
              </Grid>
            </Grid.Container>
          </Grid>
        </Grid.Container>
      </Container>
    </>
  );
}
