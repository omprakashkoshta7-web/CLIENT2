// Production API Configuration for SpeedCopy
// Updated with Google Cloud Run deployment URLs

const PRODUCTION_URLS = {
  GATEWAY: import.meta.env.VITE_GATEWAY_URL || 'https://gateway-202671058278.asia-south1.run.app',
  AUTH: import.meta.env.VITE_AUTH_URL || 'https://auth-202671058278.asia-south1.run.app',
  PRODUCT: import.meta.env.VITE_PRODUCT_URL || 'https://product-202671058278.asia-south1.run.app',
  ADMIN: import.meta.env.VITE_ADMIN_URL || 'https://admin-202671058278.asia-south1.run.app',
  FINANCE: import.meta.env.VITE_FINANCE_URL || 'https://finance-202671058278.asia-south1.run.app',
  DESIGN: import.meta.env.VITE_DESIGN_URL || 'https://design-202671058278.asia-south1.run.app',
  NOTIFICATION: import.meta.env.VITE_NOTIFICATION_URL || 'https://notification-202671058278.asia-south1.run.app'
};

// Use production URLs directly since they're deployed
const BASE_URL = import.meta.env.VITE_API_BASE_URL || PRODUCTION_URLS.PRODUCT; // Product service is confirmed working

export const API_CONFIG = {
  // Primary base URL - using working product service
  BASE_URL,
  
  // Service-specific URLs
  SERVICES: {
    AUTH: PRODUCTION_URLS.AUTH,
    PRODUCT: PRODUCTION_URLS.PRODUCT,
    ADMIN: PRODUCTION_URLS.ADMIN,
    FINANCE: PRODUCTION_URLS.FINANCE,
    DESIGN: PRODUCTION_URLS.DESIGN,
    NOTIFICATION: PRODUCTION_URLS.NOTIFICATION,
    GATEWAY: PRODUCTION_URLS.GATEWAY
  },

  // API Endpoints
  ENDPOINTS: {
    // Auth endpoints
    AUTH: {
      LOGIN: '/api/auth/login',
      REGISTER: '/api/auth/register',
      VERIFY: '/api/auth/verify',
      PROFILE: '/api/auth/me',
      GOOGLE_VERIFY: '/api/auth/google-verify',
      SEND_PHONE_OTP: '/api/auth/send-phone-otp',
      VERIFY_PHONE_OTP: '/api/auth/verify-phone-otp',
      ME: '/api/auth/me'
    },

    // Product endpoints (confirmed working)
    PRODUCTS: {
      LIST: '/api/products',
      BY_ID: (id: string) => `/api/products/${id}`,
      BY_SLUG: (slug: string) => `/api/products/slug/${slug}`,
      SEARCH: '/api/products/search',
      BY_FLOW: (flow: string) => `/api/products?flowType=${flow}`,
      GIFTING_FLOW: '/api/products?flowType=gifting',
      SHOPPING_FLOW: '/api/products?flowType=shopping',
      PRINTING_FLOW: '/api/products?flowType=printing',
      
      // Nested structure for better organization
      GENERAL: {
        LIST: '/api/products',
        BY_ID: (id: string) => `/api/products/${id}`,
        BY_SLUG: (slug: string) => `/api/products/slug/${slug}`
      },
      
      CATEGORIES: {
        LIST: '/api/products/categories',
        BY_SLUG: (slug: string) => `/api/products/categories/slug/${slug}`,
        SUBCATEGORIES: (categoryId: string) => `/api/products/categories/${categoryId}/subcategories`
      },
      
      GIFTING: {
        HOME: '/api/gifting/home',
        CATEGORIES: '/api/gifting/categories',
        PRODUCTS: '/api/gifting/products',
        SEARCH: '/api/gifting/search',
        PRODUCT_BY_ID: (id: string) => `/api/gifting/products/${id}`
      },
      
      SHOPPING: {
        HOME: '/api/shopping/home',
        CATEGORIES: '/api/shopping/categories',
        PRODUCTS: '/api/shopping/products',
        SEARCH: '/api/shopping/search',
        DEALS: '/api/shopping/deals',
        TRENDING: '/api/shopping/trending',
        PRODUCT_BY_ID: (id: string) => `/api/shopping/products/${id}`
      },

      PRINTING: {
        HOME: '/api/printing/home',
        CATEGORIES: '/api/printing/categories',
        PRODUCTS: '/api/printing/products',
        PRODUCT_BY_ID: (id: string) => `/api/printing/products/${id}`
      },

      BUSINESS_PRINTING: {
        HOME: '/api/business-printing/home',
        CATEGORIES: '/api/business-printing/categories',
        PRODUCTS: '/api/business-printing/products',
        PRODUCT_BY_ID: (id: string) => `/api/business-printing/products/${id}`
      }
    },

    // Order endpoints
    ORDERS: {
      CREATE: '/api/orders',
      MY_ORDERS: '/api/orders/my-orders',
      ORDER_BY_ID: (id: string) => `/api/orders/${id}`,
      TRACK: (id: string) => `/api/orders/${id}/track`,
      CART: '/api/orders/cart',
      CART_ITEM: (id: string) => `/api/orders/cart/${id}`
    },

    // Cart endpoints
    CART: {
      GET: '/api/cart',
      ADD: '/api/cart/add',
      UPDATE: (id: string) => `/api/cart/${id}`,
      REMOVE: (id: string) => `/api/cart/${id}`,
      CLEAR: '/api/cart/clear',
      CHECKOUT: '/api/cart/checkout'
    },

    // Design endpoints
    DESIGN: {
      TEMPLATES: '/api/design/templates',
      CANVAS: '/api/design/canvas',
      ASSETS: '/api/design/assets',
      RENDER: '/api/design/render',
      FRAMES: (productId: string) => `/api/design/frames/${productId}`
    },

    // Design endpoints (alias for services using DESIGNS)
    DESIGNS: {
      TEMPLATES: '/api/design/templates',
      TEMPLATES_PREMIUM: '/api/design/templates/premium',
      FROM_TEMPLATE: '/api/design/from-template',
      BLANK: '/api/design/blank',
      SAVE: '/api/design/save',
      MY_DESIGNS: '/api/design/my-designs',
      DESIGN_BY_ID: (id: string) => `/api/design/${id}`,
      UPDATE_DESIGN: (id: string) => `/api/design/${id}`,
      APPROVE_DESIGN: (id: string) => `/api/design/${id}/approve`,
      PRODUCT_FRAMES: (productId: string) => `/api/design/frames/${productId}`
    },

    // Finance endpoints
    FINANCE: {
      PAYMENTS: '/api/finance/payments',
      WALLET: '/api/finance/wallet',
      TRANSACTIONS: '/api/finance/transactions',
      WALLET_BALANCE: '/api/finance/wallet/balance',
      WALLET_OVERVIEW: '/api/finance/wallet/overview',
      LEDGER: '/api/finance/ledger',
      TOPUP_CONFIG: '/api/finance/topup/config',
      TOPUP_PREVIEW: '/api/finance/topup/preview',
      ADD_FUNDS: '/api/finance/wallet/add-funds',
      RAZORPAY_INITIATE: '/api/finance/razorpay/initiate',
      RAZORPAY_VERIFY: '/api/finance/razorpay/verify',
      TRANSACTION_HISTORY: '/api/finance/transactions/history'
    },

    // Payment endpoints
    PAYMENT: {
      CREATE: '/api/payment/create',
      VERIFY: '/api/payment/verify'
    },

    // User endpoints
    USER: {
      PROFILE: '/api/user/profile',
      ADDRESSES: '/api/user/addresses'
    },

    // Wishlist endpoints
    WISHLIST: {
      GET: '/api/wishlist',
      ADD: '/api/wishlist/add',
      REMOVE: (productId: string) => `/api/wishlist/${productId}`,
      CLEAR: '/api/wishlist/clear'
    },

    // Notifications endpoints
    NOTIFICATIONS: {
      GET_ALL: '/api/notifications',
      GET_SUMMARY: '/api/notifications/summary',
      MARK_READ: (id: string) => `/api/notifications/${id}/read`,
      MARK_ALL_READ: '/api/notifications/mark-all-read'
    },

    // Tickets/Support endpoints
    TICKETS: {
      CREATE: '/api/tickets',
      GET_ALL: '/api/tickets',
      GET_SUMMARY: '/api/tickets/summary',
      GET_HELP_CENTER: '/api/tickets/help-center',
      GET_BY_ID: (id: string) => `/api/tickets/${id}`,
      REPLY: (id: string) => `/api/tickets/${id}/reply`,
      ASSIGN: (id: string) => `/api/tickets/${id}/assign`,
      UPDATE_STATUS: (id: string) => `/api/tickets/${id}/status`,
      ESCALATE: (id: string) => `/api/tickets/${id}/escalate`
    },

    // Admin endpoints
    ADMIN: {
      ORDERS: '/api/admin/orders',
      CUSTOMERS: '/api/admin/customers',
      VENDORS: '/api/admin/vendors',
      STAFF: '/api/admin/staff'
    }
  },

  // Request configuration
  TIMEOUT: parseInt(import.meta.env.VITE_API_TIMEOUT) || 30000, // 30 seconds
  RETRY_ATTEMPTS: parseInt(import.meta.env.VITE_API_RETRY_ATTEMPTS) || 3,
  
  // Feature flags
  ENABLE_OFFLINE_MODE: import.meta.env.VITE_ENABLE_OFFLINE_MODE === 'true',
  ENABLE_CACHING: import.meta.env.VITE_ENABLE_CACHING === 'true',
  ENABLE_FALLBACK: import.meta.env.VITE_ENABLE_FALLBACK === 'true',
  DEBUG_API: import.meta.env.VITE_DEBUG_API === 'true',
  
  // Headers
  DEFAULT_HEADERS: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
};

// Service health status (based on testing)
export const SERVICE_STATUS = {
  PRODUCT: 'WORKING', // ✅ Confirmed working
  AUTH: 'WORKING', // ✅ API docs accessible
  GATEWAY: 'ISSUES', // ❌ Route not found
  ADMIN: 'ISSUES', // ❌ 404 errors
  FINANCE: 'UNKNOWN', // ⚠️ Not tested
  DESIGN: 'UNKNOWN', // ⚠️ Not tested
  NOTIFICATION: 'UNKNOWN' // ⚠️ Not tested
};

export default API_CONFIG;