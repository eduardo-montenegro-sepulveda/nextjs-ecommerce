import type { NextPage } from 'next';

import { Container } from '@mui/material';

import Nav from '../src/components/Nav';

const Home: NextPage = () =>
{
    return (
        <div
            style={
            {
                backgroundImage: 'url(./assets/home/desktop/image-hero.jpg)',
                height: '100vh',
                backgroundSize: '100%'
            }}
        >
            <Container>
                <Nav />
                <hr />
            </Container>
        </div>
    );
}

export default Home;
