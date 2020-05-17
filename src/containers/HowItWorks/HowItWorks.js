import React, { useCallback, useEffect } from 'react';
import './HowItWorks.scss';
import NavBar from '../../components/navbar/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import LoadingPage from '../../components/loadingPage/LoadingPage';
import { fetchContentSite } from '../../store/actions';
import CustomHero from '../../components/custom-hero/CustomHero';
import Footer from '../../components/footer/Footer';
// Redux


// Components

function HowItWorks() {
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
        <div className="HowItWorks container">
            <NavBar navigation={content.navigation} heading={content.siteName}/>
            <CustomHero
                imageUrl="https://revistapym.com.co/wp-content/uploads/2019/05/zemoga-1.jpg"/>
            <main className="inner-container">
                <h1 className="HowItWorks__heading">How it works</h1>
                <article className="HowItWorks__text">
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

export default HowItWorks;
