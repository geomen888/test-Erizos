import React from 'react';
import PropTypes from 'prop-types';
import SortableTree from 'react-sortable-tree';
import FileExplorerTheme from 'react-sortable-tree-theme-file-explorer';
import { fileProvider } from './data';
import { transForm } from './utils/helper';

export class RootTree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      treeData: props.provideJSON(fileProvider),
    };
  }

  static propTypes = {
      provideJSON: PropTypes.func,
  }

  render() {
    return (<div style={{ margin:'5rem auto auto 2rem', height: '100vh' }} 
    className="root-tree">
     <SortableTree
          treeData={this.state.treeData}
          onChange={treeData => this.setState({ treeData })}
          theme={FileExplorerTheme}
        />
    </div>);

  }
}

RootTree.defaultProps = {
 provideJSON: transForm,   
};

