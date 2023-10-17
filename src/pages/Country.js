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
        //here we are dispatching the action to get the countries
        dispatch(getCountry())
    },
        [dispatch])


    useEffect(() => {
        //here we are checking if the postSuccess is true or not and then showing the toast accordingly
        if (!isLoading && postSuccess) {
            toast.success("Added to favourites", { id: 'addFavorite' })
            dispatch(togglepostSuccess())
        }
        if (!isLoading && isError) {
            toast.error(error, { id: 'addFavorite' })
        }
    }, [isLoading, postSuccess, isError, error, dispatch])
    return (

        <div>
            {countries.isLoading ? <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading . . . .</span>
                </div>
            </div> :
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
            }

        </div>


    );
};

export default Country;