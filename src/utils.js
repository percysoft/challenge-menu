export const convertToObjectArray = (obj) => {
  const rootMenu = { title: 'Root', submenu: [] }

  const processObject = (obj, parentMenu) => {
    for (const [key, value] of Object.entries(obj)) {
      let currentMenu
      if (String(key).length === 1) {
        currentMenu = { submenu: [] }
      } else {
        currentMenu = { title: key, submenu: [] }
      }

      parentMenu.submenu.push(
        String(key).length === 1 ? currentMenu.submenu : currentMenu,
      )

      if (typeof value === 'object' && value !== null) {
        processObject(value, currentMenu)
      } else {
        currentMenu.submenu.push({ title: value })
      }
    }
  }

  processObject(obj, rootMenu)
  return rootMenu.submenu
}
