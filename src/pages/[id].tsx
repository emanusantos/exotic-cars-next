import type { NextPage } from "next";
import { GetStaticProps, GetStaticPaths } from "next";
import path from 'path';
import fs from 'fs/promises';
import { CarResponse } from "pages";
import Spinner from 'components/Spinner/index'

type Props = {
    loadedCar: CarResponse
}

const CarDetails: NextPage<Props> = ({ loadedCar }) => {
    if (!loadedCar) {
        return <Spinner />
    }

    return (
        <>
        <h1>{loadedCar.brand}</h1>
        <h1>{loadedCar.model}</h1>
        </>
    );
};

const getData = async () => {
    const filePath = path.join(process.cwd(), 'src', 'data', 'cars.json');
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData.toString());

    return data;
};

export const getStaticPaths: GetStaticPaths = async (context) => {
    const data = await getData();

    const ids = data.cars.map((car: CarResponse) => car.id);
    const params = ids.map((id: number) => ({ params: { id: id.toString() }}))

    return {
        paths: params,
        fallback: 'blocking'
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    const { params } = context;
    const id = params!.id;

    const data = await getData();

    const car = data.cars.find((car: CarResponse) => car.id.toString() === id!)

    if (!car) {
        return { notFound: true }
    }

    return {
        props: {
            loadedCar: car
        }
    };
};

export default CarDetails;