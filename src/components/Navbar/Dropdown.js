// import React from 'react';
// import { Menu } from './Menu';
// import { Link } from 'react-router-dom';
// import {DropLink, DropdownWrapper} from './NavElements'

// class Dropdown extends React.Component {
//     state = {
//         dropdown: false,
//         clicked: false
//     }

//     clickHandler = () => {
//         console.log("clicked")
//     }

//     render() {
//         return (
//         <>
//         <DropdownWrapper
//             onClick={this.clickHandler}
//             className={this.state.clicked ? 'dropdown-menu clicked' : 'dropdown-menu'}
//         >
//             {Menu.map((item, index) => {
//             return (
//                 <li key={index}>
//                 <Link
//                     className={item.cName}
//                     to={item.path}
//                     onClick={() => this.clickHandler}
//                 >
//                     {item.title}
//                 </Link>
//                 </li>
//             );
//             })}
//         </DropdownWrapper>
//         </>
//     );
//     }
// }

// export default Dropdown;