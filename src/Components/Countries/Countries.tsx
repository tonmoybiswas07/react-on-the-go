import { use, useState } from "react";
import type CountryType from "../../Type";
import Country from "../Country/Country";
import "./Countries.css";

export interface CountriesProps {
  CountriesPromise: Promise<CountryType[]>;
}

export default function Countries({ CountriesPromise }: CountriesProps) {
  const countries = use(CountriesPromise);
  console.log(countries);

  const [visitedFlag, setVisitedFlag] = useState<string[]>([]);

  const handleVisitedFlag = (flag: string): void => {
    if (visitedFlag.includes(flag)) {
      
        const remainigFlags= visitedFlag.filter(f=>f!==flag)
        setVisitedFlag(remainigFlags)
    } else {
      const newVisitedFlags = [...visitedFlag, flag];
      setVisitedFlag(newVisitedFlags);
    }
  };

  return (
    <div>
      <h2>Countries:{countries.length}</h2>
      <h4>Visited Flags:{visitedFlag.length}</h4>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.ccn3.ccn3}
            country={country}
            handleVisitedFlag={handleVisitedFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
}
