export interface DateIdea {
    id: string;
    title: string;
    description: string;
    twist: string;
}

export const DATE_IDEAS: DateIdea[] = [
    {
        id: "moonlit-pact",
        title: "The Moonlit Pact",
        description: "A quiet late evening walk. No phones. Just the sound of the night and your footsteps syncing.",
        twist: "Ask each other one deep question every 5 minutes."
    },
    {
        id: "starlit-serenade",
        title: "Starlit Serenade",
        description: "Drive somewhere with a clear view of the night sky. Play a curated playlist of acoustic or jazz.",
        twist: "You must both sing along to at least one song, no matter how badly."
    },
    {
        id: "midnight-feast",
        title: "The Midnight Feast",
        description: "Order or cook a decadent, slightly messy late-night meal to share in dim lighting.",
        twist: "You must feed each other the first bite, in complete silence."
    },
    {
        id: "whispering-gallery",
        title: "The Whispering Gallery",
        description: "Visit an art gallery or museum during quiet hours, or create an impromptu art viewing at home with books.",
        twist: "Choose pieces that remind you of the other person and explain why."
    },
    {
        id: "flickering-shadows",
        title: "Flickering Shadows",
        description: "A cinematic movie night with all lights off, using only candlelight and the screen's glow.",
        twist: "Pause halfway through to predict the ending. Loser buys the next coffee."
    },
    {
        id: "blind-taste",
        title: "The Blind Taste",
        description: "Assemble an assortment of small treats (sweet, savory, strange). Blindfold each other for a sensory tasting.",
        twist: "Describe the flavor using only emotions or colors, not food words."
    },
    {
        id: "written-stars",
        title: "Written in the Stars",
        description: "Sit together in a cozy corner and write brief, handwritten letters to each other.",
        twist: "Seal them. You can only open them when you get back home."
    },
    {
        id: "velvet-lounge",
        title: "The Velvet Lounge",
        description: "Dress up in your most elegant clothes, just to stay in and mix sophisticated cocktails or mocktails.",
        twist: "Act as if you are strangers meeting at a high-end bar for the first time."
    },
    {
        id: "silken-path",
        title: "The Silken Path",
        description: "A long, meandering drive with no destination in mind. Just the open road and good conversation.",
        twist: "Take turns picking the next turn at every major intersection."
    },
    {
        id: "golden-hour",
        title: "Golden Hour Glow",
        description: "Chase the sunset to a scenic overlook. Bring a blanket and something warm to drink.",
        twist: "Take exactly one intentional photo of the other person, no retakes."
    },
    {
        id: "time-capsule",
        title: "The Time Capsule",
        description: "Gather small mementos, write a shared memory, and hide it somewhere or put it in a box to open next year.",
        twist: "Include one secret wish you have for the two of you."
    },
    {
        id: "phantom-library",
        title: "The Phantom Library",
        description: "Roam a sprawling bookstore or library. Split up to find a book the other person must read.",
        twist: "Read the first chapter aloud to each other over tea afterward."
    },
    {
        id: "echoing-hearth",
        title: "The Echoing Hearth",
        description: "Build a fire (or find a place with a fireplace). Sit close. Let the warmth be the main event.",
        twist: "Share a story about your childhood you haven't told the other yet."
    },
    {
        id: "labyrinth-wander",
        title: "Wandering the Labyrinth",
        description: "Explore a neighborhood or part of the city you've never been to, entirely on foot.",
        twist: "Find the most obscure, smallest cafe or shop to step into."
    },
    {
        id: "crystal-clarity",
        title: "Crystal Clarity",
        description: "A morning date. Fresh coffee, crisp air, and watching the world wake up together.",
        twist: "Write down three things you appreciate about each other right now."
    },
    {
        id: "alchemy-kitchen",
        title: "The Alchemy Kitchen",
        description: "Attempt to cook a complex, beautiful dish together that neither of you has made before.",
        twist: "You are not allowed to get frustrated. Mistakes must be laughed at."
    },
    {
        id: "hidden-oasis",
        title: "The Hidden Oasis",
        description: "Find an indoor botanical garden, conservatory, or heavily planted cafe. Breathe in the green.",
        twist: "Pick a plant that represents the other person's personality."
    },
    {
        id: "velvet-curtains",
        title: "Behind Velvet Curtains",
        description: "See a live performance: local theater, jazz, or a small acoustic gig. Immerse in the art.",
        twist: "Discuss your favorite moment over dessert immediately after."
    },
    {
        id: "clockwork-romance",
        title: "Clockwork Romance",
        description: "Spend exactly one hour focused entirely on each other, no distractions, no getting up.",
        twist: "Maintain eye contact for a full, uninterrupted minute before starting."
    },
    {
        id: "painted-sky",
        title: "The Painted Sky",
        description: "Buy cheap canvases and paints. Paint a portrait of each other simultaneously.",
        twist: "You have 15 minutes, and it's guaranteed to look terrible."
    },
    {
        id: "retrograde-rhythm",
        title: "Retrograde Rhythm",
        description: "Go to an arcade, roller rink, or somewhere that feels delightfully nostalgic and slightly neon.",
        twist: "Play a competitive game, but playfully sabotage yourself to let them win once."
    },
    {
        id: "silent-symphony",
        title: "The Silent Symphony",
        description: "A completely quiet evening. Assemble a puzzle or build something while listening to instrumental music.",
        twist: "Communicate only through gentle touch or passing notes."
    }
];

export function getRandomDateIdeas(count: number = 6): DateIdea[] {
    const shuffled = [...DATE_IDEAS].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}
