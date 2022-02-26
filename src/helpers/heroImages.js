const images = require.context('../assets/', true);

export const heroImages = (id) => {
    return images(`./${id}.jpg`);
}
