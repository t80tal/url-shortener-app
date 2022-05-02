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
                title: 'Login',
                url: 'login',
                type: 'desktop'
            },
            {
                id: 3,
                title: 'Sign Up',
                url: 'register',
                type: 'mobile'
            },
        ]
    );
};

export default getNavbarItems;