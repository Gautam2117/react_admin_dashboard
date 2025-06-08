import React from 'react';
import {
  GridComponent,
  Inject,
  ColumnsDirective,
  ColumnDirective,
  Search,
  Page,
  Toolbar,
  ExcelExport,
} from '@syncfusion/ej2-react-grids';

import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';
import { useStateContext } from '../contexts/ContextProvider';

const Employees = () => {
  const { currentMode } = useStateContext();

  const toolbarOptions = ['Search', 'ExcelExport'];

  const editing = {
    allowDeleting: true,
    allowEditing: true,
  };

  let gridInstance;

  const toolbarClick = (args) => {
    if (args.item.id === 'grid_excelexport') {
      gridInstance.excelExport();
    }
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl shadow-md">
      <Header category="Management" title="Employees Directory" />
      <GridComponent
        id="grid"
        dataSource={employeesData}
        ref={(g) => (gridInstance = g)}
        width="auto"
        allowPaging
        allowSorting
        toolbar={toolbarOptions}
        editSettings={editing}
        toolbarClick={toolbarClick}
        pageSettings={{ pageSize: 8 }}
        allowExcelExport
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Search, Page, Toolbar, ExcelExport]} />
      </GridComponent>
    </div>
  );
};

export default Employees;
