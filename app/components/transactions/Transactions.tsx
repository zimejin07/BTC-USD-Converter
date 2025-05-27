"use client";

import { JSX, useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircleIcon,
  ClockIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";

type Status = "Completed" | "Pending" | "Failed";

interface Transaction {
  id: number;
  label: string;
  amount: string;
  status: Status;
  type: "buy" | "sell";
  time: string;
}

const allTransactions: Transaction[] = [
  {
    id: 1,
    label: "Buy BTC",
    amount: "-$320.00",
    status: "Completed",
    type: "buy",
    time: "2 min ago",
  },
  {
    id: 2,
    label: "Sell BTC",
    amount: "+$460.00",
    status: "Pending",
    type: "sell",
    time: "30 min ago",
  },
  {
    id: 3,
    label: "Buy BTC",
    amount: "-$220.00",
    status: "Failed",
    type: "buy",
    time: "1 hr ago",
  },
  {
    id: 4,
    label: "Sell BTC",
    amount: "+$920.00",
    status: "Completed",
    type: "sell",
    time: "Yesterday",
  },
];

const filters: ("All" | Status)[] = ["All", "Completed", "Pending", "Failed"];

const statusConfig: Record<Status, { color: string; icon: JSX.Element }> = {
  Completed: {
    color: "text-green-400",
    icon: <CheckCircleIcon className="w-4 h-4" />,
  },
  Pending: {
    color: "text-yellow-400",
    icon: <ClockIcon className="w-4 h-4" />,
  },
  Failed: {
    color: "text-red-400",
    icon: <XCircleIcon className="w-4 h-4" />,
  },
};

const getStatusIcon = (status: Status) => statusConfig[status].icon;
const getStatusColor = (status: Status) => statusConfig[status].color;

export default function Transactions() {
  const [activeFilter, setActiveFilter] = useState<"All" | Status>("All");
  const [search, setSearch] = useState("");

  const getFilteredTransactions = (): Transaction[] => {
    return allTransactions.filter((t) => {
      const matchesFilter = activeFilter === "All" || t.status === activeFilter;
      const matchesSearch =
        t.label.toLowerCase().includes(search.toLowerCase()) ||
        t.amount.toLowerCase().includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  };

  const filtered = getFilteredTransactions();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-inner space-y-4"
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-semibold text-white/70 uppercase tracking-wide">
          Recent Transactions
        </h3>
      </div>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search transactions"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-3 py-2 text-sm text-white bg-white/5 border border-white/10 rounded-lg placeholder-white/30 outline-none"
      />

      {/* Filter Tabs */}
      <div className="flex gap-2 text-xs font-medium text-white/40 mb-4 overflow-x-auto no-scrollbar pb-2 pt-1">
        {filters.map((label) => (
          <button
            key={label}
            onClick={() => setActiveFilter(label)}
            onKeyDown={(e) => {
              if (e.key === "Enter") setActiveFilter(label);
            }}
            tabIndex={0}
            aria-pressed={activeFilter === label}
            className={`relative px-3 py-1 rounded-full transition whitespace-nowrap ${
              activeFilter === label
                ? "text-white bg-white/10"
                : "hover:text-white hover:bg-white/5"
            }`}
          >
            {label}
            {activeFilter === label && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 rounded-full bg-white/10 -z-10"
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Transaction List */}
      <div className="divide-y divide-white/10">
        {filtered.length === 0 ? (
          <div className="text-center py-6 text-white/40 text-sm">
            No matching transactions
          </div>
        ) : (
          filtered.map((tx) => (
            <motion.div
              key={tx.id}
              whileHover={{ scale: 1.01 }}
              className="flex items-center justify-between py-3"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/10 ${
                    tx.type === "buy" ? "text-blue-400" : "text-pink-400"
                  }`}
                >
                  {tx.type === "buy" ? "↓" : "↑"}
                </div>
                <div className="text-sm">
                  <div className="text-white font-medium">{tx.label}</div>
                  <div className="text-xs text-white/40">{tx.time}</div>
                </div>
              </div>

              <div className="text-right text-sm font-mono">
                <div className="text-white">{tx.amount}</div>
                <div
                  className={`flex items-center justify-end gap-1 text-xs ${getStatusColor(
                    tx.status
                  )}`}
                >
                  {getStatusIcon(tx.status)}
                  {tx.status}
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </motion.div>
  );
}
