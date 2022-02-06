import React from 'react';
import styled, { css } from 'styled-components';
import { Dropdown as AntdDropdown, DropDownProps } from 'antd';
import { DownOutlined } from '@ant-design/icons';

type DropdownProps = {
  children: React.ReactNode;
} & Pick<DropDownProps, 'overlay'>;

const StyledDropdown = styled(AntdDropdown)`
  padding: var(--size-300);
`;

function Dropdown({ overlay, children }: DropdownProps) {
  return (
    <StyledDropdown overlay={overlay}>
      <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        {children} <DownOutlined />
      </a>
    </StyledDropdown>
  );
}

export default Dropdown;
