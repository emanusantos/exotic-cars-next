import type { NextPage } from 'next'
import Header from 'components/Header'
import Car from 'components/Car';
import * as S from 'styles/home'
import path from 'path';
import fs from 'fs/promises';
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router';

export type CarResponse = {
  id: number;
  brand: string;
  model: string;
  price: number;
  fileName: string;
}

export type Props = {
  cars: CarResponse[]
}

const Home: NextPage<Props> = ({ cars }) => {
  const router = useRouter();
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
          onClick={() => {router.push(`/${car.id}`)}}
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

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      cars: data.cars
    },
    revalidate: 600
  };

}

export default Home
