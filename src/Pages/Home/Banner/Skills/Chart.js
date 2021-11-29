import React from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';


const Chart = () => {
    const data01 = [
        { name: 'HTML 70%', value: 70 },
        { name: 'Group B', value: 30 },
        { name: 'Group C', value: 30 },
        { name: 'Group D', value: 20 },
        { name: 'Group E', value: 78 },
        { name: 'Group F', value: 89 },
      ];
      
      const data02 = [
        { name: 'Group A', value: 2400 },
        { name: 'Group B', value: 4567 },
        { name: 'Group C', value: 1398 },
        { name: 'Group D', value: 9800 },
        { name: 'Group E', value: 3908 },
        { name: 'Group F', value: 4800 },
      ];
    return (
        <div >
             <PieChart className="custom_bg" width={390} height={390}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            className="w-100 mx-auto m-0 p-0"
            outerRadius={100}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
        </div>
    );
};

export default Chart;