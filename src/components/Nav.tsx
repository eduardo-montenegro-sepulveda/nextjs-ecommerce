import Image from 'next/image';
import Link from 'next/link';

const Nav = () =>
{
    return (
        <div
            style={
            {
                color: 'white',
                padding: '2rem 0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}
        >
            <Image
                src="./assets/shared/desktop/logo.svg"
                alt="logo"
                width={150}
                height={30}
            />
            <ul style={{ textTransform: 'uppercase', textDecoration: 'none' }}>
                <Link href="/" style={{ marginRight: '1rem', fontWeight: 700 }}>Home</Link>
                <Link href="/" style={{ marginRight: '1rem', fontWeight: 700 }}>Headphones</Link>
                <Link href="/" style={{ marginRight: '1rem', fontWeight: 700 }}>Speakers</Link>
                <Link href="/" style={{ marginRight: '1rem', fontWeight: 700 }}>Earphones</Link>
            </ul>
            <Image
                src="./assets/shared/desktop/icon-cart.svg"
                alt="logo"
                width={30}
                height={30}
            />
        </div>
    );
}

export default Nav;
