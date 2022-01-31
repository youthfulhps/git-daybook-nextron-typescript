import React from 'react';
import styled from 'styled-components';
import { HomeOutlined, GithubOutlined, PushpinOutlined, TeamOutlined } from '@ant-design/icons';
import Link from '@components/Common/Link';
import LinkUtils from '@utils/LinkUtils';

type LinksProps = {
  links: {
    github: string;
    blog: string;
    location: string;
    company: string;
  };
};

const StyledLinkListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  span {
    //Customize icon size
    font-size: 24px;
    margin-left: 4px;

    &:hover {
      opacity: 0.8;
    }
  }
`;

function Links({ links }: LinksProps) {
  const { github, blog, location, company } = links;

  return (
    <StyledLinkListWrapper>
      <Link href={github}>
        <GithubOutlined />
      </Link>
      <Link href={blog}>
        <HomeOutlined />
      </Link>
      <Link href={LinkUtils.getSearchedKeywordLink(location)}>
        <PushpinOutlined />
      </Link>
      <Link href={LinkUtils.getSearchedKeywordLink(company)}>
        <TeamOutlined />
      </Link>
    </StyledLinkListWrapper>
  );
}

export default Links;
