const Menu = (parent, [...links], options = {}) => {
  const isInViewport = () => {
    const menuContainer = document.querySelector('.menu--progressive');
    const rectMenu = menuContainer.getBoundingClientRect();
    const rectParent = parent.getBoundingClientRect();
    const rectLastElement = parent.lastElementChild.getBoundingClientRect();
    const firstElement = parent.firstElementChild;
    let rectFirstElement;
    if (firstElement)
      rectFirstElement = parent.firstElementChild.getBoundingClientRect();
    return (
      rectMenu.left > 0 &&
      rectLastElement.right <=
        (window.innerWidth || document.documentElement.clientWidth) &&
      rectLastElement.right <= rectParent.right &&
      (firstElement ? rectFirstElement.left > 0 : true)
    );
  };

  const isFreeSpace = () => {
    const dropdownList = document.querySelector('.dropdown-collapse');
    const wrapper = document.querySelector('.menu-wrapper');

    const siblingLeft = wrapper.previousElementSibling;
    const firstElement = parent.firstElementChild;

    const rect = parent.getBoundingClientRect();
    const wrapperRect = wrapper.getBoundingClientRect();
    const rectLastElement = parent.lastElementChild.getBoundingClientRect();

    let rectSiblingLeft;
    let rectFirstElement;
    if (siblingLeft) {
      rectSiblingLeft = siblingLeft.getBoundingClientRect();
    }
    if (firstElement) {
      rectFirstElement = firstElement.getBoundingClientRect();
    }
    const freeSpaceRight = rect.right - rectLastElement.right;
    const freeSpaceBetween = siblingLeft
      ? wrapperRect.left - rectSiblingLeft.right
      : wrapperRect.left;
    const freeSpaceLeft = firstElement
      ? rectFirstElement.left
      : wrapperRect.left;
    const linkWidth = dropdownList.lastElementChild.clientWidth;

    return (
      freeSpaceRight >= linkWidth ||
      freeSpaceBetween >= linkWidth ||
      freeSpaceLeft >= linkWidth
    );
  };

  const appendLinks = (menu) => {
    links.forEach((link) => {
      menu.appendChild(link);
    });
  };

  const createDropdown = (wrapper) => {
    const dropdown = document.createElement('div');
    const collapsable = document.createElement('div');
    const title = document.createElement('span');

    title.classList.add('dropdown-title');
    dropdown.classList.add('dropdown');
    collapsable.classList.add('dropdown-collapse');

    title.textContent =
      typeof options.dropdownText === 'string'
        ? options.dropdownText
        : 'More ↓';

    dropdown.addEventListener('click', () =>
      dropdown.classList.toggle('active')
    );

    dropdown.append(title, collapsable);
    wrapper.appendChild(dropdown);
  };

  const addStyles = () => {
    require('./assets/style.css');
  };

  const createMenu = () => {
    const menu = document.createElement('ul');
    const wrapper = document.createElement('nav');

    wrapper.classList.add('menu-wrapper');
    menu.classList.add('menu--progressive');

    wrapper.style.display = 'flex';
    wrapper.style.flexDirection = 'row';
    wrapper.style.width = 'min-content';
    menu.style.display = 'flex';
    menu.style.flexDirection = 'row';
    menu.style.overflow = 'hidden';
    menu.style.listStyle = 'none';

    wrapper.appendChild(menu);
    parent.appendChild(wrapper);

    createDropdown(wrapper);
    appendLinks(menu);

    if (!options.noStyles) {
      addStyles();
    }
  };

  const isElementEmpty = (element) => element.childNodes.length === 0;

  const moveLinks = () => {
    const menuContainer = document.querySelector('.menu--progressive');
    const menulinks = [...menuContainer.children];

    menulinks
      .slice()
      .reverse()
      .forEach((link) => {
        let dropdown = document.querySelector('.dropdown-collapse');
        if (!isInViewport() && !dropdown) {
          const wrapper = document.querySelector('.menu-wrapper');
          createDropdown(wrapper);
          dropdown = document.querySelector('.dropdown-collapse');
          menuContainer.removeChild(link);
          dropdown.appendChild(link);
        } else if (!isInViewport() && dropdown) {
          menuContainer.removeChild(link);
          dropdown.appendChild(link);
        }
      });

    const dropdown = document.querySelector('.dropdown-collapse');
    if (dropdown && !isElementEmpty(dropdown)) {
      const dropdownLinks = [...dropdown.children];
      if (dropdownLinks.length > 0) {
        dropdownLinks
          .slice()
          .reverse()
          .forEach((link) => {
            if (isFreeSpace()) {
              dropdown.removeChild(link);
              menuContainer.appendChild(link);
            }
          });
      }
    } else if (dropdown && isElementEmpty(dropdown)) {
      const wrapper = document.querySelector('.menu-wrapper');
      wrapper.removeChild(dropdown.parentElement);
    }
  };
  return { createMenu, moveLinks };
};

export default Menu;