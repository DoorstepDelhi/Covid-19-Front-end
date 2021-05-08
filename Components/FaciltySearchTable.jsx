import React from "react";

const FaciltySearchTable = ({
  facilitiesAll,
  facilitiesSearch,
  setFacilitiesFinal,
  setSearchFacilities,
  setFacilitiesSearch,
  setFacilityDropdown,
}) => {
  return (
    <section className="container mx-auto lg:px-4 sm:px-8 max-w-3xl">
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
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white text-center  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white text-center  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Deliverable
                  </th>
                </tr>
              </thead>
              <tbody>
                {!facilitiesSearch.length
                  ? facilitiesAll.slice(0, 5).map((service) => (
                      <tr>
                        <a
                          onClick={() => {
                            setSearchFacilities(service.name);
                            setFacilitiesSearch([]);
                            setFacilitiesFinal(service);
                            setFacilityDropdown(false);
                          }}
                        >
                          <td className="px-5 text-csenter cursor-pointer py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {service.name}
                            </p>
                          </td>
                        </a>
                        <td className="px-5 text-center py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {service.description}
                          </p>
                        </td>
                        <td className="px-5 text-center py-5 border-b border-gray-200 bg-white text-sm">
                          {service.deliver ? (
                            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                              <span
                                aria-hidden="true"
                                className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                              ></span>
                              <span className="relative">Deliverable</span>
                            </span>
                          ) : (
                            <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                              <span
                                aria-hidden="true"
                                className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                              ></span>
                              <span className="relative">Non Deliverable</span>
                            </span>
                          )}
                        </td>
                      </tr>
                    ))
                  : facilitiesSearch.slice(0, 5).map((service) => (
                      <tr>
                        <a
                          onClick={() => {
                            setSearchFacilities(service.name);
                            setFacilitiesSearch([]);
                            setFacilitiesFinal(service);
                            setFacilityDropdown(false);
                          }}
                        >
                          <td className="px-5 text-csenter cursor-pointer py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {service.name}
                            </p>
                          </td>
                        </a>
                        <td className="px-5 text-center py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {service.description}
                          </p>
                        </td>
                        <td className="px-5 text-center py-5 border-b border-gray-200 bg-white text-sm">
                          {service.deliver ? (
                            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                              <span
                                aria-hidden="true"
                                className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                              ></span>
                              <span className="relative">Deliverable</span>
                            </span>
                          ) : (
                            <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                              <span
                                aria-hidden="true"
                                className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                              ></span>
                              <span className="relative">Non Deliverable</span>
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

export default FaciltySearchTable;
