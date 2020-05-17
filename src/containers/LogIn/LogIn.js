import React, { useCallback, useEffect } from 'react';
import './LogIn.scss';
import NavBar from '../../components/navbar/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import LoadingPage from '../../components/loadingPage/LoadingPage';
import { fetchContentSite } from '../../store/actions';
import Footer from '../../components/footer/Footer';
// Redux


// Components

function LogIn() {
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
        <div className="LogIn container">
            <NavBar navigation={content.navigation} heading={content.siteName}/>
            <section className="inner-container LogIn__form-container">
                <div className="LogIn__form">
                    <h2>Log In to your account</h2>
                    <form>
                        <input type="text" placeholder="Username"/>
                        <input type="password" placeholder="Password"/>

                        <div className="LogIn__actions">
                            <button className="LogIn__button">Log In</button>
                            <button className="LogIn__button">Sign Up</button>
                        </div>
                    </form>
                </div>
            </section>
            <Footer content={content.footer}/>
        </div>
    );
}

export default LogIn;
