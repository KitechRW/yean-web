import { useNavbar } from 'modules/contexts/NavbarContext';
import { useRouter } from 'next/router';

export default function RecentPages({ onClickPage }) {
  const { push } = useRouter();
  const { recentPages } = useNavbar();
  if (recentPages.length <= 1) {
    return null;
  }

  return (
    <div className="mb-3 last:mb-0">
      <div className="text-xs font-semibold text-slate-400 uppercase px-2 mb-2">
        Recent pages
      </div>
      <ul className="text-sm">
        {recentPages.map(element => {
          const arr = element.split('/');
          const lastIndex = arr.length - 1;

          if (element.startsWith('/searches')) {
            return null;
          }

          return (
            <li key={element}>
              <button
                className="flex items-center p-2 text-slate-800 hover:text-white hover:bg-brand-green rounded group"
                onClick={() => {
                  push(element);
                  onClickPage();
                }}
              >
                <svg
                  className="w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 0H2c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h8l5-5V1c0-.6-.4-1-1-1zM3 2h10v8H9v4H3V2z" />
                </svg>
                <span>
                  <span className="font-medium text-slate-800 group-hover:text-white capitalize">
                    {arr[1] || 'Home'}
                  </span>{' '}
                  - Page{' '}
                  {lastIndex > 2
                    ? `/ … / ${arr[lastIndex].replace(/-/g, ' ')}`
                    : arr[lastIndex].replace(/-/g, ' ')}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
