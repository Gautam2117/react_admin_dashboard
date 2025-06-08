import React from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';

import { kanbanData, kanbanGrid } from '../data/dummy';
import { Header } from '../components';
import { useStateContext } from '../contexts/ContextProvider';

const Kanban = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-2 md:m-10 mt-24 p-4 md:p-10 rounded-3xl shadow-lg transition-all duration-300 ease-in-out bg-white dark:bg-secondary-dark-bg">
      <Header category="App" title="Task Board (Kanban)" />
      <div className="overflow-auto">
        <KanbanComponent
          id="kanban-board"
          keyField="Status"
          dataSource={kanbanData}
          cardSettings={{
            contentField: 'Summary',
            headerField: 'Id',
            template: (props) => (
              <div className="p-3 bg-gray-100 dark:bg-[#3d3f46] rounded-md shadow-sm">
                <p className="text-sm font-semibold text-gray-700 dark:text-white">#{props.Id}</p>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-300">{props.Summary}</p>
              </div>
            ),
          }}
        >
          <ColumnsDirective>
            {kanbanGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
        </KanbanComponent>
      </div>
    </div>
  );
};

export default Kanban;
