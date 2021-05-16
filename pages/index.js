import react, { useEffect, useState } from "react";
import Head from "next/head";
import Hospital from "../Components/Hospital";
import Services from "../Components/Services";
import Volunteers from "../Components/Volunteers";
import axios from "axios";
import LocationSearchTable from "../Components/LocationSearchTable";
import FaciltySearchTable from "../Components/FaciltySearchTable";
import InputSection from "../Components/InputSection";
import Link from "next/link";

export default function Home() {
  const getData = async () => {
    const res = await axios.get("https://covid-19-delhi.herokuapp.com/cities");
    setLocationAll(res.data);
    const res2 = await axios.get(
      "https://covid-19-delhi.herokuapp.com/facilities/"
    );
    setFacilitiesAll(res2.data);
  };
  const locationFilter = async (e) => {
    e.preventDefault();
    const match = locationAll.filter(
      (location) =>
        location.name.toLowerCase().indexOf(searchLocation.toLowerCase()) !== -1
    );
    setLocationSearch(match);
  };
  const serviceFilter = (e) => {
    e.preventDefault();
    const match = facilitiesAll.filter(
      (service) =>
        service.name.toLowerCase().indexOf(searchFacilities.toLowerCase()) !==
        -1
    );
    setFacilitiesSearch(match);
    console.log(match, facilitiesAll);
  };

  useEffect(() => {
    getData();
  }, []);

  const [all, setAll] = useState([]);
  const [searchLocation, setSearchLocation] = useState("");
  const [locationAll, setLocationAll] = useState([]);
  const [locationSearch, setLocationSearch] = useState([]);
  const [searchFacilities, setSearchFacilities] = useState("");
  const [facilitiesAll, setFacilitiesAll] = useState([]);
  const [facilitiesSearch, setFacilitiesSearch] = useState([]);

  const [facilityDropdown, setFacilityDropdown] = useState(false);
  const [locationDropdown, setLocationDropdown] = useState(false);

  const [locationFinal, setLocationFinal] = useState();
  const [facilitiesFinal, setFacilitiesFinal] = useState();

  const [screen, setScreen] = useState("services");

  return (
    <div className="w-full mx-auto max-2- 8xl flex jutisfy-center flex-col h-screen overflow-x-hidden">
      <Head>
        <title>Covid-19 Resources</title>
      </Head>
      <section
        className="bg-black z-50 w-full"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <h1
          className="text-white text-2xl font-body py-4"
          style={{ paddingLeft: "44.2%" }}
        >
          Covid-19 Resources
        </h1>
        <div

          className="text-white font-body py-4"
          style={{ paddingRight: "2%" }}
        >
          <Link href="http://collab.covid.doctor/" >

         
            Collaborate With Us
          </Link>
        </div>
      </section>
      <InputSection
        searchLocation={searchLocation}
        searchFacilities={searchFacilities}
        setSearchLocation={setSearchLocation}
        setSearchFacilities={setSearchFacilities}
        locationFilter={locationFilter}
        serviceFilter={serviceFilter}
        setFacilityDropdown={setFacilityDropdown}
        setLocationDropdown={setLocationDropdown}
      />
      <section className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5">
        {(locationDropdown && (
          <LocationSearchTable
            locationAll={locationAll}
            locationSearch={locationSearch}
            setSearchLocation={setSearchLocation}
            setLocationFinal={setLocationFinal}
            setLocationSearch={setLocationSearch}
            setLocationDropdown={setLocationDropdown}
          />
        )) || <div></div>}
        {facilityDropdown && (
          <FaciltySearchTable
            facilitiesAll={facilitiesAll}
            facilitiesSearch={facilitiesSearch}
            setSearchFacilities={setSearchFacilities}
            setFacilitiesFinal={setFacilitiesFinal}
            setFacilitiesSearch={setFacilitiesSearch}
            setFacilityDropdown={setFacilityDropdown}
          />
        )}
      </section>
      <div className="w-full flex justify-center my-4 lg:my-8">
        <div>
          <button
            onClick={() => {
              setSearchLocation("");
              setSearchFacilities("");
              setFacilitiesFinal();
              setLocationFinal();
              setLocationDropdown(false);
              setFacilityDropdown(false);
              setLocationSearch([]);
            }}
            className="bg-gray-200 w-40 mx-2 hover:bg-gray-300 transition duration-200 text-base lg:text-lg text-black font-semibold rounded-lg px-4 lg:px-8 py-2 lg:py-4"
          >
            Clear
          </button>
          <button
            onClick={(e) => {
              setScreen("services");
            }}
            className="bg-red-600 w-40 mx-2 hover:bg-red-700 transition duration-200 text-base lg:text-lg text-white font-semibold rounded-lg px-4 lg:px-8 py-2 lg:py-4"
          >
            Search
          </button>
        </div>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 pt-4 lg:pt-24 mx-auto flex flex-wrap flex-col">
          <div className="flex mx-auto flex-wrap mb-20">
            <a
              onClick={() => setScreen("hospitals")}
              className={`sm:px-6 py-3 cursor-pointer w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center tracking-wider leading-none ${
                screen === "hospitals"
                  ? "bg-gray-100 border-indigo-500 text-indigo-500 rounded-t text-gray-900"
                  : "border-gray-200 hover:text-gray-900"
              }`}
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLineCap="round"
                strokeLineJoin="round"
                strokeWidth="2"
                className="w-5 h-5 mr-3"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              Hospitals
            </a>
            <a
              onClick={() => {
                setScreen("services");
              }}
              className={`sm:px-6 py-3 cursor-pointer w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center tracking-wider leading-none ${
                screen === "services"
                  ? "bg-gray-100 border-indigo-500 text-indigo-500 rounded-t text-gray-900"
                  : "border-gray-200 hover:text-gray-900"
              }`}
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLineCap="round"
                strokeLineJoin="round"
                strokeWidth="2"
                className="w-5 h-5 mr-3"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
              Services
            </a>
            <a
              onClick={() => setScreen("volunteers")}
              className={`sm:px-6 py-3 cursor-pointer w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center tracking-wider leading-none ${
                screen === "volunteers"
                  ? "bg-gray-100 border-indigo-500 text-indigo-500 rounded-t text-gray-900"
                  : "border-gray-200 hover:text-gray-900"
              }`}
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLineCap="round"
                strokeLineJoin="round"
                strokeWidth="2"
                className="w-5 h-5 mr-3"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="5" r="3"></circle>
                <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
              </svg>
              Volunteers
            </a>
          </div>
        </div>
      </section>
      <section className="  md:w-full flex justify-center px-4 lg:px-16 py-4">
        {screen === "hospitals" && <Hospital />}
        {screen === "services" && <Services location={locationSearch} />}
        {screen === "volunteers" && <Volunteers />}
      </section>
    </div>
  );
}
