import React from "react";

const CreateAdmin = () => {
  return (
    <div className="flex flex-col w-full m-auto">
      <div className="flex flex-col *:flex *:flex-row *:justify-between gap-4 bg-neutral-300 p-8 rounded-xl w-4/12 m-auto shadow-xl">
      <h1 className="font-bold text-2xl">Create Subject</h1>
        <div className="flex *:grow *:basis-0">
          <h2>Subject Title</h2>
          <input type="text" className="border" />
        </div>
        <div className="flex *:grow *:basis-0">
          <h2>Description</h2>
          <input type="text" className="border"/>
        </div>
        <div className="flex *:grow *:basis-0">
          <h2>Image</h2>
          <input type="file" className="file-input" />
        </div>
        <div className="flex gap-4 *:grow *:basis-0 *:text-center *:p-4">
            <a href="#" className="bg-green-800 text-white font-bold">Create</a>
            <a href="/admin/subjects" className="bg-red-600 font-bold">Cancel</a>
        </div>
      </div>
    </div>
  );
};

export default CreateAdmin;
