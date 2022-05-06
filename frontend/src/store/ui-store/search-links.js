import { authActions } from '../auth-store/auth';

// All "tags" / "key" word for helping with the searching.
// Link for redirection or action for executing a function.
export const links = [
    {
        title: 'Create a new url',
        type: 'link',
        link: '/urls'
    },
    {
        title: 'Edit a url',
        type: 'link',
        link: '/urls'
    },
    {
        title: 'Delete a url',
        type: 'link',
        link: '/urls'
    },
    {
        title: 'Links',
        type: 'link',
        link: '/urls'
    },
    {
        title: 'Urls',
        type: 'link',
        link: '/urls'
    },
    {
        title: 'Dashboard',
        type: 'link',
        link: '/dashboard'
    },
    {
        title: 'Logout',
        type: 'action',
        action: authActions.logoutHandler
    }
]
