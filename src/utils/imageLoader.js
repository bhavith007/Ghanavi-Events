// Cache for loaded images and manifest
const imageCache = {}
let manifestCache = null

/**
 * Load the image manifest from public folder
 */
const loadManifest = async () => {
  if (manifestCache) {
    return manifestCache
  }

  try {
    const response = await fetch('/gallery-manifest.json')
    if (response.ok) {
      manifestCache = await response.json()
      return manifestCache
    }
  } catch (error) {
    console.error('Error loading manifest:', error)
  }

  return {}
}

/**
 * Load all images from a specific folder
 * @param {string} folderKey - The folder key (e.g., 'engagement')
 * @returns {Promise<Array>} Array of image objects with id and src
 */
export const loadFolderImages = async (folderKey) => {
  try {
    // Return cached images if available
    if (imageCache[folderKey] && imageCache[folderKey].length > 0) {
      return imageCache[folderKey]
    }

    // Load manifest
    const manifest = await loadManifest()

    if (!manifest[folderKey]) {
      console.error(`Folder not found in manifest: ${folderKey}`)
      return []
    }

    const fileNames = manifest[folderKey]
    const images = fileNames.map((fileName, index) => ({
      id: index + 1,
      src: `/assets/${encodeURIComponent(Object.keys(manifest).find(key => manifest[key].includes(fileName)) || folderKey)}/${fileName}`,
      alt: `Image ${index + 1}`
    }))

    // Need to fix the path - the manifest has folder keys, need to get folder name
    const folderNameMap = {
      'engagement': 'Engagement',
      'wedding': 'Wedding',
      'baby-shower': 'Baby shower',
      'naming-ceremony': 'Naming ceremony',
      'mehendi-ceremony': 'Mehendi ceremony',
      'reception': 'Reception',
      'office-events': 'Office events',
      'balloon-decoration': 'Balloon decoration',
      'door-decoration': 'Door decoration',
      'chappara': 'Chappara',
    }

    const folderName = folderNameMap[folderKey]
    
    const correctedImages = fileNames.map((fileName, index) => ({
      id: index + 1,
      src: `/assets/${encodeURIComponent(folderName)}/${fileName}`,
      alt: `Image ${index + 1}`
    }))

    // Cache the results
    imageCache[folderKey] = correctedImages

    console.log(`Loaded ${correctedImages.length} images for ${folderKey}`)
    return correctedImages

  } catch (error) {
    console.error('Error loading images:', error)
    return []
  }
}

export default loadFolderImages
