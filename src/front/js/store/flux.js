// src/front/js/store/flux.js

//  fallback si no llega BACKEND_URL desde dotenv/webpack
const API_BASE = process.env.BACKEND_URL || "http://127.0.0.1:5001";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        { title: "First", background: "white" },
        { title: "Second", background: "white" }
      ]
    },
    actions: {
      getMessage: async () => {
        const url = `${API_BASE}/api/hello`;   // ← tu endpoint real
        try {
          const res = await fetch(url);
          const ct = res.headers.get("content-type") || "";
          if (!res.ok) {
            console.error("Backend error:", res.status, await res.text());
            return;
          }
          if (!ct.includes("application/json")) {
            console.error("Not JSON:", await res.text());
            return;
          }
          const data = await res.json();
          console.log("Mensaje del backend:", data);
        } catch (e) {
          console.error("Network error:", e);
        }
      },

      changeColor: (index, color) => {
        const store = getStore();
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });
        setStore({ demo });
      }
    }
  };
};

export default getState;   // solo este export
