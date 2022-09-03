import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Pagination = ({
  currentPage = 1,
  pageCount = 1,
  setPageNumber,
}: {
  currentPage: number;
  pageCount: number;
  setPageNumber: (page: number) => void;
}) => {
  const handleNextPage = () => {
    setPageNumber(currentPage + 1);
  };
  const navTo = (pageNumber: number) => {
    setPageNumber(pageNumber);
  };
  const handlePrevPage = () => {
    setPageNumber(currentPage - 1);
  };

  if (pageCount <= 1) {
    return null;
  }

  return (
    <div className="cursor-pointer flex">
      <button
        disabled={currentPage <= 1}
        onClick={handlePrevPage}
        className="disabled:cursor-not-allowed disabled:opacity-50 flex items-center space-x-1 py-2 px-3 text-gray-500 bg-white rounded-l border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        <NavigateBeforeIcon />
        <span>Previous</span>
      </button>
      {new Array(pageCount || 1).fill(0).map((element, index) => (
        <button
          key={index + 'paginationKey'}
          onClick={() => {
            navTo(index + 1);
          }}
          className={`flex flex-col justify-center items-center ${
            index + 1 === currentPage
              ? 'py-2 px-3 text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
              : 'py-2 px-3 text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
          }`}
        >
          <span>{index + 1}</span>
        </button>
      ))}
      <button
        disabled={currentPage >= pageCount}
        onClick={handleNextPage}
        className="disabled:cursor-not-allowed disabled:opacity-50 flex items-center py-2 px-3 text-gray-500 bg-white rounded-r border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        <span>Next</span> <NavigateNextIcon />
      </button>
    </div>
  );
};

export default Pagination;
