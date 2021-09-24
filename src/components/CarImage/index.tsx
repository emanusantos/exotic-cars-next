import Image from 'next/image';

const CarImage = ({ color }: { color: string }) => {
    return (
        <div style={{ width: '75%', height: '50%', cursor: 'pointer' }}>
            <Image
                src={require(`/src/assets/images/${color}front.png`)}
                alt={`${color} car in front position`}
            />
        </div>
    );
};

export default CarImage;