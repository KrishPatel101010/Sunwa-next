const Loading = () => {
  return (
    <div className="p-8 space-y-6 animate-pulse">
      <div className="h-10 bg-gray-200 rounded w-1/3"></div>
      <div className="h-64 bg-gray-200 rounded"></div>
      <div className="space-y-3">
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        <div className="h-4 bg-gray-200 rounded w-4/6"></div>
      </div>
    </div>
  );
};
export default Loading;
