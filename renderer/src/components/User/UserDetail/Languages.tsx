import React from 'react';
import styled from 'styled-components';
import LanguageUtils from '@utils/LanguageUtils';
import Skeleton from '@components/Common/Skeleton';
import Progress from '@components/Common/Progress';

type LanguagesProps = {
  languages: any;
};

const StyledLanguages = styled.div`
  width: 100%;
`;

function Languages({ languages }: LanguagesProps) {
  if (!languages) return <Skeleton height={120} width={300} />;

  const languageInfos = LanguageUtils.getLanguageInfoList(languages);

  return (
    <StyledLanguages>
      {languageInfos.map((info) => {
        const [languageKey, value, percent, color] = info;
        return (
          <Progress
            key={languageKey}
            percent={percent}
            strokeColor={color}
            format={() => `${languageKey} (+${value})`}
            size="small"
          />
        );
      })}
    </StyledLanguages>
  );
}

export default Languages;
