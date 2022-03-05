import React from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import './DataGrid.css'

import {columns, data} from './REPLACE-WITH-API-DATA/data';



class DataGrid extends React.Component {

    render() {

        const tableData = {
            columns,
            data
        };

        return (
          <div className="data-table-container">
                  <DataTableExtensions {...tableData}>
                      <DataTable
                          columns={columns}
                          data={data}
                          noHeader
                          defaultSortField="id"
                          defaultSortAsc={false}
                          pagination
                          highlightOnHover
                      />
                  </DataTableExtensions>
          </div>
        );
    }

}

export default DataGrid;