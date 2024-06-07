"use client";

import { Input } from "@/components/common/input";
import { useState, ChangeEvent } from "react";

export default function SettleUp() {
  const [monthlyIncome1, setMonthlyIncome1] = useState(NaN);
  const [monthlyIncome2, setMonthlyIncome2] = useState(NaN);
  const [totalExpenses1, setTotalExpenses1] = useState(NaN);
  const [totalExpenses2, setTotalExpenses2] = useState(NaN);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const newValue = parseFloat(value);

    if (name === "monthlyIncome1") {
      setMonthlyIncome1(newValue);
    } else if (name === "monthlyIncome2") {
      setMonthlyIncome2(newValue);
    } else if (name === "totalExpenses1") {
      setTotalExpenses1(newValue);
    } else if (name === "totalExpenses2") {
      setTotalExpenses2(newValue);
    }
  };

  const user1: String = "Mario";
  const user2: String = "Federica";

  const totalIncome: number = monthlyIncome1 + monthlyIncome2;
  const totalExpenses: number = totalExpenses1 + totalExpenses2;

  const percentageToPay1: number = parseFloat(
    (monthlyIncome1 / totalIncome).toFixed(2)
  );
  const percentageToPay2: number = parseFloat(
    (monthlyIncome2 / totalIncome).toFixed(2)
  );

  const totalToPay1: number = Math.round(percentageToPay1 * totalExpenses);
  const totalToPay2: number = Math.round(percentageToPay2 * totalExpenses);

  const summary = () => {
    if (
      !isNaN(monthlyIncome1) &&
      !isNaN(monthlyIncome2) &&
      !isNaN(totalExpenses1) &&
      !isNaN(totalExpenses2)
    ) {
      return (
        <div className="flex flex-col">
          <div>
            La percentuale in carico a {user1} è {percentageToPay1 * 100}%
          </div>
          <div>
            La percentuale in carico a {user2} è {percentageToPay2 * 100}%
          </div>
          <div>
            La quota in carico a {user1} è {totalToPay1}
          </div>
          <div>
            La quota in carico a {user2} è {totalToPay2}
          </div>
        </div>
      );
    }
  };

  const totalToPay = () => {
    if (totalExpenses1 - totalToPay1 > 0) {
      return (
        <div>
          {user2} deve {totalExpenses1 - totalToPay1} a {user1}
        </div>
      );
    } else if (totalExpenses1 - totalToPay1 < 0) {
      return (
        <div>
          {user1} deve {totalToPay1 - totalExpenses1} a {user2}
        </div>
      );
    } else if (totalExpenses1 === totalToPay1) {
      return <div>Nessuno deve niente a nessuno :D</div>;
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-red-600">Settle Up</h1>
      <div className="flex flex-col gap-4">
        <div className="flex gap-8">
          <div className="flex flex-col">
            <div>Inserisci Entrate Mensili {user1}</div>
            <div>
              <Input
                type="number"
                name="monthlyIncome1"
                id="monthlyIncome1"
                value={monthlyIncome1}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <div>Inserisci Spese Mensili {user1}</div>
            <div>
              <Input
                type="number"
                name="totalExpenses1"
                id="totalExpenses1"
                value={totalExpenses1}
                onChange={handleChange}
              ></Input>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-8">
        <div className="flex flex-col">
          <div>Inserisci Entrate Mensili {user2}</div>
          <div>
            <Input
              type="number"
              name="monthlyIncome2"
              id="monthlyIncome2"
              value={monthlyIncome2}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div>Inserisci Spese Mensili {user2}</div>
          <div>
            <Input
              type="number"
              name="totalExpenses2"
              id="totalExpenses2"
              value={totalExpenses2}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      {summary()}
      {totalToPay()}
    </div>
  );
}
