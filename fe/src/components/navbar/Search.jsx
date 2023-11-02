import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const Search = () =>
{
    return (
        <Form className="d-flex">
            <input
                className="rounded-2 me-3"
                type="search"
                placeholder="Search"

                aria-label="Search"
            />
            <Button className='mx-2' variant="outline-success">Search</Button>
        </Form>
        
    )
}

export default Search
