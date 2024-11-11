"use client";
import React, { useReducer, useEffect } from 'react';

// Define state shape type
type State = {
  name: string;
  title: string;
  email: string;
  phone: string;
  isEditing: boolean;
};

// Action types
type Action = 
  | { type: 'SET_FIELD'; field: keyof State; value: string }
  | { type: 'TOGGLE_EDIT' }
  | { type: 'SET_INITIAL_DATA'; payload: State };

// Reducer function for managing form state
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value };
    case 'TOGGLE_EDIT':
      return { ...state, isEditing: !state.isEditing };
    case 'SET_INITIAL_DATA':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const PersonalInfo: React.FC = () => {
  // Initial state setup
  const initialState: State = {
    name: 'Shoaib',
    title: 'Software Developer',
    email: 'shoaib@example.com',
    phone: '(123) 456-7890',
    isEditing: false
  };

  const [state, dispatch] = useReducer<React.Reducer<State, Action>>(reducer, initialState);

  // Set data from localStorage if available
  useEffect(() => {
    const savedData = localStorage.getItem('personalInfo');
    if (savedData) {
      const { name, title, email, phone } = JSON.parse(savedData) as State;
      dispatch({
        type: 'SET_INITIAL_DATA',
        payload: { name, title, email, phone, isEditing: false }
      });
    }
  }, []);

  // Field validation functions
  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);
  const validatePhone = (phone: string) => /^\(\d{3}\) \d{3}-\d{4}$/.test(phone);

  const handleSave = () => {
    // Validate email and phone fields
    if (!validateEmail(state.email)) {
      alert("Please enter a valid email.");
      return;
    }
    if (!validatePhone(state.phone)) {
      alert("Please enter a valid phone number in the format (xxx) xxx-xxxx.");
      return;
    }

    // Save data to localStorage
    const dataToSave: State = { ...state };
    localStorage.setItem("personalInfo", JSON.stringify(dataToSave));

    // Exit edit mode
    dispatch({ type: 'TOGGLE_EDIT' });
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Personal Information</h2>

      <form className="space-y-4">
        <div>
          <label className="block text-gray-700">Name:</label>
          <input
            type="text"
            value={state.name}
            onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'name', value: e.target.value })}
            disabled={!state.isEditing}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700">Title:</label>
          <input
            type="text"
            value={state.title}
            onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'title', value: e.target.value })}
            disabled={!state.isEditing}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            value={state.email}
            onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'email', value: e.target.value })}
            disabled={!state.isEditing}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700">Phone:</label>
          <input
            type="tel"
            value={state.phone}
            onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'phone', value: e.target.value })}
            disabled={!state.isEditing}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </form>

      <div className="mt-6 text-gray-700">
        <p><strong>Name:</strong> {state.name}</p>
        <p><strong>Title:</strong> {state.title}</p>
        <p><strong>Email:</strong> {state.email}</p>
        <p><strong>Phone:</strong> {state.phone}</p>
      </div>

      <div className="mt-6 flex space-x-4">
        <button
          onClick={() => dispatch({ type: 'TOGGLE_EDIT' })}
          className="p-3 bg-blue-600 text-white rounded-lg mr-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {state.isEditing ? "Cancel" : "Edit"}
        </button>
        {state.isEditing && (
          <button
            onClick={handleSave}
            className="p-3 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Save
          </button>
        )}
      </div>
    </section>
  );
};

export default PersonalInfo;


