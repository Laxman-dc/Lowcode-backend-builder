import React from "react";

const ApiManagement = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">API groups</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          + Add API Group
        </button>
      </div>
      <div className="flex space-x-4 mb-6">
        <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600">
          Documentation
        </button>
        <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600">
          Video tutorial
        </button>
      </div>
      <div className="space-y-4">
        <div className="bg-gray-800 p-4 rounded">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">Authentication</h2>
              <span className="text-xs text-gray-500">API Group #219774</span>
              <p className="text-sm mt-2">
                This group contains API endpoints that your front-end will use
                to communicate with your Database. You can create new ones by
                clicking inside
              </p>
            </div>
            <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600">
              View
            </button>
          </div>
          <div className="mt-4 text-sm text-gray-400">3 Endpoints</div>
        </div>
        <div className="bg-gray-800 p-4 rounded">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">daw</h2>
              <span className="text-xs text-gray-500">API Group #219818</span>
              <p className="text-sm mt-2">daaw</p>
            </div>
            <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600">
              View
            </button>
          </div>
          <div className="mt-4 text-sm text-gray-400">0 Endpoints</div>
        </div>
        <div className="bg-gray-800 p-4 rounded">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">default</h2>
              <span className="text-xs text-gray-500">API Group #219789</span>
              <p className="text-sm mt-2">
                This group contains API endpoints that your front-end will use
                to communicate with your Database. You can create new ones by
                clicking inside
              </p>
            </div>
            <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600">
              View
            </button>
          </div>
          <div className="mt-4 text-sm text-gray-400">0 Endpoints</div>
        </div>
      </div>
    </div>
  );
};

export default ApiManagement;
