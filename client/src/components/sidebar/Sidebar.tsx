import React from 'react';
import styles from './sidebar.module.scss'
import {Bookmarks, Chat, Event, Group, HelpOutline, RssFeed, School, WorkOutline, YouTube} from '@material-ui/icons';
import SidebarMenuItem from './SidebarMenuItem';

const sideBarMenu = [
  {id: 1, icon: <RssFeed/>, name: 'Feed'},
  {id: 2, icon: <Chat/>, name: 'Chats'},
  {id: 3, icon: <YouTube/>, name: 'Videos'},
  {id: 4, icon: <Group/>, name: 'Groups'},
  {id: 5, icon: <Bookmarks/>, name: 'Bookmarks'},
  {id: 6, icon: <HelpOutline/>, name: 'Questions'},
  {id: 7, icon: <WorkOutline/>, name: 'Jobs'},
  {id: 8, icon: <Event/>, name: 'Events'},
  {id: 9, icon: <School/>, name: 'Courses'},
]

const Sidebar: React.FC = () => {

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarWrapper}>
        <ul>
          {
            sideBarMenu.map(item => (
              <SidebarMenuItem key={item.id} icon={item.icon} name={item.name}/>
            ))
          }
        </ul>
        <button>Show More</button>
        <hr/>
      </div>
    </div>
  );
};

export default Sidebar;