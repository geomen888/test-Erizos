import React , { useState, useEffect } from 'react';
import FolderTree from 'react-folder-tree';
import { fileProvider } from './data';
import { transForm } from './utils/helper';

export default () => {
      const [data] = useState(transForm(fileProvider));
      
      useEffect(() => {
        if(data){
          console.log(data);
        }
        
      
      }, [data]);

    return (<div>
         <FolderTree      
         data={data}       
        />
    </div>);
}