export const getCardImage = (filename: string): string | undefined => {
    // Eagerly import all images from the assets folder
    const images = import.meta.glob('../assets/cards/*.jpg', { eager: true, import: 'default' });

    // Construct the lookup key. 
    // Vite keys are relative to the current file if starting with ./ or absolute from project root.
    // We used ../assets/cards/ so keys will look like "../assets/cards/c01.jpg"
    const key = `../assets/cards/${filename}`;

    return images[key] as string;
};
