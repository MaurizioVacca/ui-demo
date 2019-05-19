import React, {
    Fragment,
    useState,
    useEffect,
    memo
} from 'react';

import getArticles from 'api/articles';
import { Article, NavBar } from 'sections';

import HomeCover from 'images/cover.png';

const Home = () => {
    const [articles, setArticles] = useState([])
    const [showNavBar, setShowNavBar] = useState(true);
    const articleRef = React.createRef();
    const navBarRef = React.createRef();

    const fetchData = () => {
        let remoteData = null;

        if (!remoteData) {
            remoteData = getArticles();

            setArticles(remoteData);
        }
    };

    const animateNavBar = () => {
        const checkNavbarDistanceFromContent = () => {
            const { current: navBarCurrent } = navBarRef;
            const { current: articleCurrent } = articleRef;

            const navbarPosition = navBarCurrent.getBoundingClientRect();
            const articlePosition = articleCurrent.getBoundingClientRect();

            const vDistance = articlePosition.y - (navbarPosition.y + navbarPosition.height);

            if (vDistance <= 36 && showNavBar) {
                setShowNavBar(false);
            }

            if (vDistance > 36 && !showNavBar) {
                setShowNavBar(true);
            }
        };

        window.addEventListener('scroll', checkNavbarDistanceFromContent);

        return () => window.removeEventListener('scroll', checkNavbarDistanceFromContent);
    };

    useEffect(fetchData,[]);
    useEffect(animateNavBar);

    const highlights = articles.filter((article, index) => index > 0);
    const article = articles[0];

    return (
        <Fragment>
            <NavBar ref={navBarRef} show={showNavBar} />
            {article && (
                <Article
                    cover={HomeCover}
                    article={article}
                    ref={articleRef}
                    highlights={highlights}
                />
            )}
        </Fragment>
    );
};

export default memo(Home);
