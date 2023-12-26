import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userId } = useParams();
  return (
    <>
      <div className="bg-slate-700 text-red-700 text-3xl p-4 justify-normal text-center">
        User:{userId}
      </div>
      ;
    </>
  );
}

export default User;
