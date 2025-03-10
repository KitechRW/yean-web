import React from 'react';
import { Plus, Search } from 'lucide-react';
import AddBanner from '../_Partials/ManageBanners/AddBanner';
import ViewBanner from '../_Partials/ManageBanners/ViewBanner';

interface Banner {
  id: number;
  title: string;
  url: string;
  section: string;
  path: string;
  image: string;
  created_at?: string;
  updated_at?: string;
}

const BannerActivity: React.FC = () => {
  const [banners, setBanners] = React.useState<Banner[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string>('');
  const [filterValue, setFilterValue] = React.useState('');
  const [isRetrying, setIsRetrying] = React.useState(false);

  // Fetch banners on component mount
  const fetchBanners = async () => {
    try {
      setIsLoading(true);
      setError('');

      const response = await fetch('/api/banners', {
        headers: {
          Accept: 'application/json',
          'Cache-Control': 'no-cache',
        },
      });

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Banner service is currently unavailable');
        }
        if (response.status === 401) {
          throw new Error('Please log in to access banners');
        }
        if (response.status === 403) {
          throw new Error(
            'You do not have permission to access banners',
          );
        }
        throw new Error(
          `Failed to fetch banners (Status: ${response.status})`,
        );
      }

      const data = await response.json();
      setBanners(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Failed to load banners',
      );
    } finally {
      setIsLoading(false);
      setIsRetrying(false);
    }
  };

  React.useEffect(() => {
    fetchBanners();
  }, []);

  // Filter banners based on search input
  const filteredBanners = React.useMemo(() => {
    return banners.filter(banner =>
      banner.title?.toLowerCase().includes(filterValue.toLowerCase()),
    );
  }, [banners, filterValue]);

  const handleAddBanner = (banner: Banner) => {
    setBanners(prev => [...prev, banner]);
  };

  const handleEditBanner = async (banner: Banner) => {
    try {
      const response = await fetch(`/api/banners/${banner.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(banner),
      });

      if (!response.ok) {
        throw new Error('Failed to update banner');
      }

      const updatedBanner = await response.json();
      setBanners(prev =>
        prev.map(item =>
          item.id === updatedBanner.id ? updatedBanner : item,
        ),
      );
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Failed to update banner',
      );
    }
  };

  const handleDeleteBanner = async (id: number) => {
    try {
      const response = await fetch(`/api/banners/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete banner');
      }

      setBanners(prev => prev.filter(item => item.id !== id));
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Failed to delete banner',
      );
    }
  };

  const handleRetry = () => {
    setIsRetrying(true);
    fetchBanners();
  };

  if (isLoading && !isRetrying) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-green-600"></div>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-grow flex-col items-center bg-white px-4 py-4 md:px-8 md:pl-6">
      {error && (
        <div className="mb-4 w-full rounded-md bg-red-50 p-4 text-red-800">
          <div className="flex items-center justify-between">
            <span>{error}</span>
            <button
              onClick={handleRetry}
              disabled={isRetrying}
              className="rounded-md bg-white px-3 py-1 text-sm font-medium text-red-600 hover:bg-red-50 disabled:opacity-50"
            >
              {isRetrying ? 'Retrying...' : 'Retry'}
            </button>
          </div>
        </div>
      )}

      <div className="flex w-full justify-between space-x-6 bg-white md:space-x-12">
        <div className="group relative flex flex-grow items-center">
          <Search className="absolute left-2 h-5 w-5 text-slate-400" />
          <input
            value={filterValue}
            onChange={e => setFilterValue(e.target.value)}
            className="peer w-full appearance-none rounded-md py-2 pl-10 text-sm leading-6 text-slate-900 placeholder-slate-400 shadow-sm ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-green-500"
            type="text"
            placeholder="Filter banners..."
          />
        </div>

        <AddBanner onAdd={banner => handleAddBanner(banner as any)}>
          <button className="group flex items-center rounded-md bg-green-500 px-8 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-600">
            <Plus className="mr-1 h-5 w-5" />
            <span>New</span>
          </button>
        </AddBanner>
      </div>

      <ul className="grid w-full grid-cols-1 gap-4 py-4 text-sm leading-6 sm:grid-cols-2 md:py-8 lg:grid-cols-3 xl:grid-cols-4">
        {filteredBanners.map(banner => (
          <ViewBanner
            key={banner.id}
            data={banner as any}
            onEdit={() => handleEditBanner(banner)}
            onDelete={handleDeleteBanner}
          />
        ))}

        <AddBanner onAdd={banner => handleAddBanner(banner as any)}>
          <li className="flex">
            <button className="group flex w-full flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 p-3 text-sm font-medium leading-6 text-slate-900 hover:border-green-500 hover:border-solid hover:bg-white hover:text-green-500">
              <Plus className="mb-1 h-6 w-6 text-slate-400 group-hover:text-green-500" />
              New Banner
            </button>
          </li>
        </AddBanner>
      </ul>
    </div>
  );
};

export default BannerActivity;
