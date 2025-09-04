import { FallbackProps } from 'react-error-boundary';

function ErrorFallback(props: FallbackProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-600 text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">Oops!</h1>
        <p className="text-2xl mb-8">Something went wrong.</p>

        <p className="text-lg mb-8">
          Don&apos;t panic, it happens to the best of us. The page you are looking for might be in
          another galaxy.
        </p>

        <div className="bg-gray-800 p-4 rounded-lg shadow-lg m-8 max-w-full">
          <code className="text-green-400 whitespace-pre-wrap">{props.error?.message}</code>
        </div>

        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            onClick={props.resetErrorBoundary}
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}

export default ErrorFallback;
