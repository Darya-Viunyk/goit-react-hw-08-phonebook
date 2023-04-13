import img from 'imeges/img.png';
import { Header } from './homepage.styled';
function HomePage() {
  return (
    <>
      <Header>Welcom to Phonebook</Header>
      <img
        src={img}
        alt="phonebook"
        width="300"
        height="350"
        style={{ margin: '0 auto' }}
      />
    </>
  );
}
export default HomePage;
