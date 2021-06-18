import React, { useEffect, useState } from 'react'
import CityService from "../services/cityService";
import { Dropdown, Select } from 'semantic-ui-react';
import { Form } from 'formik-semantic-ui';

export default function CityList() {

    const [cities, setCities] = useState([])

    useEffect(() => {
        let cityService = new CityService();
        cityService.getCity().then(result => setCities(result.data.data))
    }, []);

    const handleChangeSemantic = (field, value) => {
        console.log(field, value);
    }

    const citiesOptions = cities.map((city, index) => ({
        key: index,
        text: city.cityName,
        value: city.id
    }))


    return (
        <div>
            <Form.Group>
                <Form.Dropdown required placeholder="Select City" selection search options={citiesOptions}/>
            </Form.Group>
        </div>
    )
}
