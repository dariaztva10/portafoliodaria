// ✅ fallback si no llega la env
const API_BASE = process.env.BACKEND_URL || "http://127.0.0.1:5001";
export default function getState({ getStore, getActions, setStore }) {
  return {
    store: { /* ... */ },
    actions: {
      // ejemplo de acción que llama a tu backend
      getMessage: async () => {
        const url = `${API_BASE}/api/hello`; // <-- tu endpoint real
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
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
