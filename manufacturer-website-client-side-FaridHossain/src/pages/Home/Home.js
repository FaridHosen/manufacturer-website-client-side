import React from 'react';
import Banner from './Banner';
import ChooseUs from './ChooseUs';
import CustomerReview from './CustomerReview';
import NewsFeed from './NewsFeed';
import Parts from './Parts';
import Summary from './Summary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <Summary></Summary>
            <CustomerReview></CustomerReview>
            <ChooseUs></ChooseUs>
            <NewsFeed></NewsFeed>
        </div>
    );
};

export default Home;