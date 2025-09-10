const getRouterBasename = () => {
  // Check for UI-specific meta tag first (optional)
  const uiRootMeta = document.querySelector('meta[property="og:ui_root_path"]');
  if (uiRootMeta && typeof uiRootMeta.getAttribute('content') === 'string') {
    return uiRootMeta.getAttribute('content')!;
  }

  // Fall back to original behavior
  const ogTitleMeta = document.querySelector('meta[property="og:root_path"]');
  if (ogTitleMeta && typeof ogTitleMeta.getAttribute('content') === 'string') {
    return ogTitleMeta.getAttribute('content')!;
  } else {
    return '';
  }
};

export default getRouterBasename;
