import React from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import './DataGrid.css'

// todo need to do recalculate the page height when the rows per page is changed

class DataGrid extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {

        let columns = this.props.columns;
        let data = this.props.data;

        const tableData = {
            columns,
            data
        }

        return (
          <div className="data-table-container">
                  <DataTableExtensions {...tableData}>
                      <DataTable
                          columns={columns}
                          data={data}
                          noHeader
                          striped={true}
                          defaultSortField="id"
                          defaultSortAsc={false}
                          pagination
                          highlightOnHover
                          pointerOnHover
                          onRowClicked={this.props.handleRowClick}
                      />
                  </DataTableExtensions>
          </div>
        );
    }

}

export default DataGrid;