import React, { useContext } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Container as ContainerBase } from "components/misc/Layouts.js";
import logo from "../../images/logo3.png";
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../images/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "../../images/youtube-icon.svg";
import { ReactComponent as InstagramIcon } from "../../images/instagram-logo.svg";
import { ReactComponent as DiscordIcon } from "images/discord-icon-footer.svg";
import { AuthContext } from "../../Context/AuthContext";

const Container = tw(ContainerBase)`bg-gray-900 text-gray-100`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-24`;
const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`;
const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`;
const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`;

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`;
export default () => {
  const {user,setUser,isAuthenticated,setIsAuthenticated,isAdmin,setIsAdmin} =
  useContext(AuthContext);

  const unauthenticatedFooter = () => {
    return (
      <>
        <Link href="/">Home</Link>
        <Link href="#login">Book a Slot</Link>
        <Link href="#login">Resources</Link>
        <Link href="#letstalk">Basic Stock Market Course</Link>
        <Link href="#about">About</Link>
      </>
    );
  };
  const authenticatedFooter = () => {
    return (
      <>
        <Link href="/">Home</Link>
        <Link href="#bookaslot">Book a Slot</Link>
        <Link href="#resources">Resources</Link>
        <Link href="#letstalk">Basic Stock Market Course</Link>
        <Link href="#about">About</Link>
      </>
    );
  };
  const adminFooter = () => {
    return (
      <>
        <Link href="/">Home</Link>
        <Link href="#bookaslot">Slot Booking</Link>
        <Link href="#addresources">Add Resources</Link>
        <Link href="#userdetails">User Details</Link>
      </>
    );
  };

  const footerLinks = () => {
    if (!isAuthenticated) return unauthenticatedFooter();
    else {
      if (isAdmin) return adminFooter();
      else return authenticatedFooter();
    }
  };
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <LogoImg src={logo} />
          </LogoContainer>
          <LinksContainer>{footerLinks()}</LinksContainer>
          <SocialLinksContainer>
            {/* <SocialLink href="https://facebook.com" target={"_blank"}>
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://twitter.com" target={"_blank"}>
              <TwitterIcon />
            </SocialLink> */}
            <SocialLink
              href="https://www.youtube.com/channel/UCSmPXl_J3u9AmRUyveXptPw/featured"
              target={"_blank"}
            >
              <YoutubeIcon />
            </SocialLink>
            <SocialLink href="https://discord.gg/F6r2DYd6Z6" target={"_blank"}>
              <DiscordIcon />
            </SocialLink>
            <SocialLink
              href="https://instagram.com/capibulladvisors?utm_medium=copy_link"
              target={"_blank"}
            >
              <InstagramIcon />
            </SocialLink>
          </SocialLinksContainer>
          <CopyrightText>
            Made with ❤️ by Team Rivets &copy; Copyright 2022, CapiBull Inc. All
            Rights Reserved.
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};
