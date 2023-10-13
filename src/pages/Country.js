import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getCountry } from '../features/countries/countrySlice';
import CountryCard from '../components/CountryCard';

const Country = () => {
    const dispatch = useDispatch();
    const countriesList = useSelector((state) => state.countries.countries);
    const loading = useSelector((state) => state.countries.isLoading);

    const [search, setSearch] = useState('')

    useEffect(() => {
        dispatch(getCountry())
    },
        [dispatch])
    return (
        <Container fluid>
            <Row>
                <Col className="mt-5 d-flex justify-content-center">
                    <Form>
                        <Form.Control
                            style={{ width: '18rem' }}
                            type="search"
                            className="me-2 "
                            placeholder="Search for countries"
                            aria-label="Search"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </Form>
                </Col>
            </Row>
            <Row xs={2} md={3} lg={4} className=" g-3">
                {/* {countriesList.reduce((acc, country) => {
            if (country.name.official.toLowerCase().includes(search.toLowerCase())) {
             acc.push(<CountryCard key={country.name} country={country} />);
          }
          return acc;
          }, [])} */}
                {countriesList
                    .filter((c) => {
                        return c.name.official.toLowerCase().includes(search.toLowerCase());
                    })
                    .map((country) => (
                        <CountryCard key={country.name.common} country={country} />
                    ))}
            </Row>
        </Container>
    );
};

export default Country;