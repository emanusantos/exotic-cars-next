import type { NextPage } from 'next'
import Header from 'components/Header'
import Car from 'components/Car';
import * as S from 'styles/home'
import path from 'path';
import fs from 'fs/promises';
import { GetStaticProps } from 'next'

type CarResponse = {
  id: number;
  brand: string;
  model: string;
  price: number;
  fileName: string;
}

type Props = {
  cars: CarResponse[]
}

const Home: NextPage<Props> = ({ cars }) => {
  return (
    <>
    <Header />
    <S.Container>
      {cars.map((car: CarResponse) => (
        <Car 
          key={car.id} 
          brand={car.brand} 
          model={car.model} 
          price={car.price} 
          img={car.fileName} 
        />
      ))}
    </S.Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
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
