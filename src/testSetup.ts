import '@testing-library/jest-dom/vitest';

// Basic browser API fallbacks for tests
window.scrollTo = window.scrollTo || (() => {});
window.alert = window.alert || (() => {});
window.confirm = window.confirm || (() => true);




