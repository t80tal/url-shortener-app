const getNavbarItems = () => {
    return (
        [
            {
                id: 1,
                title: 'Home',
                url: '',
                type: 'desktop'
            },
            {
                id: 2,
                title: 'How to use?',
                url: 'tutorial',
                type: 'desktop'
            },
            {
                id: 3,
                title: 'Why us?',
                url: 'why-us',
                type: 'desktop'
            },
            {
                id: 4,
                title: 'Login',
                url: 'login',
                type: 'desktop'
            },
            {
                id: 5,
                title: 'Sign Up',
                url: 'register',
                type: 'mobile'
            },
        ]
    );
};

export default getNavbarItems;