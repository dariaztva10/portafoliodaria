const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
			  const base = process.env.BACKEND_URL;
			  if (!base) return;
			
			  const url = `${base}/api/hello`;   // pon tu ruta real
			  try {
			    const res = await fetch(url);
			    const ct = res.headers.get("content-type") || "";
			
			    if (!res.ok) {
			      const text = await res.text();
			      console.error("Backend error:", res.status, text);
			      return;
			    }
			    if (!ct.includes("application/json")) {
			      const text = await res.text();
			      console.error("Not JSON:", text);
			      return;
			    }
			
			    const data = await res.json();
			    // ...usa data
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
