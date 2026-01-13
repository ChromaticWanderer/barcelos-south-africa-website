/**
 * Barcelos India - Menu Data
 *
 * Centralized menu data structure for all menu items and categories.
 * This serves as the single source of truth for menu information
 * across the website.
 *
 * TODO: Connect to CMS or API for dynamic menu management
 * TODO: Add real menu items when provided by stakeholder
 */

/**
 * Heat level scale for Peri-Peri spice levels
 * 1 = Mild (Tangy Lemon & Herb)
 * 2 = Medium (Original)
 * 3 = Hot (Peri-Peri Hot)
 * 4 = Extra Hot (Vusa)
 * 5 = Inferno (Devil's)
 */
export type HeatLevel = 1 | 2 | 3 | 4 | 5

/**
 * Heat level labels for display
 */
export const HEAT_LEVEL_LABELS: Record<HeatLevel, string> = {
  1: "Lemon & Herb",
  2: "Medium",
  3: "Hot",
  4: "Extra Hot",
  5: "Devil's",
}

/**
 * Heat level colors for visual indicators
 */
export const HEAT_LEVEL_COLORS: Record<HeatLevel, string> = {
  1: "#4CAF50", // Green
  2: "#FFC107", // Yellow
  3: "#FF9800", // Orange
  4: "#FF5722", // Deep Orange
  5: "#F44336", // Red
}

/**
 * Menu item interface defining the structure for individual menu items
 */
export interface MenuItem {
  /** Unique identifier for the menu item */
  id: string
  /** Display name of the item */
  name: string
  /** Description of the item */
  description: string
  /** Price in INR */
  price: number
  /** Category ID this item belongs to */
  category: string
  /** Image URL for the item */
  image?: string
  /** Whether this is a vegetarian item */
  isVeg: boolean
  /** Peri-peri heat level (1-5 scale) */
  heatLevel?: HeatLevel
  /** Whether this is a new menu item */
  isNew?: boolean
  /** Whether this is a popular/bestseller item */
  isPopular?: boolean
  /** Whether this item is currently available */
  isAvailable?: boolean
  /** Nutritional information */
  nutrition?: {
    calories?: number
    protein?: string
    carbs?: string
    fat?: string
  }
  /** Allergens present in this item */
  allergens?: string[]
  /** Tags for filtering (e.g., "grilled", "burger", "spicy") */
  tags?: string[]
}

/**
 * Menu category interface defining the structure for menu categories
 */
export interface MenuCategory {
  /** Unique identifier for the category */
  id: string
  /** Display name of the category */
  name: string
  /** Description of the category */
  description: string
  /** Display order (lower numbers appear first) */
  order: number
  /** Image URL for the category */
  image?: string
  /** Menu items in this category */
  items: MenuItem[]
}

/**
 * Verification status markers for menu data
 */
export const MENU_VERIFICATION_MARKERS = {
  PENDING_PRICE: "[PRICE_PENDING]",
  PENDING_DESCRIPTION: "[DESC_PENDING]",
  PLACEHOLDER_IMAGE: "/images/menu/placeholder.jpg",
} as const

/**
 * Menu category definitions
 *
 * NOTE: Items are placeholders and need to be populated with real menu data
 * from the stakeholder.
 */
export const menuCategories: MenuCategory[] = [
  {
    id: "flame-grilled-chicken",
    name: "Flame-Grilled Chicken",
    description:
      "Our signature flame-grilled chicken, marinated for 24 hours and grilled to perfection over open flames.",
    order: 1,
    items: [
      // TODO: Add real menu items when provided
      // Example structure:
      // {
      //   id: "quarter-chicken",
      //   name: "Quarter Chicken",
      //   description: "Flame-grilled quarter chicken with your choice of Peri-Peri sauce",
      //   price: 299,
      //   category: "flame-grilled-chicken",
      //   isVeg: false,
      //   heatLevel: 2,
      //   isPopular: true,
      // }
    ],
  },
  {
    id: "burgers",
    name: "Burgers",
    description:
      "Handcrafted burgers featuring our flame-grilled chicken and signature sauces.",
    order: 2,
    items: [],
  },
  {
    id: "wraps-pitas",
    name: "Wraps & Pitas",
    description:
      "Fresh wraps and pitas filled with flame-grilled goodness.",
    order: 3,
    items: [],
  },
  {
    id: "sides",
    name: "Sides",
    description:
      "Perfect accompaniments to your flame-grilled meal.",
    order: 4,
    items: [],
  },
  {
    id: "beverages",
    name: "Beverages",
    description:
      "Refreshing drinks to complete your meal.",
    order: 5,
    items: [],
  },
  {
    id: "desserts",
    name: "Desserts",
    description:
      "Sweet endings to your flame-grilled experience.",
    order: 6,
    items: [],
  },
]

/**
 * Get all menu categories sorted by order
 */
export function getAllCategories(): MenuCategory[] {
  return [...menuCategories].sort((a, b) => a.order - b.order)
}

/**
 * Get a category by ID
 */
export function getCategoryById(categoryId: string): MenuCategory | undefined {
  return menuCategories.find((cat) => cat.id === categoryId)
}

/**
 * Get menu items by category ID
 */
export function getMenuByCategory(categoryId: string): MenuItem[] {
  const category = getCategoryById(categoryId)
  return category?.items ?? []
}

/**
 * Get all menu items across all categories
 */
export function getAllMenuItems(): MenuItem[] {
  return menuCategories.flatMap((cat) => cat.items)
}

/**
 * Get popular/bestseller menu items
 */
export function getPopularItems(): MenuItem[] {
  return getAllMenuItems().filter((item) => item.isPopular === true)
}

/**
 * Get new menu items
 */
export function getNewItems(): MenuItem[] {
  return getAllMenuItems().filter((item) => item.isNew === true)
}

/**
 * Get vegetarian menu items
 */
export function getVegetarianItems(): MenuItem[] {
  return getAllMenuItems().filter((item) => item.isVeg === true)
}

/**
 * Get items by heat level
 */
export function getItemsByHeatLevel(level: HeatLevel): MenuItem[] {
  return getAllMenuItems().filter((item) => item.heatLevel === level)
}

/**
 * Search menu items by name or description
 */
export function searchMenuItems(query: string): MenuItem[] {
  const lowerQuery = query.toLowerCase()
  return getAllMenuItems().filter(
    (item) =>
      item.name.toLowerCase().includes(lowerQuery) ||
      item.description.toLowerCase().includes(lowerQuery) ||
      item.tags?.some((tag) => tag.toLowerCase().includes(lowerQuery))
  )
}

/**
 * Get items by price range
 */
export function getItemsByPriceRange(minPrice: number, maxPrice: number): MenuItem[] {
  return getAllMenuItems().filter(
    (item) => item.price >= minPrice && item.price <= maxPrice
  )
}

/**
 * Format price for display (INR)
 */
export function formatPrice(price: number): string {
  return `₹${price.toLocaleString("en-IN")}`
}

/**
 * Get heat level label
 */
export function getHeatLevelLabel(level: HeatLevel): string {
  return HEAT_LEVEL_LABELS[level]
}

/**
 * Get heat level color
 */
export function getHeatLevelColor(level: HeatLevel): string {
  return HEAT_LEVEL_COLORS[level]
}

export default menuCategories
