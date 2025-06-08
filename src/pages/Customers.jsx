import React from 'react';
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Inject,
  Edit,
  Toolbar,
  Sort,
  Filter,
} from '@syncfusion/ej2-react-grids';

import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';

const Customers = () => {
  const selectionSettings = { persistSelection: true };
  const toolbarOptions = ['Delete'];
  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="m-4 md:m-10 mt-24 p-6 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl shadow-xl">
      <Header category="Management" title="Customer Directory" />
      
      <p className="text-sm text-gray-500 dark:text-gray-300 mb-5">
        Easily manage, edit, and delete customer data from this interactive grid.
      </p>

      <GridComponent
        id="customer-grid"
        dataSource={customersData}
        enableHover={true}
        allowPaging
        pageSettings={{ pageSize: 10, pageCount: 5 }}
        selectionSettings={selectionSettings}
        toolbar={toolbarOptions}
        editSettings={editing}
        allowSorting
        allowFiltering
        allowTextWrap={true}
        gridLines="Both"
        height="auto"
        className="rounded-lg"
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default Customers;
