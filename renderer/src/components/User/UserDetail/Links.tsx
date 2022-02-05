import React from 'react';
import styled from 'styled-components';
import { HomeOutlined, GithubOutlined, PushpinOutlined, TeamOutlined } from '@ant-design/icons';
import Link from '@components/Common/Link';
import UserUtils from '@utils/UserUtils';

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
    color: var(--color-400);

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
      <Link href={UserUtils.getUserSearchedKeywordLink(location)}>
        <PushpinOutlined />
      </Link>
      <Link href={UserUtils.getUserSearchedKeywordLink(company)}>
        <TeamOutlined />
      </Link>
    </StyledLinkListWrapper>
  );
}

export default Links;
