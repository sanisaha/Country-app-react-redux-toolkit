import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getCountry } from '../features/countries/countrySlice';
import CountryCard from '../components/CountryCard';
import toast from 'react-hot-toast';
import { togglepostSuccess } from '../features/favourites/favouritesSlice';

const Country = () => {
    const dispatch = useDispatch();
    const countries = useSelector(state => state.countries);
    const countriesList = useSelector((state) => state.countries.countries);
    const { isLoading, postSuccess, isError, error } = useSelector((state) => state.favourites)

    const [search, setSearch] = useState('')

    useEffect(() => {
        dispatch(getCountry())
    },
        [dispatch])


    useEffect(() => {


        if (!isLoading && postSuccess) {
            toast.success("Added to favourites", { id: 'addFavorite' })
            dispatch(togglepostSuccess())
        }
        if (!isLoading && isError) {
            toast.error(error, { id: 'addFavorite' })
        }
    }, [isLoading, postSuccess, isError, error, dispatch])
    return (
        <Container fluid>
            {countries.isLoading && <h1>Loading...</h1>}
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