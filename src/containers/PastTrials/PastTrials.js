import React, { useCallback, useEffect } from 'react';
import './PastTrials.scss';
import NavBar from '../../components/navbar/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import LoadingPage from '../../components/loadingPage/LoadingPage';
import { fetchContentSite } from '../../store/actions';
import CustomHero from '../../components/custom-hero/CustomHero';
import Footer from '../../components/footer/Footer';
// Redux


// Components

function PastTrials() {
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
        return <LoadingPage/>;
    }

    return (
        <div className="PastTrials container">
            <NavBar navigation={content.navigation} heading={content.siteName}/>
            <CustomHero
                imageUrl="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"/>
            <main className="inner-container">
                <h1 className="PastTrials__heading">Past Trials</h1>
                <article className="PastTrials__text">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam aut
                        deleniti doloremque, eaque earum facere facilis id, impedit laborum mollitia
                        nisi non, odit officiis omnis perferendis rem repellendus voluptatum. Lorem
                        ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam aut
                        deleniti doloremque, eaque earum facere facilis id, impedit laborum mollitia
                        nisi non, odit officiis omnis perferendis rem repellendus voluptatum. Lorem
                        ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam aut
                        deleniti doloremque, eaque earum facere facilis id, impedit laborum mollitia
                        nisi non, odit officiis omnis perferendis rem repellendus voluptatum.
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem
                        beatae commodi ipsa odit provident quae quisquam repudiandae sed similique.
                        Amet excepturi laborum magni nostrum omnis praesentium reprehenderit
                        suscipit, veniam!
                    </p>
                </article>
            </main>
            <Footer content={content.footer}/>
        </div>
    );
}

export default PastTrials;
