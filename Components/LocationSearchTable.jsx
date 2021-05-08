import React from "react";

const LocationSearchTable = ({
  locationAll,
  locationSearch,
  setSearchLocation,
  setLocationSearch,
  setLocationFinal,
  setLocationDropdown,
}) => {
  return (
    <section className="container mx-auto max-h-7xl lg:px-4 sm:px-8 max-w-3xl">
      <div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white text-center  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    City
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white text-center  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    State
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white text-center  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Verified
                  </th>
                </tr>
              </thead>
              <tbody>
                {!locationSearch.length
                  ? locationAll.slice(0, 5).map((location) => (
                      <tr>
                        <a
                          onClick={() => {
                            setSearchLocation(location.name);
                            setLocationSearch([]);
                            setLocationFinal(location);
                            setLocationDropdown(false);
                          }}
                        >
                          <td className="px-5 text-csenter cursor-pointer py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {location.name}
                            </p>
                          </td>
                        </a>
                        <td className="px-5 text-center py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {location?.state?.name}
                          </p>
                        </td>
                        <td className="px-5 text-center py-5 border-b border-gray-200 bg-white text-sm">
                          {location.verified ? (
                            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                              <span
                                aria-hidden="true"
                                className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                              ></span>
                              <span className="relative">Verified</span>
                            </span>
                          ) : (
                            <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                              <span
                                aria-hidden="true"
                                className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                              ></span>
                              <span className="relative">Not Verified</span>
                            </span>
                          )}
                        </td>
                      </tr>
                    ))
                  : locationSearch.slice(0, 5).map((location) => (
                      <tr>
                        <a
                          onClick={() => {
                            setSearchLocation(location.name);
                            setLocationSearch([]);
                            setLocationFinal(location);
                            setLocationDropdown(false);
                          }}
                        >
                          <td className="px-5 text-csenter cursor-pointer py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {location.name}
                            </p>
                          </td>
                        </a>
                        <td className="px-5 text-center py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {location?.state?.name}
                          </p>
                        </td>
                        <td className="px-5 text-center py-5 border-b border-gray-200 bg-white text-sm">
                          {location.verified ? (
                            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                              <span
                                aria-hidden="true"
                                className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                              ></span>
                              <span className="relative">Verified</span>
                            </span>
                          ) : (
                            <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                              <span
                                aria-hidden="true"
                                className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                              ></span>
                              <span className="relative">Not Verified</span>
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSearchTable;
