import DefaultApi from 'apis/restful';
import { useRouter } from 'next/router';
import React from 'react';

export interface ISearchbar {
  recentSearches: string[];
  articles: any[];
  books: any[];
}

export const defaultValue: Readonly<ISearchbar> = {
  recentSearches: [],
  articles: [],
  books: [],
};

export const SearchbarContext =
  React.createContext<ISearchbar>(defaultValue);
export const useSearchbar = () => {
  return React.useContext(SearchbarContext);
};

const SearchbarProvider = ({ children }: any) => {
  const [articles, setArticles] = React.useState<any[]>([]);
  const [books, setBooks] = React.useState<any[]>([]);
  const {
    query: { q },
  } = useRouter();
  const [recentSearches, setRecentSearches] = React.useState<
    string[]
  >([]);

  React.useEffect(() => {
    const search = (q as string) || '';
    if (search.trim().length) {
      setRecentSearches(prev =>
        Array.from(new Set([search, ...prev].slice(0, 6))),
      );
    }
  }, [q]);

  React.useEffect(() => {
    const search = (q as string) || '';
    if (search.trim()) {
      DefaultApi.OpenRoute.postRoute('/api/search', { search }).then(
        response => {
          if (response) {
            const data = response.data || {};
            setArticles(data.articles || []);
            setBooks(data.books || []);
          }
        },
      );
    }
  }, [q]);

  const value = React.useMemo(() => {
    return {
      recentSearches,
      articles,
      books,
    };
  }, [articles, books, recentSearches]);

  return (
    <SearchbarContext.Provider value={value}>
      {children}
    </SearchbarContext.Provider>
  );
};

export default SearchbarProvider;
