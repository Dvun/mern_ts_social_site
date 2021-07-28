import React from 'react';
import styles from './sidebarMenuItem.module.scss'

interface ISidebarMenuItemProps {
  icon: React.ReactNode
  name: string
}

const SidebarMenuItem: React.FC<ISidebarMenuItemProps> = ({icon, name}) => {

  return (
    <li className={styles.sidebarMenuItem}>
      {icon}
      <span>{name}</span>
    </li>
  );
};

export default SidebarMenuItem;