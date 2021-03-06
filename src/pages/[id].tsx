import React from 'react'
import type { NextPage, GetStaticProps, GetStaticPaths } from "next"
import Image from 'next/image'
import path from 'path'
import fs from 'fs/promises'
import { useRouter } from "next/router"
import { CarResponse } from "pages";
import Spinner from 'components/Spinner/index'
import * as S from 'styles/details'
import ArrowLeft from 'assets/icons/arrow2.svg'
import ArrowLeft2 from 'assets/icons/arrow3.svg'
import ArrowRight from 'assets/icons/arrow1.svg'
import CarImage from 'components/CarImage/index'

type Props = {
    loadedCar: CarResponse
}

const CarDetails: NextPage<Props> = ({ loadedCar }) => {
    const [currentIndex, setCurrentIndex] = React.useState(1);
    const router = useRouter();
    const [colors, setColors] = React.useState([{ name: 'red', number: 0 }, { name: 'gray', number: 0o1 }, { name: 'yellow', number: 0o2 }])
    let currentColor = colors[currentIndex];

    if (!loadedCar) {
        return <Spinner />
    }

    const handleArrow = (param: string) => {
        if (param === 'increment') {
            if (currentIndex === 2) {
                return setCurrentIndex(0);
            };
            setCurrentIndex(currentIndex + 1);
        } else {
            if (currentIndex === 0) {
                return setCurrentIndex(2);
            };
            setCurrentIndex(currentIndex - 1);
        };
    };

    return (
        <S.Container>
            <div style={{ display: 'flex', gap: '2rem' }}>
                <Image
                    src={require(`/src/assets/images/logo.png`)}
                    alt="logo"
                />
                <div style={{ width: '100%', cursor: 'default' }}>
                    <S.Title>
                        {loadedCar.brand} {loadedCar.model}
                    </S.Title>
                    <p style={{ fontSize: '2rem' }}>${loadedCar.price}/day</p>
                </div>
            </div>
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between'
                }}
            >
                <S.CatalogButton
                    onClick={() => {
                        router.push('/');
                    }}
                >
                    <Image src={ArrowLeft} alt="An arrow pointing to the left" />
                    Back to catalog
                </S.CatalogButton>
                <div style={{ width: '75%' }}>
                    <Image
                        src={require(`/src/assets/images/${currentColor.name}chosen.png`)}
                        alt={`The car displayed in ${currentColor.name} color`}
                    />
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        cursor: 'default'
                    }}
                >
                    <S.Title>{currentColor.number === 0 ? `03` : `0${currentColor.number}`}</S.Title>
                    <p style={{ fontSize: '2rem', fontWeight: 300 }}>{currentColor.name.charAt(0).toUpperCase() + currentColor.name.slice(1)}</p>
                </div>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <S.BookButton>
                    Book now <Image src={ArrowRight} alt="An arrow pointing to the right" />
                </S.BookButton>
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: '3rem'
                }}
            >
                <S.Arrow onClick={() => handleArrow('decrement')}>
                    <div style={{ width: '1.2rem' }}>
                        <Image
                            src={ArrowLeft2}
                            alt="An arrow pointing to the left"
                        />
                    </div>
                </S.Arrow>
                {colors.map((color, i) => {
                    if (color.name === currentColor.name) {
                        colors[1] === colors[i]
                    };

                    return (
                        <CarImage key={color.number} color={color.name} onClick={() => setCurrentIndex(color.number)} />
                    )
                })}
                <S.Arrow onClick={() => handleArrow('increment')}>
                    <div style={{ width: '1.2rem' }}>
                        <Image
                            src={ArrowRight}
                            alt="An arrow pointing to the right"
                        />
                    </div>
                </S.Arrow>
            </div>
        </S.Container>
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