// Load all images from assets folder using Vite
const modules = import.meta.glob('../assets/cards/*.jpg', { eager: true });
const allImagePaths = Object.values(modules).map((mod: any) => mod.default);

export function getRandomCardImages(count: number = 6): string[] {
    if (!allImagePaths.length) {
        // Fallback if no images found, but there should be 78
        return Array(count).fill('');
    }

    const shuffled = [...allImagePaths].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}
