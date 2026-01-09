import React from "react";
import { Link } from "react-router-dom";
import { Settings } from "lucide-react";

function SellerProfile() {
  return (
    <div className="min-h-screen bg-base-200">
      <div className="relative p-4">
        <p className="ml-auto mr-auto text-xl font-semibold border rounded-full w-40 h-40"></p>
      </div>

      <div className="p-6 text-center">
        <p className="text-lg">Sprofile</p>

        <div className="mt-6 space-y-4">
          <Link to="/">
            <p className="text-blue-700 cursor-pointer hover:underline">
              Return
            </p>
          </Link>

          <Link to="/Login">
            <button className="rounded-md font-semibold px-4 py-2 bg-blue-100 border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white transition">
              Connexion
            </button>
          </Link>
        </div>
      </div>
      <Link to="/Settings"><button
        className="absolute border left-10 bottom-10 p-2 rounded-full"
        title="Settings"
      >
        <Settings className="w-8 h-8" />
      </button></Link>
    </div>
  );
}

export default SellerProfile;
