import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ProductsList({ products }) {
  return (
    products.map((product) => (
      <Card key={product.id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            {product.category}<br /> <br />
            {product.recipe}<br /> <br />
            {product.likes}<br /> <br />
            {product.flavours}<br /> <br />
            {product.price}
          </Card.Text>
            </Card.Body>
            <Button variant="success">Add to cart</Button>{' '}
      </Card>
    ))
  );
}

export default ProductsList;
