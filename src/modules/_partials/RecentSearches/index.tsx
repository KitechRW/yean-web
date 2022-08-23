import { useSearchbar } from 'modules/contexts/SearchbarContext';
import { useRouter } from 'next/router';

export default function RecentSearches({ onClickSearch }) {
  const { recentSearches } = useSearchbar();
  const { push } = useRouter();

  if (!recentSearches.length) {
    return null;
  }
  return (
    <div className="mb-3 last:mb-0">
      <div className="text-xs font-semibold text-slate-400 uppercase px-2 mb-2">
        Recent searches
      </div>
      <ul className="text-sm">
        {recentSearches.map(element => {
          return (
            <li key={element}>
              <button
                className="flex items-center p-2 text-slate-800 hover:text-white hover:bg-brand-green rounded group"
                onClick={() => {
                  push(`/searches?q=${element}`);
                  onClickSearch();
                }}
              >
                <svg
                  className="w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
                </svg>
                <span>{element}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
