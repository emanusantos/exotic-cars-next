import * as S from 'styles/car';
import Image from 'next/image';
import Dots from 'components/Dots';

type CarProps = {
    brand: string;
    model: string;
    img?: string;
    price: number;
    onClick?: () => void;
};

const Car = ({ brand, model, img, price, onClick }: CarProps) => {
    return (
        <S.Card onClick={onClick}>
            <S.Wrapper primary>
                <S.Title>{brand}</S.Title>
                <Dots />
            </S.Wrapper>
            <S.Subtitle>{model.toUpperCase()}</S.Subtitle>
            <div style={{ width: 'auto', height: 'auto' }}>
                <Image
                    src={require(`/src/assets/images/${img}.png`)}
                    alt="logo"
                    layout='responsive'
                />
            </div>
            <S.Wrapper>
                <S.Price>$</S.Price>
                <h2>{price}</h2>
                <S.Price footer>/day</S.Price>
            </S.Wrapper>
        </S.Card>
    );
};

export default Car;