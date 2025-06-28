// src/pages/ErrorPage.jsx
import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
        Oops!
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-red-500 mb-8">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}