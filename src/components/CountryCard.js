import React, { useContext, useEffect } from 'react';
import { Card, Col, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { addFavouriteCountry, deleteFavouriteCountry, getFavouriteCountry } from '../features/favourites/favouritesSlice';
import { AuthContext } from '../Context/AuthProvider';

const CountryCard = ({ country }) => {
    const favouritesList = useSelector(state => state.favourites.favouriteCountry);
    const dispatch = useDispatch();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (user) {
            // here we are dispatching the action to get the favourite countries of the user and sending the user as a payload
            dispatch(getFavouriteCountry(user))
        }
    }, [dispatch, user]);

    return (
        <Col className="mt-5">
            <Card className="h-100">
                {/* here we are checking if the country is in the favourite list or not and then showing the button accordingly. we are sending country name and user email as action payload, so it can first check user with user email and then delete/add country */}
                {favouritesList?.includes(country.name.common) ? (
                    <button
                        className="bi bi-heart-fill text-danger m-1 p-1"
                        onClick={() => dispatch(deleteFavouriteCountry({ userEmail: user.email, data: country.name.common }))}>remove from favourite</button>
                ) : <>
                    {user && (
                        <button
                            className="bi bi-heart text-danger m-1 p-1"
                            onClick={() => dispatch(addFavouriteCountry({ userEmail: user.email, data: country.name.common }))}>add to favourite</button>
                    )}
                </>}
                {/* here we are using LinkContainer to link the country card to the country page and sending the country as a state */}
                <LinkContainer
                    to={`/countries/${country.name.common}`}
                    state={{ country: country }}
                >
                    <div>
                        <Card.Img
                            variant="top"
                            src={country.flags.svg}
                            className="rounded h-50"
                            style={{
                                objectFit: "cover",
                                minHeight: "200px",
                                maxHeight: "200px",
                            }}
                        />
                        <Card.Body className="d-flex flex-column">
                            <Card.Title>{country.name.common}</Card.Title>
                            <Card.Subtitle className="mb-5 text-muted">
                                {country.capital}
                            </Card.Subtitle>
                            <ListGroup
                                variant="flush"
                                className="flex-grow-1 justify-content-end"
                            >
                                <ListGroup.Item>
                                    <i className="bi bi-translate me-2">
                                        {Object.values(country.languages ?? {}).join(", ")}
                                    </i>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <i className="bi bi-cash-coin me-2">
                                        {Object.values(country.currencies ?? {})
                                            .map((currency) => currency.name)
                                            .join(", ")}
                                    </i>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <i className="bi bi-people me-2">
                                        {country.population.toLocaleString()}
                                    </i>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </div>
                </LinkContainer>
            </Card>
        </Col>
    );
};

export default CountryCard;