import store from 'store2'
import type { AboutBlankData } from './types'

export function handleAboutBlank() {
  const aboutblankData = store('aboutblank') as AboutBlankData

  if (aboutblankData.enabled && window.self === window.top) {
    openAbWindow(window.location.origin)
  }
}

-export function openAbWindow(src: string, redirect = true) {
  // Define the HTML content for the new tab
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Classes</title>
        <style>
          body { margin: 0; padding: 0; overflow: hidden; }
          iframe { border: none; width: 100vw; height: 100vh; position: fixed; top: 0; left: 0; }
        </style>
      </head>
      <body>
        <iframe src="${src}"></iframe>
      </body>
    </html>
  `;

  // Create a Blob from the HTML string and generate a URL
  const blob = new Blob([html], { type: 'text/html' });
  const blobUrl = URL.createObjectURL(blob);

  // Open the blob URL instead of about:blank
  const tab = window.open(blobUrl, '_blank');

  if (redirect) {
    window.location.replace('https://classroom.google.com/h');
  }
}
