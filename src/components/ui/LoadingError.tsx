import React from "react";

interface LoadingErrorStateProps {
  isLoading: boolean;
  error: string | null;
  loadingText?: string;
  errorPrefix?: string;
  fallbackMessage?: string;
}

const LoadingErrorState: React.FC<LoadingErrorStateProps> = ({
  isLoading,
  error,
  loadingText = "Loading services...",
  errorPrefix = "Failed to load services",
  fallbackMessage = "Displaying default services instead.",
}) => {
  if (!isLoading && !error) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center max-w-md mx-auto px-4">
        {isLoading ? (
          <>
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto mb-4"></div>
            <p className="text-gray-600">{loadingText}</p>
          </>
        ) : error ? (
          <>
            <p className="text-red-600 mb-4">
              {errorPrefix}: {error}
            </p>
            <p className="text-gray-600">{fallbackMessage}</p>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default LoadingErrorState;