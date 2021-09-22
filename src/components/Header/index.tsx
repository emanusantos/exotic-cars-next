import * as S from 'styles/header'
import Image from 'next/image'
import Calendar from 'assets/icons/calendar.svg'
import Location from 'assets/icons/location.svg'
import Search from 'assets/icons/search.svg'

const Header = () => {
    return (
        <S.Header>
            <S.Wrapper>
                <S.Title>EXOTIC</S.Title>
                <S.Subtitle>CARS</S.Subtitle>
            </S.Wrapper>
            <S.Wrapper colored>
                <S.Wrapper marginRight="4rem">
                    <Image 
                        alt="An tiny location icon on the header" 
                        src={Location} 
                    />
                    <S.Text>North Carolina, NC 90025</S.Text>
                </S.Wrapper>
                <S.Wrapper marginRight="1rem">
                    <Image 
                        alt="An tiny calendar icon for schedule date of an car" 
                        src={Calendar} 
                    />
                    <S.Text>11/03/2021</S.Text>
                </S.Wrapper>
                <S.Wrapper marginRight="1rem">
                    <Image 
                        alt="An tiny calendar icon for schedule date of an car" 
                        src={Calendar} 
                    />
                    <S.Text>12/12/2021</S.Text>
                </S.Wrapper>
                <div
                    style={{
                        backgroundColor: '#fff',
                        padding: '.2rem .5rem',
                        borderRadius: '5rem'
                    }}
                >
                    <Image 
                        alt="An tiny search icon on the header" 
                        src={Search} 
                    />
                </div>
            </S.Wrapper>
            <S.Wrapper>
                <S.Button>Sign up</S.Button>
                <S.Button primary>Sign in</S.Button>
            </S.Wrapper>
        </S.Header>
    );
};

export default Header;