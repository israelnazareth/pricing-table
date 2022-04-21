import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function Cards(props) {
  const { title, price, features, variant, sizeShadow } = props.item;
  return (
    <div className="col mb-4">
      <Card className={sizeShadow}>
        <Card.Header>
          <h4>{title}</h4>
        </Card.Header>
        <Card.Body>
          <h1 className="my-0 font-weight-normal">
            ${price} <small className="text-muted">/mo</small>
          </h1>
          <ul className="list-unstyled mt-3 mb-4">
            {features.map((feature, index) => { return <li key={index}>{feature}</li> })}
          </ul>
          <Button variant={variant} size='lg'>Sign up</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
