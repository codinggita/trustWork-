import { createSlice } from '@reduxjs/toolkit';

const initialProjects = [
  {
    id: 'PRJ-4921',
    name: "E-commerce Redesign",
    client: "Fashion Hub",
    category: "Design",
    totalAmount: 1500,
    status: "Active",
    progress: 65,
    deadline: "Oct 30, 2026",
    milestones: [
      { id: 'M1', title: "Wireframes", amount: 500, status: "Released", deadline: "Oct 10" },
      { id: 'M2', title: "High-Fi Design", amount: 1000, status: "Locked", deadline: "Oct 25" },
    ],
    disputes: []
  },
  {
    id: 'PRJ-3810',
    name: "Mobile App MVP",
    client: "Tech Start",
    category: "Development",
    totalAmount: 4500,
    status: "Active",
    progress: 30,
    deadline: "Nov 15, 2026",
    milestones: [
      { id: 'M3', title: "Auth Module", amount: 1500, status: "Released", deadline: "Oct 15" },
      { id: 'M4', title: "Core Features", amount: 3000, status: "Locked", deadline: "Nov 01" },
    ],
    disputes: []
  },
  {
    id: 'PRJ-2755',
    name: "SEO Campaign",
    client: "Local Biz",
    category: "Marketing",
    totalAmount: 800,
    status: "Completed",
    progress: 100,
    deadline: "Oct 20, 2026",
    milestones: [
      { id: 'M5', title: "Keyword Research", amount: 800, status: "Released", deadline: "Oct 18" },
    ],
    disputes: []
  }
];

const initialPayments = [
  { id: 'TXN-101', projectId: 'PRJ-4921', projectName: "E-commerce Redesign", amount: 500, type: 'Milestone Release', status: 'Completed', date: 'Oct 12, 2026' },
  { id: 'TXN-102', projectId: 'PRJ-4921', projectName: "E-commerce Redesign", amount: 1000, type: 'Escrow Lock', status: 'Locked', date: 'Oct 14, 2026' },
  { id: 'TXN-103', projectId: 'PRJ-3810', projectName: "Mobile App MVP", amount: 1500, type: 'Milestone Release', status: 'Completed', date: 'Oct 16, 2026' },
  { id: 'TXN-104', projectId: 'PRJ-3810', projectName: "Mobile App MVP", amount: 3000, type: 'Escrow Lock', status: 'Locked', date: 'Oct 18, 2026' },
];

const initialState = {
  projects: JSON.parse(localStorage.getItem('projects')) || initialProjects,
  payments: JSON.parse(localStorage.getItem('payments')) || initialPayments
};

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    addProject: (state, action) => {
      state.projects.push(action.payload);
      localStorage.setItem('projects', JSON.stringify(state.projects));
    },
    releaseMilestone: (state, action) => {
      const { projectId, milestoneId } = action.payload;
      const project = state.projects.find(p => p.id === projectId);
      if (project) {
        const milestone = project.milestones.find(m => m.id === milestoneId);
        if (milestone) milestone.status = "Released";
        localStorage.setItem('projects', JSON.stringify(state.projects));
      }
    }
  },
});

export const { addProject, releaseMilestone } = projectSlice.actions;
export default projectSlice.reducer;
