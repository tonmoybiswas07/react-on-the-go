import { use } from "react";
import type CountryType from "../../Type";
import Country from "../Country/Country";
import "./Countries.css";

export interface CountriesProps {
  CountriesPromise: Promise<CountryType[]>;
}

export default function Countries({ CountriesPromise }: CountriesProps) {
  const countries = use(CountriesPromise);
  console.log(countries);

  return (
    <div>
      <h2>Countries:{countries.length}</h2>
      <div className="countries">
        {countries.map((country) => (
          <Country key={country.ccn3.ccn3} country={country}></Country>
        ))}
      </div>
    </div>
  );
}
