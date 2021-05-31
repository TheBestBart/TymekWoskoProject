// const addLogout = () => {
//   console.log('czemu nie dzialam?')
// 	if(document.cookie.includes('user=')){
//     const menuPanelWrapper = document.getElementById("linksWrapper")
//     const id = document.cookie.replace("user=", "");
//     console.log('id', id);

//     if(menuPanelWrapper) {
//       const logoutLink = document.createElement('a');
//       logoutLink.setAttribute('href', `/api/logout/${id}`);
//       logoutLink.classList.add(".page-header-link");
//       logoutLink.textContent = 'Wyloguj';
//       menuPanelWrapper.appendChild(logoutLink);
//     }
//   }
// }


// const menuPanelWrapper = document.getElementById("linksWrapper");
// menuPanelWrapper.addEventListener('load', addLogout);