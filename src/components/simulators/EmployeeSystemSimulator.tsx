import React, { useState } from 'react';

interface Employee {
  id: number;
  name: string;
  dept: string;
  status: 'Active' | 'On Leave';
  tasks: number;
}

export default function EmployeeSystemSimulator() {
  const [role, setRole] = useState<'Admin' | 'Employee'>("Admin");
  const [employees, setEmployees] = useState<Employee[]>([
    { id: 1, name: "Aarav Sharma", dept: "Frontend", status: "Active", tasks: 4 },
    { id: 2, name: "Pooja Mehta", dept: "Backend (Node)", status: "Active", tasks: 6 },
    { id: 3, name: "Vedika Chavan", dept: "Full Stack Lead", status: "On Leave", tasks: 2 }
  ]);
  const [newEmpName, setNewEmpName] = useState("");
  const [newEmpDept, setNewEmpDept] = useState("Frontend");

  const toggleStatus = (id: number) => {
    setEmployees(prev =>
      prev.map(emp =>
        emp.id === id
          ? { ...emp, status: emp.status === "Active" ? "On Leave" : "Active" }
          : emp
      )
    );
  };

  const addEmployee = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEmpName.trim()) return;
    const newEntry: Employee = {
      id: Date.now(),
      name: newEmpName.trim(),
      dept: newEmpDept,
      status: "Active",
      tasks: 1
    };
    setEmployees([newEntry, ...employees]);
    setNewEmpName("");
  };

  return (
    <div className="bg-slate-900 text-slate-100 rounded-2xl p-5 shadow-2xl border border-indigo-500/20 backdrop-blur-md">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800">
        <div>
          <span className="text-xs uppercase font-mono tracking-widest text-emerald-400">Interactive EMS Sandbox</span>
          <p className="text-xs text-slate-400">Test Role-Based Actions & Local Storage Flow</p>
        </div>
        <div className="flex items-center space-x-1 bg-slate-800 p-1 rounded-lg text-xs">
          <button 
            onClick={() => setRole("Admin")}
            className={`px-3 py-1 rounded font-medium transition-all ${role === "Admin" ? "bg-indigo-600 text-white shadow" : "text-slate-400 hover:text-white"}`}
          >
            Admin View
          </button>
          <button 
            onClick={() => setRole("Employee")}
            className={`px-3 py-1 rounded font-medium transition-all ${role === "Employee" ? "bg-indigo-600 text-white shadow" : "text-slate-400 hover:text-white"}`}
          >
            Staff View
          </button>
        </div>
      </div>

      {role === "Admin" && (
        <form onSubmit={addEmployee} className="mt-4 flex gap-2 flex-wrap sm:flex-nowrap">
          <input 
            type="text" 
            placeholder="New staff name..."
            value={newEmpName}
            onChange={(e) => setNewEmpName(e.target.value)}
            className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
          />
          <select 
            value={newEmpDept}
            onChange={(e) => setNewEmpDept(e.target.value)}
            className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-indigo-500"
          >
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Full Stack">Full Stack</option>
            <option value="DevOps">DevOps</option>
          </select>
          <button 
            type="submit" 
            className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors"
          >
            + Add
          </button>
        </form>
      )}

      <div className="mt-4 space-y-2 max-h-48 overflow-y-auto pr-1">
        {employees.map((emp) => (
          <div key={emp.id} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs">
            <div>
              <p className="font-semibold text-white">{emp.name}</p>
              <p className="text-slate-400 text-[11px]">{emp.dept} • {emp.tasks} Active Sprint Tasks</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                emp.status === "Active" ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30" : "bg-amber-500/20 text-amber-300 border border-amber-500/30"
              }`}>
                {emp.status}
              </span>
              {role === "Admin" && (
                <button 
                  onClick={() => toggleStatus(emp.id)}
                  className="text-[11px] text-indigo-400 hover:text-indigo-300 underline underline-offset-2"
                >
                  Toggle
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
