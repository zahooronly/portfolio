import React from "react";

interface GetMyCVButton {
  children: React.ReactNode;
}

const GetMyCV = ({ children }: GetMyCVButton) => {
  return (
    <button className="border h-12 py-1 px-3 rounded-md shadow-md">
      {children}
    </button>
  );
};

export default GetMyCV;
