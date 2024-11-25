const addresses = [
  {
    id: 1,
    name: "The Rustic Spoon",
    price: "$$",
    location: "456 Main Street, Springfield",
    locationTip: "A cozy spot for family gatherings",
    type: "Restaurant",
    ranking: 4.2,
    images: [
      "https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Denne-de-personnes-sur-le-bar-d1ngW7SNehM",
      "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1488992783499-418eb1f62d08?q=80&w=2789&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1502998070258-dc1338445ac2?q=80&w=2779&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    quote: "Savor the taste of home-cooked meals",
    guide: {
      name: "John Doe",
      title: "Food Blogger",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    advantages: ["Family-friendly", "Cozy ambiance", "Great desserts"],
  },
  {
    id: 2,
    name: "Neon Nights",
    price: "$$$",
    location: "789 Sunset Blvd, Los Angeles",
    locationTip: "The best cocktails in the city",
    type: "Bar",
    ranking: 4.6,
    images: [
      "https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Denne-de-personnes-sur-le-bar-d1ngW7SNehM",
      "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1488992783499-418eb1f62d08?q=80&w=2789&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1502998070258-dc1338445ac2?q=80&w=2779&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    quote: "The perfect place to unwind after a long day",
    guide: {
      name: "Jane Smith",
      title: "Cocktail Enthusiast",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    advantages: ["Signature cocktails", "Trendy decor", "Live music"],
  },
  {
    id: 3,
    name: "Sushi Sensation",
    price: "$$$$",
    location: "123 Ocean Drive, Miami",
    locationTip: "Fresh sushi with a beautiful ocean view",
    type: "Restaurant",
    ranking: 4.8,
    images: [
      "https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Denne-de-personnes-sur-le-bar-d1ngW7SNehM",
      "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1488992783499-418eb1f62d08?q=80&w=2789&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1502998070258-dc1338445ac2?q=80&w=2779&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    quote: "Experience the finest sushi in town",
    guide: {
      name: "Sushi Master",
      title: "Chef",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    advantages: ["Fresh ingredients", "Ocean view", "Exquisite presentation"],
  },
  {
    id: 4,
    name: "The Cozy Corner",
    price: "$",
    location: "321 Park Avenue, New York",
    locationTip: "A hidden gem perfect for a quiet coffee break",
    type: "Café",
    ranking: 4.1,
    images: [
      "https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Denne-de-personnes-sur-le-bar-d1ngW7SNehM",
      "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1488992783499-418eb1f62d08?q=80&w=2789&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1502998070258-dc1338445ac2?q=80&w=2779&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    quote: "Where every cup feels like home",
    guide: {
      name: "Alice Green",
      title: "Coffee Connoisseur",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    advantages: ["Quiet atmosphere", "Great coffee", "Friendly staff"],
  },
  {
    id: 5,
    name: "Taco Fiesta",
    price: "$$",
    location: "123 Fiesta Street, San Diego",
    locationTip: "Spicy tacos in a lively atmosphere",
    type: "Restaurant",
    ranking: 4.4,
    images: [
      "https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Denne-de-personnes-sur-le-bar-d1ngW7SNehM",
      "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1488992783499-418eb1f62d08?q=80&w=2789&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1502998070258-dc1338445ac2?q=80&w=2779&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    quote: "Taste the authentic flavors of Mexico",
    guide: {
      name: "Carlos Hernandez",
      title: "Food Critic",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    advantages: ["Authentic tacos", "Lively atmosphere", "Affordable"],
  },
  {
    id: 6,
    name: "Brew & View",
    price: "$$$",
    location: "101 Coffee Lane, Portland",
    locationTip: "Enjoy a brew while watching classic movies",
    type: "Bar",
    ranking: 4.7,
    images: [
      "https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Denne-de-personnes-sur-le-bar-d1ngW7SNehM",
      "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1488992783499-418eb1f62d08?q=80&w=2789&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1502998070258-dc1338445ac2?q=80&w=2779&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    quote: "A perfect blend of coffee and cinema",
    guide: {
      name: "Mark Lee",
      title: "Barista & Movie Buff",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    advantages: ["Movie nights", "Specialty coffee", "Comfortable seating"],
  },
];

export default addresses;
