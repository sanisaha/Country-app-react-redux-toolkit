import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { clearFavourites } from '../features/favourites/favouritesSlice';
import CountryCard from '../components/CountryCard';
import { useDispatch, useSelector } from 'react-redux';
import { getCountry } from '../features/countries/countrySlice';

const Favourites = () => {
    const dispatch = useDispatch()

    let countriesList = useSelector((state) => state.countries.countries)
    const loading = useSelector((state) => state.countries.loading)
    const [search, setSearch] = useState("")
    const favouritesList = useSelector((state) => state.favourites.favourites)

    if (favouritesList !== null) {
        countriesList = countriesList.filter(c => favouritesList.includes(c.name.common))
    }
    else {
        countriesList = []
    }

    useEffect(() => {
        dispatch(getCountry())
    }, [dispatch])

    if (loading) {
        return (
            <Col className="text-center m-5">
                <Spinner
                    animation="border"
                    role="status"
                    className="center"
                    variant="info"
                >
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </Col>
        )
    }
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
                <Button onClick={() => {
                    dispatch(clearFavourites())
                }}>Clear Favourites</Button>
            </Row>
            <Row xs={2} md={3} lg={4} className=" g-3">
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

export default Favourites;