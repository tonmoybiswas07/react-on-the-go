import type CountryType from "../../Type";
import "./Country.css";

export interface CountryProps {
  country: Promise<CountryType[]>;
}

export default function Country({ country }: CountryProps) {
  return (
    <div className="country">
      <h3>{country.name.common}</h3>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <div className="information">
        <p>Population: {country.capital.capital}</p>
        <p>Capital: {country.population.population}</p>
      </div>
    </div>
  );
}
