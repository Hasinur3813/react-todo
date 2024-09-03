import React from "react";

const AddTodo = () => {
  return (
    <div className="mt-10 lg:mt-20">
      <button
        className="hover:bg-slate-300 duration-200 text-center border w-full border-pColor p-2 lg:px-4 lg:py-3 rounded-lg bg-slate-200 text-lg shadow-md text-slate-700"
        type="button"
      >
        Click to add new Todo
      </button>

      <hr className="mt-12 mb-3 text-pColor rounded-lg" />
    </div>
  );
};

export default AddTodo;
