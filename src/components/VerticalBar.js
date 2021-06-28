import { Bar } from 'react-chartjs-2';
import './VerticalBar.css'

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
    // {
    //   label: '# of Votes not included',
    //   data: [10, 8, 61, 8, 1, 7],
    //   backgroundColor: [
    //     'rgba(25, 99, 132, 0.2)',
    //     'rgba(54, 162, 235, 0.2)',
    //     'rgba(55, 206, 86, 0.2)',
    //     'rgba(175, 192, 192, 0.2)',
    //     'rgba(23, 102, 255, 0.2)',
    //     'rgba(255, 159, 164, 0.2)',
    //   ],
    //   borderColor: [
    //     'rgba(255, 99, 132, 1)',
    //     'rgba(54, 162, 235, 1)',
    //     'rgba(255, 206, 86, 1)',
    //     'rgba(75, 192, 192, 1)',
    //     'rgba(153, 102, 255, 1)',
    //     'rgba(255, 159, 64, 1)',
    //   ],
    //   borderWidth: 1,
    // },
  ],
};

// const options = {
//   scales: {
//     xAxes: [
//       {
//         ticks: {
//           beginAtZero: true,
//         },
//       },
//     ],
//   },
// };

const VerticalBar = () => (
  <>
    <div className='header'>
      <h1 className='title'>Vertical Bar Chart</h1>
    </div>
    <Bar data={data}
      className="canvas"
    // width={100}
    // height={50}
    // options={{ maintainAspectRatio: false, }}
    />
  </>
);

export default VerticalBar;