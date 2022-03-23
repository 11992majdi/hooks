
import {Card,Button} from 'react-bootstrap';

const MovieCard = ({mov}) =>{
  return (
    <div>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={mov.photo} />
  <Card.Body>
    <Card.Title>{mov.title}</Card.Title>
    <Card.Text>
      {mov.rate}
    </Card.Text>
    <Button  variant="primary">show</Button>
  </Card.Body>
</Card>
</div>
  );
};
export default MovieCard;