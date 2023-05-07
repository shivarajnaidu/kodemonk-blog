
const ployFillShareAPI = async () => {
    if (!navigator.share) {
        try {
            await import('share-api-polyfill');
        } catch (error) {
            console.warn('Failed to load share api polyfill');
            console.error(error);
        } finally {
            return;
        }
    }
}

export const sharePost = async (options = {}) => {
    await ployFillShareAPI();

    const defaultOptions = {
        title: document.title || 'KodeMonk',
        text: '',
        url: window?.location.href,
        hashtags: ['kodemonk'],
    };

    return navigator.share({ ...defaultOptions, ...options })
        .then(_ => console.log('Yay, you shared it :)'))
        .catch(error => console.error('Oh noh! You couldn\'t share it! :\'(\n', error));
}