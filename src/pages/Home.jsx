import React from 'react';
import YandexMaps from '../Components/Map/Map';
import LineChart from '../Components/Chart/LineChart';
import Filter from '../Components/Filter/Filter';

const Home = () => {
    return (
        <div className='flex flex-wrap items-center justify-between'>
            {/* <Filter /> */}
            <YandexMaps />
            <LineChart />
        </div>
    );
}

export default Home;
