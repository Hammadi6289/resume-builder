import React from "react";

const Dashboard = () => {
  //1:38:35
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <p
          className="text-2xl font-medium mb-6 bg-gradient-to-r from-slate-600 to-slate-700
        bg-clip-text text-transparent sm:hidden"
        >
          Welcome dummy user, "John Doe"
        </p>
        <div className="flex gap-4 justify-center">
          <button
            className="w-full bg-white sm:max-w-48 h-48 flex flex-col items-center
          justify-center rounded-lg gap-2 text-slate-600 border border-dashed
          border-slate-300 group hover:border-green-500 hover:shadow-lg transition-all
          duration-300 cursor-pointer"
          >
            <p
              className="text-sm group-hover:text-green-600 transition-all
            duration-300"
            >
              {" "}
              Create Resume
            </p>
          </button>

          <button
            className="w-full bg-white sm:max-w-48 h-48 flex flex-col items-center
          justify-center rounded-lg gap-2 text-slate-600 border border-dashed
          border-slate-300 group hover:border-purple-500 hover:shadow-lg transition-all
          duration-300 cursor-pointer"
          >
            <p
              className="text-sm group-hover:text-purple-600 transition-all
            duration-300"
            >
              Upload Existing Resume
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
