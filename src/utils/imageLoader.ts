// Eagerly import all images from the assets folder
const images = import.meta.glob('../assets/cards/*.jpg', { eager: true, import: 'default' });

export const getCardImage = (filename: string): string | undefined => {
    // Construct the lookup key. 
    // Vite keys are relative to the current file if starting with ./ or absolute from project root.
    // We used ../assets/cards/ so keys will look like "../assets/cards/c01.jpg"
    const key = `../assets/cards/${filename}`;

    const imagePath = images[key] as string;

    if (!imagePath) {
        console.warn(`Image not found for key: ${key}`);
        // Fallback: search for filename in keys to handle potential path differences
        const foundKey = Object.keys(images).find(k => k.endsWith(`/${filename}`));
        if (foundKey) {
            return images[foundKey] as string;
        }
    }

    return imagePath;
};
