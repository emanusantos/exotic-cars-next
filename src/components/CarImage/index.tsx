import Image from 'next/image';

const CarImage = ({ color, onClick }: { color: string, onClick: () => void }) => {
    return (
        <div onClick={onClick} style={{ maxWidth: '75%', maxHeight: '50%', cursor: 'pointer' }}>
            <Image
                src={require(`/src/assets/images/${color}front.png`)}
                alt={`${color} car in front position`}
            />
        </div>
    );
};

export default CarImage;