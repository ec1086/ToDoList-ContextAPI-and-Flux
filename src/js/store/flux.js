const getState = ({ getStore, setStore }) => {
	return {
	  store: {
		toDoList: ["Clean Dishes", "Do Laundry"],
	  },
	  actions: {
		addTask: (task) => {
		  //get the store
		  const store = getStore();
		  store.toDoList.push(task)
		},
  
		deleteTask: (i) => {
		  //get the store
		  const store = getStore();
		  setStore({
			...store,
			toDoList: store.toDoList.filter((_, index) => {
			  return index != i;
			}),
		  });
		},
	  },
	};
  };
  
  export default getState;