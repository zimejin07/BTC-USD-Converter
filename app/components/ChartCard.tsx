'use client'

import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js'
import { motion } from 'framer-motion'

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale)

export default function ChartCard() {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'BTC/USD',
        data: [27000, 27250, 26980, 27500, 27800, 28050, 27900],
        fill: false,
        borderColor: '#a855f7',
        tension: 0.3,
        pointRadius: 0,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          color: '#999',
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          color: '#666',
          callback: (val: number) => `$${val.toLocaleString()}`,
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.05)',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-inner"
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-white/70 text-sm uppercase tracking-wide font-semibold">
          BTC Market Trend
        </h3>
        <span className="text-xs text-green-400 font-mono">+3.1%</span>
      </div>

      <div className="h-48">
        <Line data={data} options={options} />
      </div>
    </motion.div>
  )
}
