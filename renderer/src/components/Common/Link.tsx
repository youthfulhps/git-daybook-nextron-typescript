import React from 'react';

type LinkProps = {
  href: string;
  children: React.ReactNode;
};

function Link({ href, children }: LinkProps) {
  return (
    <a href={href} target="_blank">
      {children}
    </a>
  );
}

export default Link;
