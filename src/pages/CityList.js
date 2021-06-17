import React, { useEffect, useState } from 'react'
import CityService from "../services/cityService";
import { Dropdown, Select } from 'semantic-ui-react';

export default function CityList() {

    const [cities, setCities] = useState([])

    const [selectedCity, setSelectedCity] = useState("cities")

    useEffect(() => {
        let cityService = new CityService();
        cityService.getCity().then(result => setCities(result.data.data))
    }, []);

    function getCity(e) {
        cities.map(city => ({ key: city.id, text: city.cityName, value: city.cityName }))
        console.log(e.target.options)
    }

    const getCities = cities.map((city) => ({
        key: city.id,
        text: city.cityName,
        value: city.cityName,
    }));


    return (
        <div>
            <Select onChange={getCity} placeholder='Cities' options={getCities} />
        </div>
    )
}
