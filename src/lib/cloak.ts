import store from 'store2'
import type { TabData } from './types'

export function handleTabCloak() {
  const tabData = store('tab') as TabData

  if (tabData.name) {
    document.title = tabData.name
  } else {
    document.title = 'MochaBetterVersion'
  }

  if (tabData.icon) {
    ;(document.querySelector('link[rel~=icon]') as HTMLLinkElement).href = tabData.icon || 'https://m.media-amazon.com/images/I/71IHB9-yapL.png';
  }
}
