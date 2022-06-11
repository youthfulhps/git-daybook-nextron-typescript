import React from 'react';
import styled from 'styled-components';
import { HomeOutlined, GithubOutlined, PushpinOutlined, ShopOutlined } from '@ant-design/icons';
import Link from '@components/common/Link';
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
    color: var(--color-700);

    &:hover {
      opacity: 0.6;
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
        <ShopOutlined />
      </Link>
    </StyledLinkListWrapper>
  );
}

export default Links;
