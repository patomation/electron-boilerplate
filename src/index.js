'use strict';
import eventsGlobal from './globals/events.js';
import styles from './sass/main.scss';

import dragDropPreventDefault from './modules/dragDropPreventDefault.js';
import dropZone from './modules/dropZone.js';
import fileList from './modules/fileList.js';

const entry = () => {
  dragDropPreventDefault();
  dropZone.init();
  fileList.init();
  events.on('drop',(files)=>{
    debugger;
  })
}


entry();
