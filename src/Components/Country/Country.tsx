import { useState } from "react";
import type CountryType from "../../Type";
import "./Country.css";

export interface CountryProps {
  country: CountryType;
  handleVisitedFlag: (flag: string) => void;
}

export default function Country({
  country,
  handleVisitedFlag,
}: CountryProps) {
  const [visited, setVisited] = useState<boolean>(false);

  const handleVisited = () => {
    setVisited(!visited);
    handleVisitedFlag(country.flags.flags.png);
  };

  return (
    <div className={visited ? "visited-country" : "country"}>
      <h3>{country.name.common}</h3>

      <img
        src={country.flags.flags.png}
        alt={country.flags.flags.alt}
      />

      <div className="information">
        <p>Population: {country.capital.capital}</p>
        <p>Capital: {country.population.population}</p>
      </div>

      <button onClick={handleVisited}>
        {visited ? "visited" : "mark as read"}
      </button>
    </div>
  );
}