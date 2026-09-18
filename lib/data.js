// Mock data layer — swap these for real API calls when the backend is ready.

export const categories = [
  { slug: 'pottery', name: 'Pottery', image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=800&auto=format&fit=crop' },
  { slug: 'textiles', name: 'Textiles', image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?q=80&w=800&auto=format&fit=crop' },
  { slug: 'woodwork', name: 'Woodwork', image: 'https://images.unsplash.com/photo-1614963366795-973eb8748ebb?q=80&w=800&auto=format&fit=crop' },
  { slug: 'jewellery', name: 'Jewellery', image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=800&auto=format&fit=crop' },
  { slug: 'home-decor', name: 'Home Decor', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop' },
  { slug: 'handloom', name: 'Handloom', image: 'https://images.unsplash.com/photo-1590736969596-d84f0a5e5ecc?q=80&w=800&auto=format&fit=crop' },
  { slug: 'bamboo-cane', name: 'Bamboo & Cane', image: 'https://images.unsplash.com/photo-1622560481156-01ac2e4b0e6d?q=80&w=800&auto=format&fit=crop' },
];

export const artisans = [
  {
    id: 'saraswati-devi',
    name: 'Saraswati Devi',
    craft: 'Madhubani Painting',
    region: 'Madhubani, Bihar',
    rating: 4.9,
    years: 22,
    image: 'https://images.unsplash.com/photo-1601924287811-e34de5d17522?q=80&w=900&auto=format&fit=crop',
    cover: 'https://images.unsplash.com/photo-1582561833733-fa9e1d0c1e27?q=80&w=1600&auto=format&fit=crop',
    bio: 'My craft has been passed down through three generations. I learned to grind pigment from turmeric and marigold before I learned to read.',
    story: 'Saraswati grew up watching her grandmother paint the walls of their courtyard during festivals. Today she leads a collective of twelve women in her village, teaching the same motifs that once decorated mud walls, now carried onto canvas and paper for homes across the world.',
    process: 'Natural pigments — turmeric, sindoor, charcoal — are ground by hand and mixed with tree gum. Each panel is drawn freehand, without a pencil sketch, using bamboo twigs dipped in pigment.',
  },
  {
    id: 'ramesh-kumar',
    name: 'Ramesh Kumar',
    craft: 'Wood Carving',
    region: 'Jaipur, Rajasthan',
    rating: 4.8,
    years: 25,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=900&auto=format&fit=crop',
    cover: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=1600&auto=format&fit=crop',
    bio: 'I have been making wooden toys and carved decor for twenty-five years, the same way my father taught me in our courtyard workshop.',
    story: 'Ramesh took over his father\u2019s workshop at nineteen. He now works with sheesham and mango wood sourced from managed local forests, and has trained four apprentices from his neighbourhood.',
    process: 'Timber is seasoned for six months before carving. Each piece is shaped with hand chisels, sanded in stages, and finished with a food-safe vegetable oil rather than synthetic lacquer.',
  },
  {
    id: 'lakshmi-bai',
    name: 'Lakshmi Bai',
    craft: 'Handloom Weaving',
    region: 'Kanchipuram, Tamil Nadu',
    rating: 5.0,
    years: 30,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=900&auto=format&fit=crop',
    cover: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=1600&auto=format&fit=crop',
    bio: 'A single silk saree takes me nearly two weeks on the pit loom. I have never wanted to rush what took my mother a lifetime to teach me.',
    story: 'Lakshmi runs a small loom house with her two daughters, one of the last handloom units in her lane still weaving pure Kanchipuram silk without power assistance.',
    process: 'Mulberry silk threads are hand-dyed in small batches, then woven on a traditional pit loom using a korvai technique to join contrasting-colour borders.',
  },
  {
    id: 'anjali-tanti',
    name: 'Anjali Tanti',
    craft: 'Bamboo Craft',
    region: 'Majuli, Assam',
    rating: 4.7,
    years: 15,
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=900&auto=format&fit=crop',
    cover: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?q=80&w=1600&auto=format&fit=crop',
    bio: 'Bamboo grows behind my house. I wanted to show people it can be more than a fence \u2014 it can be a lamp, a basket, a chair.',
    story: 'Anjali left a garment-factory job in Guwahati to return to Majuli and revive her family\u2019s bamboo weaving practice, now selling functional homeware to buyers across India.',
    process: 'Bamboo poles are cut, smoked to prevent pests, then split into fine strips that are woven and lacquered by hand.',
  },
];

export const products = [
  {
    id: 'blue-pottery-vase',
    name: 'Hand-thrown Blue Pottery Vase',
    category: 'pottery',
    artisanId: 'ramesh-kumar',
    price: 1800,
    rating: 4.8,
    reviews: 64,
    region: 'Jaipur, Rajasthan',
    image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=900&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=1200&auto=format&fit=crop',
    ],
    description: 'A hand-thrown vase in the centuries-old Jaipur blue pottery tradition, glazed with natural cobalt oxide and fired twice for depth of colour. No two pieces are ever identical.',
    materials: 'Quartz clay, natural cobalt glaze',
    origin: 'Jaipur, Rajasthan',
    care: 'Wipe with a dry cloth. Not microwave or dishwasher safe.',
  },
  {
    id: 'madhubani-canvas',
    name: 'Madhubani Fish & Lotus Canvas',
    category: 'home-decor',
    artisanId: 'saraswati-devi',
    price: 3200,
    rating: 5.0,
    reviews: 41,
    region: 'Madhubani, Bihar',
    image: 'https://images.unsplash.com/photo-1582561833733-fa9e1d0c1e27?q=80&w=900&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1582561833733-fa9e1d0c1e27?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1601924287811-e34de5d17522?q=80&w=1200&auto=format&fit=crop',
    ],
    description: 'A hand-painted Madhubani canvas depicting fish and lotus motifs, symbols of fertility and abundance, rendered in natural turmeric and sindoor pigments.',
    materials: 'Canvas, natural pigment',
    origin: 'Madhubani, Bihar',
    care: 'Keep away from direct sunlight and moisture.',
  },
  {
    id: 'kanchipuram-saree',
    name: 'Kanchipuram Silk Saree — Temple Border',
    category: 'handloom',
    artisanId: 'lakshmi-bai',
    price: 12800,
    rating: 5.0,
    reviews: 29,
    region: 'Kanchipuram, Tamil Nadu',
    image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=900&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop',
    ],
    description: 'A pure mulberry silk Kanchipuram saree with a hand-woven temple border, joined using the traditional korvai technique. Fourteen days on the pit loom.',
    materials: 'Mulberry silk, zari thread',
    origin: 'Kanchipuram, Tamil Nadu',
    care: 'Dry clean only. Store folded in muslin cloth.',
  },
  {
    id: 'wooden-elephant',
    name: 'Carved Rosewood Elephant',
    category: 'woodwork',
    artisanId: 'ramesh-kumar',
    price: 2400,
    rating: 4.7,
    reviews: 53,
    region: 'Jaipur, Rajasthan',
    image: 'https://images.unsplash.com/photo-1614963366795-973eb8748ebb?q=80&w=900&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1614963366795-973eb8748ebb?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop',
    ],
    description: 'A single-block carved rosewood elephant, hand-chiselled and finished with vegetable oil to bring out the natural wood grain.',
    materials: 'Sheesham (rosewood)',
    origin: 'Jaipur, Rajasthan',
    care: 'Dust with a soft cloth. Re-oil yearly.',
  },
  {
    id: 'bamboo-lamp',
    name: 'Woven Bamboo Pendant Lamp',
    category: 'bamboo-cane',
    artisanId: 'anjali-tanti',
    price: 2100,
    rating: 4.6,
    reviews: 18,
    region: 'Majuli, Assam',
    image: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?q=80&w=900&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1509281373149-e957c6296406?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1200&auto=format&fit=crop',
    ],
    description: 'A pendant lamp woven from smoked bamboo strips, casting warm dappled light. Wired for a standard E27 bulb, sold without the bulb.',
    materials: 'Smoked bamboo, jute cord',
    origin: 'Majuli, Assam',
    care: 'Dry dust only. Keep away from open flame.',
  },
  {
    id: 'jute-basket-set',
    name: 'Hand-braided Jute Basket Set',
    category: 'bamboo-cane',
    artisanId: 'anjali-tanti',
    price: 1450,
    rating: 4.5,
    reviews: 22,
    region: 'Majuli, Assam',
    image: 'https://images.unsplash.com/photo-1622560481156-01ac2e4b0e6d?q=80&w=900&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1622560481156-01ac2e4b0e6d?q=80&w=1200&auto=format&fit=crop',
    ],
    description: 'A set of three nesting storage baskets, hand-braided from jute fibre over a bamboo frame.',
    materials: 'Jute, bamboo',
    origin: 'Majuli, Assam',
    care: 'Spot clean with a damp cloth.',
  },
  {
    id: 'silver-jhumka',
    name: 'Oxidised Silver Jhumka Earrings',
    category: 'jewellery',
    artisanId: 'lakshmi-bai',
    price: 980,
    rating: 4.9,
    reviews: 77,
    region: 'Kanchipuram, Tamil Nadu',
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=900&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=1200&auto=format&fit=crop',
    ],
    description: 'Traditional oxidised silver jhumka earrings with a bell-flower drop, handcrafted by a family of silversmiths.',
    materials: 'Sterling silver, oxidised finish',
    origin: 'Kanchipuram, Tamil Nadu',
    care: 'Keep dry. Store in an airtight pouch to slow tarnishing.',
  },
  {
    id: 'block-print-cushion',
    name: 'Hand Block-printed Cushion Cover',
    category: 'textiles',
    artisanId: 'ramesh-kumar',
    price: 650,
    rating: 4.6,
    reviews: 35,
    region: 'Jaipur, Rajasthan',
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?q=80&w=900&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?q=80&w=1200&auto=format&fit=crop',
    ],
    description: 'A cotton cushion cover hand block-printed with a hand-carved teak block, using natural indigo and madder dyes.',
    materials: 'Cotton, natural dye',
    origin: 'Jaipur, Rajasthan',
    care: 'Hand wash cold, separately, dry in shade.',
  },
];

export const stories = [
  {
    id: 'woman-who-weaves-dreams',
    title: 'The Woman Who Weaves Dreams',
    artisanId: 'lakshmi-bai',
    region: 'Tamil Nadu',
    image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'Fourteen days, one silk saree, and a technique that has survived four generations on the same pit loom.',
  },
  {
    id: 'keeping-pottery-alive',
    title: 'Keeping the Pottery Tradition Alive',
    artisanId: 'ramesh-kumar',
    region: 'Rajasthan',
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'How a courtyard workshop in Jaipur is training the next generation of blue pottery artists.',
  },
  {
    id: 'small-village-global-market',
    title: 'From a Small Village to the Global Market',
    artisanId: 'saraswati-devi',
    region: 'Bihar',
    image: 'https://images.unsplash.com/photo-1601924287811-e34de5d17522?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'A Madhubani painter\u2019s collective of twelve women now ships to collectors on three continents.',
  },
  {
    id: 'carving-a-better-future',
    title: 'Carving a Better Future',
    artisanId: 'anjali-tanti',
    region: 'Assam',
    image: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'Why a young weaver left a factory floor in Guwahati to bring bamboo craft back to her village.',
  },
];

export function getProduct(id) {
  return products.find((p) => p.id === id);
}

export function getArtisan(id) {
  return artisans.find((a) => a.id === id);
}

export function getProductsByArtisan(artisanId) {
  return products.filter((p) => p.artisanId === artisanId);
}

export function getRelatedProducts(product, count = 4) {
  return products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .concat(products.filter((p) => p.id !== product.id && p.category !== product.category))
    .slice(0, count);
}

export function formatINR(amount) {
  return '\u20b9' + amount.toLocaleString('en-IN');
}
