import React from 'react';
import {setNavContainerSize} from "../../Utils";

class SettingsHome extends React.Component {

    componentDidMount() {
        setNavContainerSize();
    }

    render() {
        return(
          <div className="page-content">
              <h1>Settings</h1>
          </div>
        );
    }

}

export default SettingsHome;