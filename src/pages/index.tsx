import type { NextPage } from 'next'
import Header from 'components/Header'
import Car from 'components/Car';
import * as S from 'styles/home'
import path from 'path';
import fs from 'fs/promises';
import { GetStaticProps } from 'next'

const Home: NextPage = (props: any) => {
  const { cars } = props;
  return (
    <>
    <Header />
    <S.Container>
      {cars.map((car: any) => (
        <Car key={car.id} brand={car.brand} model={car.model} price={car.price} img={car.fileName} />
      ))}
    </S.Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const filePath = path.join(process.cwd(), 'src', 'data', 'cars.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());
  console.log(data);

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      cars: data.cars
    }
  };

}

export default Home
