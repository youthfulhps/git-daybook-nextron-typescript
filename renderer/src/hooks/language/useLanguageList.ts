import { useEffect, useState, useMemo } from 'react';
import { getUserLanguageList } from '@apis/user';
import { useQuery } from 'react-query';
import { AxiosResponse, AxiosError } from 'axios';
import LanguageUtils from '@utils/LanguageUtils';

const useLanguageList = (userId: string) => {
  const {
    data: languages,
    isError,
    isLoading,
  } = useQuery<any[], AxiosError>(['userLanguageList', userId], () => getUserLanguageList(userId));

  const totalLanguageList = useMemo(() => {
    const languageList = languages.map((language) => language.data);

    const mergedLanguageList = LanguageUtils.getMergedLanguageList(languageList);
    return LanguageUtils.getSortedLanguageList(mergedLanguageList);
  }, [languages]);

  return { totalLanguageList, isError, isLoading };
};

export default useLanguageList;
