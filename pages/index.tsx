import type { NextPage } from 'next';

import { Container } from '@mui/material';

import Nav from '../src/components/Nav';
import Hero from '../src/components/Hero';

const Home: NextPage = () =>
{
    return (
        <div
            style={
            {
                backgroundImage: 'url(./assets/home/desktop/image-hero.jpg)',
                height: '100vh',
                backgroundSize: '100%',
                color: 'white'
            }}
        >
            <Container>
                <Nav />
                <hr />
                <Hero />
            </Container>
        </div>
    );
}

export default Home;
