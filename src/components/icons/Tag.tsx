/*
 * @Author: Ender-Wiggin
 * @Date: 2023-08-03 06:34:29
 * @LastEditors: Ender-Wiggin
 * @LastEditTime: 2025-03-11 01:00:25
 * @Description:
 */
import React from 'react';

import { EScanAction, TIcon } from '@/types/element';
import { TShape } from '@/types/Icon';
interface TagProps {
  type: TIcon;
  shape?: TShape;
}

const TagComponent: React.FC<TagProps> = ({ type, shape = 'round' }) => {
  let iconCls;
  switch (shape) {
    case 'diamond':
      iconCls = 'seti-icon diamond';
      break;
    case 'round':
      iconCls = 'seti-icon';
      break;
    case 'normal':
      iconCls = 'seti-icon normal';
      break;
    default:
      iconCls = 'seti-icon';
      break;
  }

  const cls = `${iconCls} icon-${type}`;
  // const cls = `${iconCls} icon-test`;
  return <div className={cls}></div>;
};

export default TagComponent;
