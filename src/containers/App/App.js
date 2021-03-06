import React, { useCallback, useEffect } from 'react';
import './App.scss';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchContentSite } from '../../store/actions';
import LoadingPage from '../../components/loadingPage/LoadingPage';
import Hero from '../../components/hero/Hero';
import VotingSection from '../../components/voting-section/VotingSection';
import Footer from '../../components/footer/Footer';
import NavBar from '../../components/navbar/NavBar';
import FeaturedText from '../../components/featured-text/FeaturedText';
import NameForm from '../../components/name-form/NameForm';

// Components


function App() {
    const dispatch = useDispatch();
    const isPending = useSelector(state => {
        return state.content.isPending;
    });
    const content = useSelector(state => state.content.site);
    const onRequestContent = useCallback(() => {
        dispatch(fetchContentSite());
    }, [dispatch]);

    useEffect(() => {
        if (!content) {
            onRequestContent();
        }
    }, [content, onRequestContent]);

    if (!content || isPending) {
        return <LoadingPage />;
    }

    return (
        <div className="App container">
            <NavBar navigation={content.navigation} heading={content.siteName}/>
            <Hero content={content.hero}/>
            <main className="inner-container">
                <FeaturedText content={content.featuredTest} />
                <VotingSection content={content.votes}/>
                <NameForm />
                <Footer content={content.footer}/>
            </main>
        </div>
    );
}

export default App;
