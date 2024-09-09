import React, { useContext } from "react";
import styled, { keyframes, useTheme } from "styled-components";
import Flex from "../../../components/Box/Flex";
import { MenuContext } from "../context";

interface Props {
  href: string;
}

const blink = keyframes`
  0%,  100% { transform: scaleY(1); }
  50% { transform:  scaleY(0.1); }
`;

const StyledLink = styled("a")`
  display: flex;
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.lg} {
      display: none;
    }
  }
  .desktop-icon {
    width: 160px;
    display: none;
    ${({ theme }) => theme.mediaQueries.lg} {
      display: block;
    }
  }
  .eye {
    animation-delay: 20ms;
  }
  &:hover {
    .eye {
      transform-origin: center 60%;
      animation-name: ${blink};
      animation-duration: 350ms;
      animation-iteration-count: 1;
    }
  }
`;

const Logo: React.FC<React.PropsWithChildren<Props>> = ({ href }) => {
  const { linkComponent } = useContext(MenuContext);
  const isAbsoluteUrl = href.startsWith("http");
  const { isDark } = useTheme();

  const light = "https://raw.githubusercontent.com/IguanaDEX/assets/main/iguana_brand_assets/logo-light.webp";
  const dark = "https://raw.githubusercontent.com/IguanaDEX/assets/main/iguana_brand_assets/logo-dark.webp";
  let innerLogo;

  if (isDark) {
    innerLogo = (
      <>
        <img
          src="https://raw.githubusercontent.com/IguanaDEX/assets/main/iguana_brand_assets/icon.webp"
          alt="IguanaDEX logo"
          className="mobile-icon"
        />
        <img src={dark} alt="IguanaDEX logo with text" className="desktop-icon" />
      </>
    );
  } else {
    innerLogo = (
      <>
        <img
          src="https://raw.githubusercontent.com/IguanaDEX/assets/main/iguana_brand_assets/icon.webp"
          alt="IguanaDEX logo"
          className="mobile-icon"
        />
        <img src={light} alt="IguanaDEX logo with text" className="desktop-icon" />
      </>
    );
  }
  // const innerLogo = (
  //   <>
  //     <LogoIcon className="mobile-icon" />
  //     <LogoWithTextIcon className="desktop-icon" />
  //   </>
  // );

  return (
    <Flex alignItems="center">
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="IguanaDEX home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink href={href} as={linkComponent} aria-label="IguanaDEX home page">
          {innerLogo}
        </StyledLink>
      )}
    </Flex>
  );
};

export default React.memo(Logo);
