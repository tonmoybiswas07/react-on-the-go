import { Suspense } from "react";
import type CountryType from "./Type";
import Countries from "./Components/Countries/Countries";



const CountriesPromise = async():Promise<CountryType[]>=>{
  const res = await fetch("https://openapi.programming-hero.com/api/all")
  const data =await res.json()
  return data.countries;
}
function App() {
  

  return (
    <>
      <h2>react on the project start</h2>

      <Suspense fallback={<p>loading</p>}>
    <Countries CountriesPromise={CountriesPromise()}></Countries>

      </Suspense>

    </>
  )
}

export default App
