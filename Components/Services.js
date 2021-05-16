import React, { useEffect, useState } from "react";
import axios from "axios";
import { SpinnerCircular } from "spinners-react";
import TimeAgo from "react-timeago";
import ReactTooltip from "react-tooltip";

const Services = ({ facility, location }) => {
  const [loading, setLoading] = useState(true);
  const [all, setAll] = useState([]);
  const [search, setSearch] = useState([]);

  const getData = async () => {
    if (location && location.length) {
      const { data } = await axios.get(
        "https://covid-19-delhi.herokuapp.com/services",
        { params: { city: location[0].name } }
      );
      console.log(data);
      setAll(data);
    } else {
      const { data } = await axios.get(
        "https://covid-19-delhi.herokuapp.com/services"
      );
      console.log(data);
      setAll(data);
    }

    setLoading(false);
  };

  useEffect(() => {
    console.log(location);
    getData();
  }, [location]);

  return (
    <>
      {loading && <SpinnerCircular color="#ff0000" enabled={loading} />}

      <table className="min-w-full leading-normal h-full">
        <thead className="p-16 border-2 ">
          <tr className="py-32">
            {/* <th
              scope="col"
              class="text-gray-600 font-semibold uppercase py-2 border-r border-gray-300 px-3"
            >
              Name
            </th> */}
            <th
              scope="col"
              class="text-gray-600 font-semibold uppercase py-2 border-r border-gray-300  px-3"
            >
              Mobile
            </th>
            <th
              scope="col"
              class="text-gray-600 font-semibold uppercase py-2 border-r border-gray-300  px-3"
            >
              Address
            </th>
             <th
              scope="col"
              class="text-gray-600 font-semibold uppercase py-2 border-r border-gray-300  px-3"
            >
              Facilities List
            </th>
            <th
              scope="col"
              class="text-gray-600 font-semibold uppercase py-2 border-r border-gray-300  px-3 whitespace-nowrap"
            >
              Updated At
            </th>
            <th
              scope="col"
              class="text-gray-600 font-semibold uppercase py-2 border-r border-gray-300  px-3 max-w-md"
            >
              Verified
            </th>
            <th
              scope="col"
              class="text-gray-600 font-semibold max-w-xs uppercase py-2 border-r border-gray-300 px-3 "
            >
              Important note
            </th>
          </tr>
        </thead>
        <ReactTooltip place="top" effect="solid" />
        <tbody className="text-gray-600">
          {(all.length > 0 &&
            all.map((data) => (
              <tr className="border-2 border-t-gray-400">
                {/* <td className="  text-center py-2 border-r border-gray-300 whitespace-nowrap  px-3">
                      {data.contact_person}
                    </td> */}

                <td
                  data-tip={data.contact_person || "Contact"}
                  className="  text-center py-2 border-r border-gray-300 px-3"
                >
                  <a href={`tel:${data.mobile}`}>{data.mobile}</a>
                </td>
                <td className="  text-center max-w-sm py-2 border-r border-gray-300 px-3">
                  {data.address}
                </td>

                 <td className="  text-center max-w-sm py-2 border-r border-gray-300 px-3">
                      {data.cities_list.map((city) => (
                        <span className="flex flex-wrap justify-center leading-tight font-semibold py-1 px-3 text-sm">
                          {city}
                        </span>
                        ))}
                    </td>
                <td className="  text-center py-2 border-r border-gray-300">
                 {data.facilities_list.map((facility) => (
                        <span className="flex flex-wrap justify-center leading-tight font-semibold py-1 px-3 text-sm">
                          {facility}
                        </span>
                        ))}

                </td>
                <td className="  text-center py-2 border-r border-gray-300 px-3 whitespace-nowrap">
                  <TimeAgo date={data.updated_at} />
                </td>
                <td
                  className={`text-center py-2 border-r border-gray-300 whitespace-nowrap px-3`}
                >
                  <span
                    className={`${
                      data.verified
                        ? "bg-green-200 bg-opacity-50 text-green-900 leading-tight font-semibold rounded-full py-1 px-3 text-sm"
                        : "bg-red-200 bg-opacity-50 text-red-900 leading-tight font-semibold rounded-full py-1 px-3 text-sm"
                    }`}
                  >
                    {data.verified ? `Verified` : `Not Verified`}
                  </span>
                </td>
                <td className="  text-center py-2 border-r max-w-sm border-gray-300 text-xs px-3">
                  {data.note}
                </td>
              </tr>
            ))) ||
            (!loading && (
              <h1 className="text-center text-red-500"> Coming soon...</h1>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default Services;
